import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-background">
      
      {/* Subtle radial glow behind headline (color-based, not image) */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-primary/10
          blur-[120px]
          opacity-60
        "
      />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center gap-14">

          {/* HEADLINE */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Call when{" "}
              <span className="gradient-text">support</span>{" "}
              is less busy
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Call at the perfect time.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">

            {/* Ambient environment bleed (very soft, neutral) */}
            <div
              aria-hidden
              className="
                absolute
                inset-x-0
                top-1/3
                mx-auto
                h-[420px]
                w-[900px]
                rounded-full
                bg-muted/40
                blur-3xl
                opacity-60
              "
            />

            {/* PHONE UI */}
            <img
              src={heroImage}
              alt="Yairo showing current wait time and best time to call"
              className="
                relative
                z-10
                w-[700px]
                max-w-full
                rounded-3xl
                -translate-y-1
                shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
