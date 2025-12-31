const logos = [
  { name: "Apple", src: "/logos/apple.svg" },
  { name: "Netflix", src: "/logos/netflix.svg" },
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Wells Fargo", src: "/logos/wellsfargo.svg" },
  { name: "Bank of America", src: "/logos/bankofamerica.svg" },
  { name: "Uber", src: "/logos/uber.svg" },
  { name: "Google", src: "/logos/google.svg" },
  { name: "FedEx", src: "/logos/fedex.svg" },
];

const LogoMarquee = () => {
  return (
    <section className="relative overflow-hidden py-10">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs text-muted-foreground mb-6">
          Examples of companies where wait times matter
        </p>

        <div className="relative overflow-hidden">
  <div className="flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]">
    {/* first set */}
    {logos.map((logo) => (
      <img
        key={logo.name}
        src={logo.src}
        alt={logo.name}
        className="
          h-8 w-auto
          px-6
          text-neon-turquoise
          opacity-80
          transition-all
          hover:opacity-100
          hover:drop-shadow-[0_0_8px_hsl(var(--neon-turquoise))]
        "
      />
    ))}

    {/* duplicate set */}
    {logos.map((logo) => (
      <img
        key={`${logo.name}-duplicate`}
        src={logo.src}
        alt={logo.name}
        className="
          h-8 w-auto
          px-6
          text-neon-turquoise
          opacity-80
          transition-all
          hover:opacity-100
          hover:drop-shadow-[0_0_8px_hsl(var(--neon-turquoise))]
        "
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default LogoMarquee;