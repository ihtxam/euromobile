const brands = ["Apple", "iPhone", "Samsung", "Huawei", "Windows", "iPad", "Xiaomi", "Google Pixel"];

export const BrandsMarquee = () => {
  const row = [...brands, ...brands];
  return (
    <section data-testid="brands-marquee" className="border-y border-slate-200 bg-white py-7 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 text-center">
          We repair every major brand
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-24 px-12">
          {row.map((b, i) => (
            <span
              key={i}
              className="font-heading font-bold text-2xl md:text-3xl text-slate-300 whitespace-nowrap select-none"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
