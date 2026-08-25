const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const ffmpeg = require("ffmpeg-static");
const rootDir = path.resolve(__dirname, "..");
const videoPath = path.join(rootDir, "public", "animation.mp4");
const outputDir = path.join(rootDir, "public", "images");
const tmpDir = path.join(rootDir, ".temp_sprite_frames");

console.log("Using FFmpeg:", ffmpeg);
console.log("Video source:", videoPath);
console.log("Output dir:", outputDir);

if (!fs.existsSync(videoPath)) {
  console.error("Error: animation.mp4 not found at", videoPath);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

// Step 1: Extract all frames from video at 24fps
const allFramesDir = path.join(tmpDir, "all_frames");
fs.mkdirSync(allFramesDir, { recursive: true });
console.log("Extracting full frames from video...");
execSync(`"${ffmpeg}" -y -i "${videoPath}" -vf "scale=640:360" "${allFramesDir}/f_%04d.jpg"`);

const allFiles = fs.readdirSync(allFramesDir).filter(f => f.endsWith(".jpg")).sort();
console.log(`Extracted ${allFiles.length} frames.`);

// Video Analysis:
// Peak Left pointing pose is at frame ~58 (t=2.4s)
// Center neutral idle pose is at frame ~115 (t=4.8s)
// Peak Right pointing pose is at frame ~172 (t=7.2s)

// We want a fluid Left -> Center -> Right progression:
// 0.0 (Left edge) -> Peak Left (frame 58)
// 0.5 (Center)    -> Center Idle (frame 115)
// 1.0 (Right edge) -> Peak Right (frame 172)

// Horizontal Sprite Sheet (48 frames, 320x180 per frame -> 15360x180px)
const hFramesDir = path.join(tmpDir, "h_frames");
fs.mkdirSync(hFramesDir, { recursive: true });

const hFrameCount = 48;
const hHalf = Math.floor(hFrameCount / 2); // 24
const hFrameIndices = [];

// Left to Center (24 frames: 58 -> 115)
for (let i = 0; i < hHalf; i++) {
  const f = Math.round(58 + (115 - 58) * (i / (hHalf - 1)));
  hFrameIndices.push(f);
}
// Center to Right (24 frames: 115 -> 172)
for (let i = 0; i < hHalf; i++) {
  const f = Math.round(115 + (172 - 115) * (i / (hHalf - 1)));
  hFrameIndices.push(f);
}

console.log(`Copying ${hFrameIndices.length} frames for horizontal sprite sheet...`);
hFrameIndices.forEach((fNum, idx) => {
  const src = path.join(allFramesDir, `f_${String(fNum).padStart(4, "0")}.jpg`);
  const dst = path.join(hFramesDir, `h_${String(idx).padStart(4, "0")}.jpg`);
  fs.copyFileSync(src, dst);
});

console.log("Generating horizontal sprite sheet (character-spritesheet.webp)...");
const hSpriteOut = path.join(outputDir, "character-spritesheet.webp");
execSync(`"${ffmpeg}" -y -pattern_type glob -i "${hFramesDir}/h_*.jpg" -filter_complex "scale=320:180,tile=${hFrameIndices.length}x1" -q:v 85 "${hSpriteOut}"`);

// High-Res 8x8 Grid Sprite Sheet (64 frames, 640x360 per frame -> 5120x2880px)
const gridFramesDir = path.join(tmpDir, "grid_frames");
fs.mkdirSync(gridFramesDir, { recursive: true });

const gridTotal = 64;
const gridHalf = 32;
const gridFrameIndices = [];

// Left to Center (32 frames: 58 -> 115)
for (let i = 0; i < gridHalf; i++) {
  const f = Math.round(58 + (115 - 58) * (i / (gridHalf - 1)));
  gridFrameIndices.push(f);
}
// Center to Right (32 frames: 115 -> 172)
for (let i = 0; i < gridHalf; i++) {
  const f = Math.round(115 + (172 - 115) * (i / (gridHalf - 1)));
  gridFrameIndices.push(f);
}

console.log(`Copying ${gridFrameIndices.length} frames for 8x8 grid sprite sheet...`);
gridFrameIndices.forEach((fNum, idx) => {
  const src = path.join(allFramesDir, `f_${String(fNum).padStart(4, "0")}.jpg`);
  const dst = path.join(gridFramesDir, `g_${String(idx).padStart(4, "0")}.jpg`);
  fs.copyFileSync(src, dst);
});

console.log("Generating high-res grid sprite sheet (character-spritesheet-hq.webp)...");
const gridSpriteOut = path.join(outputDir, "character-spritesheet-hq.webp");
execSync(`"${ffmpeg}" -y -pattern_type glob -i "${gridFramesDir}/g_*.jpg" -filter_complex "scale=640:360,tile=8x8" -q:v 85 "${gridSpriteOut}"`);

// Save Metadata JSON
const metaOut = path.join(outputDir, "character-sprite-meta.json");
const metaData = {
  horizontal: {
    src: "/images/character-spritesheet.webp",
    totalFrames: hFrameIndices.length,
    cols: hFrameIndices.length,
    rows: 1,
    frameWidth: 320,
    frameHeight: 180,
    aspectRatio: 16 / 9,
    idleFrame: hHalf - 1, // center frame
    leftFrame: 0,
    rightFrame: hFrameIndices.length - 1,
  },
  grid: {
    src: "/images/character-spritesheet-hq.webp",
    totalFrames: gridTotal,
    cols: 8,
    rows: 8,
    frameWidth: 640,
    frameHeight: 360,
    aspectRatio: 16 / 9,
    idleFrame: gridHalf - 1,
    leftFrame: 0,
    rightFrame: gridTotal - 1,
  },
  hotspots: [
    { id: "best-fit", label: "Find Your Best-Fit Path", side: "top-left", targetX: 0.25, icon: "target" },
    { id: "eligibility", label: "Know Your Eligibility", side: "left-top", targetX: 0.15, icon: "clipboard-check" },
    { id: "application", label: "Build a Stronger Application", side: "left-mid", targetX: 0.05, icon: "file-text" },
    { id: "visa", label: "Prepare for Visa Review", side: "left-bot", targetX: 0.1, icon: "globe" },
    { id: "cost", label: "Understand the True Cost", side: "right-top", targetX: 0.85, icon: "calculator" },
    { id: "options", label: "Weigh Your Options", side: "right-mid", targetX: 0.95, icon: "scale" },
    { id: "admission", label: "Understand Your Admission Position", side: "right-bot-1", targetX: 0.9, icon: "bar-chart" },
    { id: "graduation", label: "Plan Beyond Graduation", side: "right-bot-2", targetX: 0.85, icon: "graduation-cap" },
  ]
};
fs.writeFileSync(metaOut, JSON.stringify(metaData, null, 2));

// Clean up temp directory
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log("All sprite sheets and metadata generated successfully!");
console.log("Horizontal Sprite size:", (fs.statSync(hSpriteOut).size / 1024).toFixed(1), "KB");
console.log("Grid Sprite size:", (fs.statSync(gridSpriteOut).size / 1024).toFixed(1), "KB");
