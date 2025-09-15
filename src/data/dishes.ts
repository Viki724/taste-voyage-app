export interface Dish {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  image: string;
  tags: string[];
}

export const dishes: Dish[] = [
  {
    id: 'italian-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'A classic Roman pasta dish with eggs, cheese, pancetta, and black pepper',
    cuisine: 'Italian',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale',
      '4 large eggs',
      '100g Pecorino Romano cheese, grated',
      '50g Parmesan cheese, grated',
      'Fresh black pepper',
      'Salt'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
      'While pasta cooks, cut pancetta into small cubes and cook in a large skillet until crispy.',
      'In a bowl, whisk together eggs, grated cheeses, and plenty of black pepper.',
      'When pasta is al dente, reserve 1 cup pasta water and drain.',
      'Add hot pasta to the skillet with pancetta and toss.',
      'Remove from heat and quickly add egg mixture, tossing constantly to create a creamy sauce.',
      'Add pasta water as needed to achieve desired consistency.',
      'Serve immediately with extra cheese and black pepper.'
    ],
    image: '/src/assets/italian-cuisine.jpg',
    tags: ['pasta', 'eggs', 'cheese', 'traditional']
  },
  {
    id: 'indian-butter-chicken',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken in aromatic spices',
    cuisine: 'Indian',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '1kg chicken thighs, cut into pieces',
      '1 cup heavy cream',
      '400g canned tomatoes',
      '2 onions, diced',
      '4 cloves garlic, minced',
      '2 tbsp ginger, minced',
      '2 tbsp garam masala',
      '1 tbsp cumin',
      '1 tbsp coriander',
      '1 tsp turmeric',
      '1 tsp paprika',
      '2 tbsp butter',
      'Fresh cilantro',
      'Basmati rice for serving'
    ],
    instructions: [
      'Marinate chicken with half the spices and yogurt for 30 minutes.',
      'Cook chicken in a large pan until browned and set aside.',
      'In the same pan, sauté onions until soft and golden.',
      'Add garlic, ginger, and remaining spices. Cook for 1 minute.',
      'Add tomatoes and simmer for 10 minutes until sauce thickens.',
      'Return chicken to pan and add cream.',
      'Simmer for 15 minutes until chicken is cooked through.',
      'Stir in butter and fresh cilantro before serving.',
      'Serve with basmati rice and naan bread.'
    ],
    image: '/src/assets/indian-cuisine.jpg',
    tags: ['curry', 'chicken', 'creamy', 'spicy']
  },
  {
    id: 'japanese-ramen',
    name: 'Tonkotsu Ramen',
    description: 'Rich pork bone broth with fresh noodles and traditional toppings',
    cuisine: 'Japanese',
    prepTime: '30 min',
    cookTime: '8 hours',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      '2kg pork bones',
      '500g pork belly',
      '4 portions fresh ramen noodles',
      '4 soft-boiled eggs',
      '2 green onions, sliced',
      '1 sheet nori seaweed',
      '2 tbsp miso paste',
      '2 cloves garlic, minced',
      '1 tbsp sesame oil',
      'Bamboo shoots',
      'Bean sprouts'
    ],
    instructions: [
      'Blanch pork bones in boiling water for 5 minutes, then rinse.',
      'Place bones in a large pot with water and simmer for 8-12 hours.',
      'Strain broth and season with miso, garlic, and sesame oil.',
      'Cook pork belly separately and slice thinly.',
      'Prepare soft-boiled eggs and cut in half.',
      'Cook ramen noodles according to package directions.',
      'Assemble bowls with noodles, hot broth, and toppings.',
      'Garnish with green onions, nori, and bamboo shoots.',
      'Serve immediately while hot.'
    ],
    image: '/src/assets/japanese-cuisine.jpg',
    tags: ['noodles', 'broth', 'pork', 'traditional']
  }
];

export const getCuisineCount = (cuisine: string): number => {
  return dishes.filter(dish => dish.cuisine === cuisine).length;
};

export const getDishById = (id: string): Dish | undefined => {
  return dishes.find(dish => dish.id === id);
};

export const getDishesByCuisine = (cuisine: string): Dish[] => {
  return dishes.filter(dish => dish.cuisine === cuisine);
};