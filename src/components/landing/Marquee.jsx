/** @param {{ items: string[] }} props */
export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];

  return (
    <section data-gsap="fade-in" className="w-full overflow-hidden border-y border-gray-200 py-4 my-8">
      <style>{`
        .marquee-track {
          display: flex;
          animation: marquee 28s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
      <div className="marquee-track gap-12 whitespace-nowrap">
        {doubled.map((item, idx) => (
          <span key={idx} className="text-sm font-light text-gray-500 uppercase tracking-widest shrink-0">
            {item}
            <span className="ml-12 text-gray-200">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
