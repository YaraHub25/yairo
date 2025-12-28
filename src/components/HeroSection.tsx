import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">

      {/* Unified atmospheric gradient column */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[-220px]
          mx-auto
          h-[1200px]
          w-[1000px]
          bg-gradient-to-b
          from-primary/10
          via-primary/5
          to-transparent
          blur-[140px]
          opacity-70
        "
      />

      <div className="container relative mx-auto px-6 pt-40 pb-16">
        <div className="flex flex-col items-center text-center">

          {/* TEXT BLOCK */}
          <div className="max-w-[640px] space-y-5">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Call when{" "}
              <span className="gradient-text">support</span>{" "}
              is less busy
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Know when to call.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative mt-12 flex justify-center">
            <img
              src={heroImage}
              alt="Yairo showing current wait time and best time to call"
              className="
                w-[680px]
                max-w-full
                rounded-3xl
                -translate-y-[2px]
                shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

