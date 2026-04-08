const videoSrc = "/videos/hero.mov";

export default function Hero() {
  return (
    <section data-gsap="hero" className="relative w-full max-w-8xl mx-auto overflow-hidden">
      <video src={videoSrc} autoPlay muted loop playsInline className="h-5/6 w-full" />
    </section>
  );
}
