import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchButtonProps {
  onSearch: (query: string) => void;
}

export const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isExpanded && (
        <Input
          type="text"
          placeholder="Search cuisines or dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-64 transition-all duration-300"
          autoFocus
          onBlur={() => {
            if (!query.trim()) {
              setIsExpanded(false);
            }
          }}
        />
      )}
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          if (isExpanded && query.trim()) {
            handleSearch();
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};