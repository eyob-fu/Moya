import { useEffect, useState } from "react";
import RecipeHeader from "@/components/RecipeHeader";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import RecipeGrid from "@/components/RecipeGrid";

const mockRecipes = [
  {
    id: 1,
    title: "Rustic Sourdough Bread",
    category: "baking",
    cookTime: 240,
    servings: 8,
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    category: "mains",
    cookTime: 45,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80"
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    category: "desserts",
    cookTime: 25,
    servings: 24,
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80"
  },
  {
    id: 4,
    title: "Avocado Toast",
    category: "breakfast",
    cookTime: 10,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80"
  },
  {
    id: 5,
    title: "Caesar Salad",
    category: "appetizers",
    cookTime: 15,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80"
  },
  {
    id: 6,
    title: "Blueberry Muffins",
    category: "baking",
    cookTime: 35,
    servings: 12,
    imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80"
  },
];

export default function Home() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || recipe.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  
  return (
    <div className="min-h-screen bg-background">
      <RecipeHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-serif text-4xl font-bold mb-2">My Recipes</h2>
          <p className="text-muted-foreground">
            Browse your collection of {mockRecipes.length} delicious recipes
          </p>
        </div>

        <div className="space-y-6">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <RecipeGrid recipes={filteredRecipes} />
        </div>
      </main>
    </div>
  );
}
