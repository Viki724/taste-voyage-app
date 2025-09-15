import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CuisineCard } from "@/components/CuisineCard";
import italianImage from "@/assets/italian-cuisine.jpg";
import indianImage from "@/assets/indian-cuisine.jpg";
import japaneseImage from "@/assets/japanese-cuisine.jpg";
import mexicanImage from "@/assets/mexican-cuisine.jpg";
import frenchImage from "@/assets/french-cuisine.jpg";
import thaiImage from "@/assets/thai-cuisine.jpg";
import { useToast } from "@/hooks/use-toast";

const cuisines = [
  {
    title: "Italian",
    description: "Authentic flavors from the heart of Italy",
    recipeCount: 15,
    flag: "🇮🇹",
    image: italianImage,
    cuisine: "Italian"
  },
  {
    title: "Indian", 
    description: "Aromatic spices and rich flavors from the Indian subcontinent",
    recipeCount: 11,
    flag: "🇮🇳",
    image: indianImage,
    cuisine: "Indian"
  },
  {
    title: "Japanese",
    description: "Delicate flavors and artful presentation from Japan", 
    recipeCount: 10,
    flag: "🇯🇵",
    image: japaneseImage,
    cuisine: "Japanese"
  },
  {
    title: "Mexican",
    description: "Vibrant and bold flavors from Mexico",
    recipeCount: 10, 
    flag: "🇲🇽",
    image: mexicanImage,
    cuisine: "Mexican"
  },
  {
    title: "French",
    description: "Elegant and refined cuisine from France",
    recipeCount: 10,
    flag: "🇫🇷", 
    image: frenchImage,
    cuisine: "French"
  },
  {
    title: "Thai",
    description: "Fresh herbs and bold flavors from Thailand",
    recipeCount: 10,
    flag: "🇹🇭",
    image: thaiImage,
    cuisine: "Thai"
  }
];

const Index = () => {
  const [filteredCuisines, setFilteredCuisines] = useState(cuisines);
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    const filtered = cuisines.filter(cuisine => 
      cuisine.title.toLowerCase().includes(query.toLowerCase()) ||
      cuisine.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCuisines(filtered);
    
    toast({
      title: "Search Results",
      description: `Found ${filtered.length} cuisine${filtered.length !== 1 ? 's' : ''} matching "${query}"`,
      duration: 2000,
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onSearch={handleSearch} />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Culinary Adventure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select from our curated collection of world cuisines, each featuring 
              authentic recipes passed down through generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCuisines.map((cuisine, index) => (
              <CuisineCard
                key={index}
                title={cuisine.title}
                description={cuisine.description}
                recipeCount={cuisine.recipeCount}
                flag={cuisine.flag}
                image={cuisine.image}
                cuisine={cuisine.cuisine}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
