import { useState } from "react";
import { useRoute, Link } from "wouter";
import RecipeHeader from "@/components/RecipeHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Printer, ChefHat, ArrowLeft, Image } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import StepByStepMode from "@/components/StepByStepMode";
import PrintableCard from "@/components/PrintableCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mockRecipe = {
  id: 1,
  title: "Rustic Sourdough Bread",
  category: "Baking",
  cookTime: 240,
  servings: 8,
  imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80",
  description: "A classic artisan bread with a crispy crust and chewy interior. Perfect for sandwiches or served with butter.",
  ingredients: [
    "500g bread flour",
    "350ml warm water (80°F)",
    "10g sea salt",
    "100g active sourdough starter",
    "Extra flour for dusting",
  ],
  instructions: [
    {
      number: 1,
      instruction: "In a large bowl, mix the flour and water until just combined. Let it rest for 30 minutes (autolyse).",
      imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
    },
    {
      number: 2,
      instruction: "Add the sourdough starter and salt. Mix and knead for 5-10 minutes until the dough is smooth and elastic.",
      imageUrl: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80"
    },
    {
      number: 3,
      instruction: "Place in a lightly oiled bowl, cover, and let rise at room temperature for 4-6 hours until doubled in size.",
    },
    {
      number: 4,
      instruction: "Turn the dough onto a floured surface. Shape into a round loaf by folding edges toward center. Place seam-side up in a floured banneton or bowl.",
    },
    {
      number: 5,
      instruction: "Cover and refrigerate overnight (8-12 hours) for cold fermentation.",
    },
    {
      number: 6,
      instruction: "Preheat oven to 450°F (230°C) with a Dutch oven inside for 30 minutes.",
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80"
    },
    {
      number: 7,
      instruction: "Turn dough onto parchment paper, score the top with a sharp knife, and carefully place in the hot Dutch oven.",
    },
    {
      number: 8,
      instruction: "Bake covered for 30 minutes, then remove lid and bake 15-20 more minutes until deep golden brown. Cool completely before slicing.",
    },
  ],
  photos: [
    { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80", caption: "Final plated sourdough", type: "hero" as const },
    { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", caption: "Flour and ingredients", type: "ingredient" as const },
    { url: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80", caption: "Dough rising", type: "step" as const },
    { url: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80", caption: "Fresh from the oven", type: "plating" as const },
  ],
};

export default function RecipeDetail() {
  const [, params] = useRoute("/recipe/:id");
  const [showCookingMode, setShowCookingMode] = useState(false);
  const [showPrintDialog, setShowPrintDialog] = useState(false);

  if (showCookingMode) {
    return (
      <StepByStepMode
        recipeName={mockRecipe.title}
        steps={mockRecipe.instructions}
        ingredients={mockRecipe.ingredients}
        onExit={() => setShowCookingMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <RecipeHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={mockRecipe.imageUrl}
              alt={mockRecipe.title}
              className="w-full h-full object-cover"
              data-testid="img-hero"
            />
          </div>

          <div>
            <h1 className="font-serif text-5xl font-bold mb-4" data-testid="text-recipe-title">
              {mockRecipe.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {mockRecipe.description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2" data-testid="text-cooktime">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{mockRecipe.cookTime} minutes</span>
              </div>
              <div className="flex items-center gap-2" data-testid="text-servings">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span>{mockRecipe.servings} servings</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setShowCookingMode(true)}
                className="flex items-center gap-2"
                data-testid="button-start-cooking"
              >
                <ChefHat className="w-4 h-4" />
                Start Cooking Mode
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPrintDialog(true)}
                className="flex items-center gap-2"
                data-testid="button-print"
              >
                <Printer className="w-4 h-4" />
                Print Recipe
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="font-serif text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {mockRecipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`text-ingredient-${idx}`}>
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-border"
                      data-testid={`checkbox-ingredient-${idx}`}
                    />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {mockRecipe.instructions.map((step, idx) => (
                  <li key={idx} className="flex gap-4" data-testid={`text-step-${idx}`}>
                    <span className="font-serif text-2xl font-bold text-primary/30 flex-shrink-0">
                      {step.number}
                    </span>
                    <p className="leading-relaxed pt-1">{step.instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-bold">Photo Gallery</h2>
            </div>
            <PhotoGallery photos={mockRecipe.photos} />
          </div>
        </div>
      </main>

      <Dialog open={showPrintDialog} onOpenChange={setShowPrintDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Printable Recipe Card</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <PrintableCard
              title={mockRecipe.title}
              category={mockRecipe.category}
              cookTime={mockRecipe.cookTime}
              servings={mockRecipe.servings}
              ingredients={mockRecipe.ingredients}
              instructions={mockRecipe.instructions.map(s => s.instruction)}
              imageUrl={mockRecipe.imageUrl}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowPrintDialog(false)}>
              Close
            </Button>
            <Button onClick={() => window.print()} data-testid="button-print-confirm">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
