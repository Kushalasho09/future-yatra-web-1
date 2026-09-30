import ComingSoon from "@/components/ComingSoon";

export function generateStaticParams() {
  return [{ coming_soon: ["coming-soon"] }];
}

export default async function CatchAllComingSoonPage({
  params,
}: {
  params: Promise<{ coming_soon?: string[] }>;
}) {
  const resolvedParams = await params;
  const path = resolvedParams?.coming_soon ? resolvedParams.coming_soon.join("/") : "coming-soon";
  const formattedTitle = path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <ComingSoon pageTitle={`${formattedTitle} — Coming Soon`} />;
}
