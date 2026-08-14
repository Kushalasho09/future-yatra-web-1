'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1280&q=80',
    poster:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1280&q=80',
    background:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80',
    title: 'Immersive Medical Education',
    date: 'Global Experience',
    scrollToExpand: 'Scroll down to expand view',
    about: {
      overview:
        'Experience hands-on clinical training and modern medical laboratories at top NMC-recognised universities across Georgia, UK, Germany, and Uzbekistan.',
      conclusion:
        'Medico Yatra provides complete guidance from admission and documentation to licensing coaching and clinical placements.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1280&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1920&auto=format&fit=crop',
    title: 'World-Class Clinical Training',
    date: 'International Pathways',
    scrollToExpand: 'Scroll down to expand view',
    about: {
      overview:
        'Explore European medical education with 100% English-medium instruction and direct USMLE / NExT licensing preparation from Year 1.',
      conclusion:
        'Join hundreds of students and families who trust Medico Yatra for transparent, end-to-end medical guidance.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto text-center space-y-4'>
      <h2 className='text-3xl font-bold text-slate-900 dark:text-white font-manjari'>
        About Global Healthcare Pathways
      </h2>
      <p className='text-base sm:text-lg text-slate-600 dark:text-slate-300 font-poppins leading-relaxed'>
        {currentMedia.about.overview}
      </p>

      <p className='text-base sm:text-lg text-slate-600 dark:text-slate-300 font-poppins leading-relaxed'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = 'video';
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default function ScrollExpansionHeroDemo() {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('image');
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='min-h-screen relative'>
      <div className='fixed top-20 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            mediaType === 'video'
              ? 'bg-[#0263CC] text-white shadow-lg'
              : 'bg-black/60 text-white border border-white/30 backdrop-blur-md'
          }`}
        >
          Video Mode
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            mediaType === 'image'
              ? 'bg-[#0263CC] text-white shadow-lg'
              : 'bg-black/60 text-white border border-white/30 backdrop-blur-md'
          }`}
        >
          Image Mode
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
}
