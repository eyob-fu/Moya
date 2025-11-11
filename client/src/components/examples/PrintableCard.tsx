import PrintableCard from "../PrintableCard";

export default function PrintableCardExample() {
  return (
    <PrintableCard
      title="Rustic Sourdough Bread"
      category="Baking"
      cookTime={240}
      servings={8}
      imageUrl="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
      ingredients={[
        "500g bread flour",
        "350ml warm water",
        "10g salt",
        "100g active sourdough starter",
        "Extra flour for dusting",
      ]}
      instructions={[
        "Mix flour, water, and starter. Let rest for 30 minutes.",
        "Add salt and knead until smooth. Let rise 4-6 hours.",
        "Shape into a round loaf and place in a floured bowl.",
        "Bake in preheated Dutch oven at 450°F for 45 minutes.",
      ]}
    />
  );
}
