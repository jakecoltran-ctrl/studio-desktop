export default function Header() {
  return (
    <header className="relative w-full bg-charcoal min-h-[280px] md:min-h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
          Studio at Desktop
        </h1>
        <p className="text-white/80 text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
          Service Pricing & Packages
        </p>
      </div>

      <img
        src="/studio-logo-white.png"
        alt="Studio at Desktop Logo"
        className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 max-w-[50px] md:max-w-[60px]"
      />
    </header>
  );
}
