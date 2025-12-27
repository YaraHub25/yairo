import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-12">

          {/* HEADLINE */}
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Call at the{" "}
              <span className="gradient-text">Right</span>{" "}
              Time. Every Time.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Know exactly when companies are available and call at the perfect time.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center animate-fade-in">

            {/* SOFT BACKDROP (desk / ambient light) */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[900px] h-[520px] bg-muted/40 blur-3xl rounded-full opacity-70" />
            </div>

            {/* PHONE UI */}
            <img
              src={heroImage}
              alt="yairo mobile wait time interface"
              className="
                relative z-10
                w-[700px]
                max-w-full
                rounded-3xl
                shadow-2xl
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;