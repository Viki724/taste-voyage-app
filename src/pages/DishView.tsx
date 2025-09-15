import { useParams, useNavigate } from "react-router-dom";
import { getDishById } from "@/data/dishes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DishView = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const dish = dishId ? getDishById(dishId) : null;

  if (!dish) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dish Not Found</h1>
          <p className="text-muted-foreground mb-6">The recipe you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleStartCooking = () => {
    toast({
      title: "Let's get cooking! 👨‍🍳",
      description: `Starting ${dish.name}. Good luck with your culinary adventure!`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cuisines
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dish.name}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{dish.description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Dish Image and Quick Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="text-sm font-medium">
                {dish.cuisine}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Prep Time:</span>
                  <span className="font-medium">{dish.prepTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cook Time:</span>
                  <span className="font-medium">{dish.cookTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Servings:</span>
                  <span className="font-medium flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {dish.servings}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <Badge variant={dish.difficulty === 'Easy' ? 'secondary' : dish.difficulty === 'Medium' ? 'default' : 'destructive'}>
                    {dish.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-full" 
              size="lg"
              onClick={handleStartCooking}
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Start Cooking
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {dish.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {dish.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DishView;