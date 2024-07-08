import CoverParticles from "@/components/cover-particles"

import TransitionPage from "@/components/transition-page";

import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[145vh] h-full md:min-h-[100vh] bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
