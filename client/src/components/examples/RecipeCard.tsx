import RecipeCard from "../RecipeCard";

export default function RecipeCardExample() {
  return (
    <div className="w-[320px]">
      <RecipeCard
        id={1}
        title="Rustic Sourdough Bread"
        category="Baking"
        cookTime={240}
        servings={8}
        imageUrl="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
      />
    </div>
  );
}
