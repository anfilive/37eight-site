/** @param {{ data: { id?: string; slug?: string; href?: string; image: string; title: string; description: string }[]; sectionTitle?: string; maxCards?: number; basePath?: string; seeMoreHref?: string }} props */
export default function Cards({ data = [], sectionTitle, maxCards, basePath = "/journal", seeMoreHref }) {
  const visibleCards = maxCards ? data.slice(0, maxCards) : data;

  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-8">
      <hr className="mb-6 border-t border-gray-200" />
      <h2 className="text-gray-400 text-sm font-light mb-6">{sectionTitle}</h2>

      <div data-gsap="stagger-up" className="grid grid-cols-1 grotesque-font sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleCards.map((item) => (
          <a
            key={item.id || item.slug}
            href={item.slug ? `${basePath}/${item.slug}` : (item.href ?? "#")}
            className="block group"
          >
            <img
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="w-full aspect-[3/3] object-cover transition-transform duration-200 group-hover:scale-105"
            />
            <div className="py-4">
              <h3 className="text-base font-light text-gray-900 flex items-center gap-1">
                {item.title}
                <span
                  aria-hidden="true"
                  className="inline-block text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </h3>
              <p className="text-sm w-full max-w-xs sm:max-w-sm md:max-w-md font-light text-gray-400 mt-1">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {maxCards && data.length > maxCards && (
        <div className="flex justify-center mt-6">
          <a
            href={seeMoreHref ?? basePath}
            className="px-6 py-2 rounded bg-gray-900 text-white text-sm font-light hover:bg-gray-700 transition"
          >
            See more
          </a>
        </div>
      )}
    </section>
  );
}
