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
  },
  {
    id: 'mexican-tacos-al-pastor',
    name: 'Tacos Al Pastor',
    description: 'Marinated pork tacos with pineapple, onions, and cilantro',
    cuisine: 'Mexican',
    prepTime: '4 hours',
    cookTime: '20 min',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '2kg pork shoulder, sliced thin',
      '1 pineapple, sliced',
      '20 corn tortillas',
      '2 white onions, diced',
      '1 cup fresh cilantro',
      '3 dried guajillo chilies',
      '2 dried ancho chilies',
      '4 cloves garlic',
      '1 tbsp cumin',
      '1 tbsp oregano',
      '2 tbsp white vinegar',
      'Lime wedges',
      'Salsa verde'
    ],
    instructions: [
      'Soak dried chilies in hot water for 30 minutes, then blend with garlic, cumin, oregano, and vinegar.',
      'Marinate pork slices in the chili mixture for at least 4 hours.',
      'Cook marinated pork on a hot grill or skillet until edges are crispy.',
      'Grill pineapple slices until caramelized.',
      'Warm tortillas on a comal or dry skillet.',
      'Dice the cooked pork and pineapple.',
      'Assemble tacos with meat, pineapple, onions, and cilantro.',
      'Serve with lime wedges and salsa verde.'
    ],
    image: '/src/assets/mexican-cuisine.jpg',
    tags: ['pork', 'spicy', 'street food', 'grilled']
  },
  {
    id: 'french-coq-au-vin',
    name: 'Coq au Vin',
    description: 'Classic French chicken braised in red wine with vegetables',
    cuisine: 'French',
    prepTime: '30 min',
    cookTime: '1.5 hours',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '1 whole chicken, cut into pieces',
      '750ml red wine',
      '200g bacon, diced',
      '12 pearl onions',
      '250g mushrooms',
      '3 cloves garlic, minced',
      '2 tbsp tomato paste',
      '2 bay leaves',
      '3 sprigs fresh thyme',
      '2 tbsp butter',
      '2 tbsp flour',
      'Fresh parsley'
    ],
    instructions: [
      'Cook bacon in a large Dutch oven until crispy, remove and set aside.',
      'Brown chicken pieces in the bacon fat, then remove.',
      'Sauté onions and mushrooms until golden.',
      'Add garlic and tomato paste, cook for 1 minute.',
      'Return chicken and bacon to pot, add wine, bay leaves, and thyme.',
      'Bring to a boil, then simmer covered for 1 hour.',
      'Mix butter and flour to make a paste, stir into the sauce to thicken.',
      'Simmer for 15 more minutes, garnish with parsley before serving.'
    ],
    image: '/src/assets/french-cuisine.jpg',
    tags: ['chicken', 'wine', 'braised', 'classic']
  },
  {
    id: 'thai-pad-thai',
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with shrimp, tofu, and traditional sauce',
    cuisine: 'Thai',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '200g rice noodles',
      '200g shrimp, peeled',
      '100g firm tofu, cubed',
      '2 eggs',
      '2 cups bean sprouts',
      '3 green onions, sliced',
      '1/4 cup peanuts, crushed',
      '3 tbsp tamarind paste',
      '3 tbsp fish sauce',
      '2 tbsp brown sugar',
      '2 tbsp vegetable oil',
      'Lime wedges',
      'Fresh cilantro'
    ],
    instructions: [
      'Soak rice noodles in warm water until soft, then drain.',
      'Mix tamarind paste, fish sauce, and brown sugar for the sauce.',
      'Heat oil in a wok or large skillet over high heat.',
      'Add shrimp and tofu, stir-fry until shrimp is pink.',
      'Push to one side, scramble eggs on the other side.',
      'Add noodles and sauce, toss everything together.',
      'Add bean sprouts and green onions, stir-fry for 2 minutes.',
      'Serve with crushed peanuts, lime wedges, and cilantro.'
    ],
    image: '/src/assets/thai-cuisine.jpg',
    tags: ['noodles', 'seafood', 'stir-fry', 'sweet and sour']
  },
  {
    id: 'italian-risotto-milanese',
    name: 'Risotto alla Milanese',
    description: 'Creamy saffron risotto from Northern Italy',
    cuisine: 'Italian',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '320g Arborio rice',
      '1L beef or vegetable stock',
      '1/2 cup white wine',
      '1 onion, finely diced',
      '2 cloves garlic, minced',
      '1/2 tsp saffron threads',
      '100g Parmesan cheese, grated',
      '4 tbsp butter',
      '2 tbsp olive oil',
      'Salt and pepper'
    ],
    instructions: [
      'Heat stock in a separate pot and keep warm.',
      'Steep saffron in 2 tbsp warm stock.',
      'Heat olive oil in a heavy-bottomed pan, sauté onion until translucent.',
      'Add garlic and rice, stir for 2 minutes until rice is coated.',
      'Add wine and stir until absorbed.',
      'Add warm stock one ladle at a time, stirring constantly.',
      'Continue for 18-20 minutes until rice is creamy and al dente.',
      'Stir in saffron mixture, butter, and Parmesan before serving.'
    ],
    image: '/src/assets/italian-cuisine.jpg',
    tags: ['rice', 'saffron', 'creamy', 'comfort food']
  },
  {
    id: 'indian-biryani',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken',
    cuisine: 'Indian',
    prepTime: '45 min',
    cookTime: '1 hour',
    servings: 8,
    difficulty: 'Hard',
    ingredients: [
      '500g basmati rice',
      '1kg chicken, cut into pieces',
      '1 cup yogurt',
      '2 onions, sliced and fried',
      '1/2 cup mint leaves',
      '1/2 cup cilantro',
      '1 tsp saffron',
      '1/4 cup warm milk',
      '4 tbsp ghee',
      '2 tbsp ginger-garlic paste',
      '1 tbsp biryani masala',
      '4 green cardamom pods',
      '2 bay leaves',
      '1 cinnamon stick'
    ],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 30 minutes.',
      'Soak saffron in warm milk.',
      'Cook rice with whole spices until 70% done, then drain.',
      'Cook marinated chicken until tender.',
      'Layer rice and chicken in a heavy-bottomed pot.',
      'Sprinkle fried onions, mint, cilantro, and saffron milk on top.',
      'Cover with foil and lid, cook on high for 3 minutes, then low for 45 minutes.',
      'Let it rest for 10 minutes before opening and serving.'
    ],
    image: '/src/assets/indian-cuisine.jpg',
    tags: ['rice', 'chicken', 'layered', 'aromatic']
  },
  {
    id: 'japanese-sushi-rolls',
    name: 'California Sushi Rolls',
    description: 'Inside-out sushi rolls with crab, avocado, and cucumber',
    cuisine: 'Japanese',
    prepTime: '45 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 cups sushi rice',
      '4 nori sheets',
      '200g imitation crab meat',
      '1 avocado, sliced',
      '1 cucumber, julienned',
      '2 tbsp rice vinegar',
      '1 tbsp sugar',
      '1 tsp salt',
      '2 tbsp sesame seeds',
      'Soy sauce for serving',
      'Wasabi',
      'Pickled ginger'
    ],
    instructions: [
      'Cook sushi rice according to package directions.',
      'Mix rice vinegar, sugar, and salt, then fold into warm rice.',
      'Place nori on bamboo mat, spread rice evenly leaving 1 inch border.',
      'Flip nori so rice is face down on the mat.',
      'Place crab, avocado, and cucumber in the center.',
      'Roll tightly using the bamboo mat.',
      'Sprinkle sesame seeds on the outside.',
      'Cut into 8 pieces with a sharp, wet knife.',
      'Serve with soy sauce, wasabi, and pickled ginger.'
    ],
    image: '/src/assets/japanese-cuisine.jpg',
    tags: ['sushi', 'seafood', 'fresh', 'artistic']
  },
  {
    id: 'mexican-chiles-rellenos',
    name: 'Chiles Rellenos',
    description: 'Roasted poblano peppers stuffed with cheese and fried in egg batter',
    cuisine: 'Mexican',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      '4 large poblano peppers',
      '200g Monterey Jack cheese, cut into strips',
      '4 large eggs, separated',
      '1/4 cup all-purpose flour',
      '2 cups vegetable oil for frying',
      '2 tomatoes',
      '1/4 onion',
      '2 cloves garlic',
      '1 cup chicken broth',
      'Salt to taste'
    ],
    instructions: [
      'Roast poblanos over open flame until charred, then steam in a bag for 10 minutes.',
      'Peel off charred skin, make a small slit, and remove seeds carefully.',
      'Stuff each pepper with cheese strips.',
      'Beat egg whites until stiff peaks form, then fold in beaten yolks.',
      'Dust peppers with flour, then dip in egg batter.',
      'Fry in hot oil until golden brown on all sides.',
      'For sauce: blend tomatoes, onion, and garlic, then simmer with broth.',
      'Serve chiles rellenos with warm tomato sauce.'
    ],
    image: '/src/assets/mexican-cuisine.jpg',
    tags: ['peppers', 'cheese', 'fried', 'traditional']
  },
  {
    id: 'french-ratatouille',
    name: 'Ratatouille',
    description: 'Rustic French vegetable stew from Provence',
    cuisine: 'French',
    prepTime: '20 min',
    cookTime: '45 min',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      '2 eggplants, diced',
      '3 zucchini, sliced',
      '2 bell peppers, chopped',
      '4 tomatoes, chopped',
      '1 onion, diced',
      '4 cloves garlic, minced',
      '1/4 cup olive oil',
      '2 tbsp fresh basil',
      '1 tbsp fresh thyme',
      '2 bay leaves',
      'Salt and pepper'
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat.',
      'Sauté onion until translucent, add garlic for 1 minute.',
      'Add eggplant and cook for 5 minutes.',
      'Add bell peppers and zucchini, cook for 10 minutes.',
      'Add tomatoes, herbs, salt, and pepper.',
      'Simmer covered for 30 minutes, stirring occasionally.',
      'Remove bay leaves and adjust seasoning.',
      'Serve hot as a side dish or over rice.'
    ],
    image: '/src/assets/french-cuisine.jpg',
    tags: ['vegetables', 'healthy', 'rustic', 'mediterranean']
  },
  {
    id: 'thai-green-curry',
    name: 'Green Curry Chicken',
    description: 'Spicy Thai curry with coconut milk, basil, and tender chicken',
    cuisine: 'Thai',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '500g chicken thighs, sliced',
      '400ml coconut milk',
      '3 tbsp green curry paste',
      '2 Thai eggplants, quartered',
      '1 red bell pepper, sliced',
      '1 cup Thai basil leaves',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
      '2 kaffir lime leaves',
      '1 Thai chili, sliced',
      'Jasmine rice for serving'
    ],
    instructions: [
      'Heat 1/3 of coconut milk in a wok until oil separates.',
      'Add green curry paste and fry until fragrant.',
      'Add chicken and cook until no longer pink.',
      'Add remaining coconut milk, bring to a boil.',
      'Add eggplants and bell pepper, simmer for 10 minutes.',
      'Season with fish sauce and palm sugar.',
      'Add lime leaves and Thai basil just before serving.',
      'Serve hot with jasmine rice.'
    ],
    image: '/src/assets/thai-cuisine.jpg',
    tags: ['curry', 'spicy', 'coconut', 'aromatic']
  },
  {
    id: 'italian-osso-buco',
    name: 'Osso Buco',
    description: 'Braised veal shanks with vegetables in white wine',
    cuisine: 'Italian',
    prepTime: '30 min',
    cookTime: '2.5 hours',
    servings: 6,
    difficulty: 'Hard',
    ingredients: [
      '6 veal shanks',
      '1 cup flour for dredging',
      '1/2 cup olive oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery stalks, diced',
      '3 cloves garlic, minced',
      '1 cup white wine',
      '400g canned tomatoes',
      '2 cups beef stock',
      '2 bay leaves',
      'Gremolata: lemon zest, garlic, parsley'
    ],
    instructions: [
      'Dredge veal shanks in flour and brown in olive oil.',
      'Remove shanks and sauté vegetables until soft.',
      'Add garlic and cook for 1 minute.',
      'Return shanks to pot, add wine and reduce.',
      'Add tomatoes, stock, and bay leaves.',
      'Cover and braise in 325°F oven for 2 hours.',
      'Check liquid levels and continue cooking until tender.',
      'Serve with gremolata and risotto milanese.'
    ],
    image: '/src/assets/italian-cuisine.jpg',
    tags: ['veal', 'braised', 'wine', 'elegant']
  },
  {
    id: 'indian-dal-makhani',
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with butter and cream',
    cuisine: 'Indian',
    prepTime: '8 hours',
    cookTime: '3 hours',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '1 cup black urad dal',
      '1/4 cup kidney beans',
      '4 tbsp butter',
      '1/2 cup heavy cream',
      '2 onions, finely chopped',
      '4 tomatoes, pureed',
      '2 tbsp ginger-garlic paste',
      '2 tsp garam masala',
      '1 tsp cumin seeds',
      '1 bay leaf',
      '2 green chilies',
      'Fresh cilantro'
    ],
    instructions: [
      'Soak dal and kidney beans overnight.',
      'Pressure cook lentils with water and salt until very soft.',
      'Heat butter in a heavy pan, add cumin and bay leaf.',
      'Add onions and cook until golden brown.',
      'Add ginger-garlic paste and green chilies.',
      'Add tomato puree and cook until oil separates.',
      'Add cooked lentils and simmer for 1 hour.',
      'Stir in cream and garam masala, garnish with cilantro.'
    ],
    image: '/src/assets/indian-cuisine.jpg',
    tags: ['lentils', 'creamy', 'comfort food', 'vegetarian']
  },
  {
    id: 'japanese-tempura',
    name: 'Vegetable Tempura',
    description: 'Light and crispy battered vegetables with dipping sauce',
    cuisine: 'Japanese',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 sweet potato, sliced',
      '1 eggplant, sliced',
      '8 green beans',
      '4 shishito peppers',
      '1 cup tempura flour',
      '1 egg yolk',
      '1 cup ice water',
      '2 cups vegetable oil',
      '1/4 cup soy sauce',
      '2 tbsp mirin',
      '1 tbsp dashi powder'
    ],
    instructions: [
      'Heat oil to 340°F for frying.',
      'Mix soy sauce, mirin, and dashi for dipping sauce.',
      'Combine tempura flour, egg yolk, and ice water (do not overmix).',
      'Dip vegetables in batter and fry in small batches.',
      'Fry for 2-3 minutes until light golden.',
      'Drain on paper towels immediately.',
      'Serve hot with dipping sauce.',
      'Best enjoyed immediately while crispy.'
    ],
    image: '/src/assets/japanese-cuisine.jpg',
    tags: ['vegetables', 'fried', 'light', 'crispy']
  },
  {
    id: 'mexican-pozole',
    name: 'Pozole Rojo',
    description: 'Traditional Mexican soup with hominy, pork, and red chilies',
    cuisine: 'Mexican',
    prepTime: '45 min',
    cookTime: '2 hours',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      '1kg pork shoulder, cubed',
      '500g pork bones',
      '2 cans white hominy',
      '6 guajillo chilies',
      '2 ancho chilies',
      '4 cloves garlic',
      '1 onion, quartered',
      'Oregano, cabbage, radishes',
      'Lime wedges',
      'Tostadas',
      'Chile piquín'
    ],
    instructions: [
      'Boil pork and bones for 1.5 hours until tender.',
      'Remove meat, shred, and strain broth.',
      'Toast chilies and soak in hot water for 20 minutes.',
      'Blend chilies with garlic and onion.',
      'Strain chili mixture into the pork broth.',
      'Add shredded pork and hominy to the pot.',
      'Simmer for 30 minutes to blend flavors.',
      'Serve with fresh toppings and tostadas.'
    ],
    image: '/src/assets/mexican-cuisine.jpg',
    tags: ['soup', 'pork', 'hominy', 'traditional']
  },
  {
    id: 'french-bouillabaisse',
    name: 'Bouillabaisse',
    description: 'Traditional Provençal fish stew with saffron and herbs',
    cuisine: 'French',
    prepTime: '45 min',
    cookTime: '1 hour',
    servings: 6,
    difficulty: 'Hard',
    ingredients: [
      '1kg mixed fish fillets',
      '500g mussels',
      '300g shrimp',
      '2 onions, sliced',
      '4 tomatoes, chopped',
      '6 cloves garlic',
      '1/2 cup olive oil',
      '1 tsp saffron',
      '2 bay leaves',
      'Fresh thyme',
      'Orange zest',
      'Rouille sauce',
      'Crusty bread'
    ],
    instructions: [
      'Heat olive oil and sauté onions until soft.',
      'Add tomatoes, garlic, and herbs.',
      'Add fish stock and bring to a boil.',
      'Add firm fish first, then delicate fish.',
      'Add shellfish in the last 5 minutes.',
      'Season with saffron, salt, and pepper.',
      'Strain broth and serve separately.',
      'Serve fish with rouille and crusty bread.'
    ],
    image: '/src/assets/french-cuisine.jpg',
    tags: ['seafood', 'stew', 'saffron', 'coastal']
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