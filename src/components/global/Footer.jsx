export default function Footer({ data = {} }) {
  return (
    <footer className="w-full grotesque-font py-10 sm:py-12 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex-shrink-0">
            <span className="text-[5.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-normal leading-none text-[#222]">
              {data.brand}
            </span>
          </div>
          <div className="flex flex-col max-w-full md:max-w-sm lg:max-w-md gap-2">
            <p className="text-sm font-light sm:text-base text-[#222] md:text-right m-0 hidden md:block">
              {data.description}
            </p>
            <div className="mt-4 text-xs sm:text-sm text-[#666] md:text-right">
              <a href={data.privacyUrl}>{data.privacyLabel}</a>
              <span className="mx-2">|</span>
              <a href={data.termsUrl}>{data.termsLabel}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
