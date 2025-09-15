import { SearchButton } from "./SearchButton";

export const HeroSection = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <section 
      className="relative py-24 px-4 text-center text-white overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Search Button positioned in top right */}
      <div className="absolute top-8 right-8 z-20">
        <SearchButton onSearch={onSearch} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-lg font-medium tracking-wide uppercase mb-2 opacity-90">
            Cookbook
          </h1>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Discover World Cuisines
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl mx-auto">
          Explore authentic recipes from around the globe. From Italian pasta to Indian curries, 
          embark on a culinary journey through traditional flavors and cooking techniques.
        </p>
      </div>
    </section>
  );
};