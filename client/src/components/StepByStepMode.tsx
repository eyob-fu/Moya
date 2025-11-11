import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Step {
  number: number;
  instruction: string;
  imageUrl?: string;
}

interface StepByStepModeProps {
  recipeName: string;
  steps: Step[];
  ingredients: string[];
  onExit: () => void;
}

export default function StepByStepMode({
  recipeName,
  steps,
  ingredients,
  onExit,
}: StepByStepModeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="border-b p-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-2xl font-bold" data-testid="text-recipe-name">
              {recipeName}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onExit}
              data-testid="button-exit-cooking-mode"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <Progress value={progress} className="h-2" data-testid="progress-steps" />
          <p className="text-sm text-muted-foreground mt-2">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-3xl p-8">
          <div className="space-y-8">
            {steps[currentStep].imageUrl && (
              <img
                src={steps[currentStep].imageUrl}
                alt={`Step ${currentStep + 1}`}
                className="w-full rounded-lg aspect-video object-cover"
                data-testid={`img-step-${currentStep}`}
              />
            )}

            <div className="flex items-start gap-6">
              <div className="font-serif text-8xl font-light text-primary/20">
                {currentStep + 1}
              </div>
              <div className="flex-1">
                <p className="text-3xl leading-relaxed" data-testid={`text-instruction-${currentStep}`}>
                  {steps[currentStep].instruction}
                </p>
              </div>
            </div>

            <Collapsible open={showIngredients} onOpenChange={setShowIngredients}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full" data-testid="button-toggle-ingredients">
                  {showIngredients ? "Hide" : "Show"} Ingredients
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="p-6 mt-4">
                  <h3 className="font-serif text-xl font-bold mb-4">Ingredients</h3>
                  <ul className="space-y-2">
                    {ingredients.map((ingredient, idx) => (
                      <li key={idx} className="text-sm" data-testid={`text-ingredient-${idx}`}>
                        • {ingredient}
                      </li>
                    ))}
                  </ul>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={goToPrevStep}
              disabled={currentStep === 0}
              className="flex-1"
              data-testid="button-prev-step"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>
            <Button
              onClick={goToNextStep}
              disabled={currentStep === steps.length - 1}
              className="flex-1"
              data-testid="button-next-step"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
