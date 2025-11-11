import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { UtensilsCrossed, Cookie, Coffee, Salad, Pizza, Cake } from "lucide-react";

const categories = [
  { id: "all", label: "All Recipes", icon: UtensilsCrossed },
  { id: "breakfast", label: "Breakfast", icon: Coffee },
  { id: "appetizers", label: "Appetizers", icon: Salad },
  { id: "mains", label: "Main Dishes", icon: Pizza },
  { id: "desserts", label: "Desserts", icon: Cake },
  { id: "baking", label: "Baking", icon: Cookie },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 p-1">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="flex items-center gap-2"
              data-testid={`button-category-${category.id}`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.label}</span>
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
