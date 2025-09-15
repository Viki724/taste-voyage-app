interface CuisineCardProps {
  title: string;
  description: string;
  recipeCount: number;
  flag: string;
  image: string;
  onClick?: () => void;
}

export const CuisineCard = ({
  title,
  description,
  recipeCount,
  flag,
  image,
  onClick
}: CuisineCardProps) => {
  return (
    <div 
      className="group cursor-pointer bg-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
      style={{
        boxShadow: 'var(--card-shadow)',
        transition: 'var(--transition-smooth)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
      }}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} cuisine`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          {flag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <p className="text-sm font-medium text-primary">{recipeCount} recipes available</p>
      </div>
    </div>
  );
};