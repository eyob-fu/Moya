import RecipeGrid from "../RecipeGrid";

const mockRecipes = [
  {
    id: 1,
    title: "Rustic Sourdough Bread",
    category: "Baking",
    cookTime: 240,
    servings: 8,
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    category: "Main Dishes",
    cookTime: 45,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80"
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    category: "Desserts",
    cookTime: 25,
    servings: 24,
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80"
  },
];

export default function RecipeGridExample() {
  return (
    <div className="w-full max-w-6xl">
      <RecipeGrid recipes={mockRecipes} />
    </div>
  );
}
