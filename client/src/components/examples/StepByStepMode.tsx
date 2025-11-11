import { useState } from "react";
import StepByStepMode from "../StepByStepMode";
import { Button } from "@/components/ui/button";

const mockSteps = [
  {
    number: 1,
    instruction: "Preheat your oven to 450°F (230°C). Place a Dutch oven with the lid on inside the oven to heat up.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
  },
  {
    number: 2,
    instruction: "Turn the dough out onto a well-floured surface. Shape it into a round loaf by folding the edges toward the center.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
  },
  {
    number: 3,
    instruction: "Carefully remove the hot Dutch oven from the oven. Place the dough inside and cover with the lid.",
  },
  {
    number: 4,
    instruction: "Bake covered for 30 minutes, then remove the lid and bake for another 15-20 minutes until golden brown.",
  },
];

const mockIngredients = [
  "500g bread flour",
  "350ml warm water",
  "10g salt",
  "100g active sourdough starter",
];

export default function StepByStepModeExample() {
  const [showMode, setShowMode] = useState(false);

  if (!showMode) {
    return (
      <div className="p-8">
        <Button onClick={() => setShowMode(true)} data-testid="button-open-cooking-mode">
          Open Cooking Mode
        </Button>
      </div>
    );
  }

  return (
    <StepByStepMode
      recipeName="Rustic Sourdough Bread"
      steps={mockSteps}
      ingredients={mockIngredients}
      onExit={() => {
        setShowMode(false);
        console.log("Exited cooking mode");
      }}
    />
  );
}
