import { useState } from "react";
import { Link, useLocation } from "wouter";
import RecipeHeader from "@/components/RecipeHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, X, Wand2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const photoStyles = [
  { id: "rustic", label: "Rustic Natural Light", description: "Warm, natural lighting with earthy tones" },
  { id: "modern", label: "Modern Minimalist", description: "Clean, bright with simple composition" },
  { id: "moody", label: "Dark & Moody", description: "Dramatic shadows and rich colors" },
  { id: "bright", label: "Bright & Airy", description: "Light, fresh, and vibrant" },
];

export default function CreateRecipe() {
  const [, setLocation] = useLocation();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState<string[]>([""]);
  const [photoStyle, setPhotoStyle] = useState("rustic");
  const [isGenerating, setIsGenerating] = useState(false);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleGeneratePhotos = () => {
    setIsGenerating(true);
    console.log("Generating photos with style:", photoStyle);
    setTimeout(() => {
      setIsGenerating(false);
      console.log("Photos generated!");
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recipe created:", { title, category, cookTime, servings, ingredients, instructions, photoStyle });
    setLocation("/");
  };

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

        <h1 className="font-serif text-4xl font-bold mb-8">Create New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="p-6">
            <h2 className="font-serif text-2xl font-bold mb-6">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Recipe Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Rustic Sourdough Bread"
                  data-testid="input-title"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger data-testid="select-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="appetizers">Appetizers</SelectItem>
                      <SelectItem value="mains">Main Dishes</SelectItem>
                      <SelectItem value="desserts">Desserts</SelectItem>
                      <SelectItem value="baking">Baking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cookTime">Cook Time (minutes)</Label>
                  <Input
                    id="cookTime"
                    type="number"
                    value={cookTime}
                    onChange={(e) => setCookTime(e.target.value)}
                    placeholder="45"
                    data-testid="input-cooktime"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="servings">Servings</Label>
                  <Input
                    id="servings"
                    type="number"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    placeholder="4"
                    data-testid="input-servings"
                    required
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold">Ingredients</h2>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addIngredient}
                data-testid="button-add-ingredient"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>

            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    placeholder="e.g., 500g bread flour"
                    data-testid={`input-ingredient-${index}`}
                    required
                  />
                  {ingredients.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                      data-testid={`button-remove-ingredient-${index}`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold">Instructions</h2>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addInstruction}
                data-testid="button-add-instruction"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Step
              </Button>
            </div>

            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="font-serif text-xl font-bold text-primary/30 pt-2 w-8 flex-shrink-0">
                    {index + 1}
                  </div>
                  <Textarea
                    value={instruction}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    placeholder="Describe this step..."
                    className="resize-none"
                    rows={2}
                    data-testid={`input-instruction-${index}`}
                    required
                  />
                  {instructions.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeInstruction(index)}
                      data-testid={`button-remove-instruction-${index}`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-serif text-2xl font-bold mb-6">AI Photo Generation</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Photography Style</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {photoStyles.map((style) => (
                    <Card
                      key={style.id}
                      className={`p-4 cursor-pointer hover-elevate ${
                        photoStyle === style.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setPhotoStyle(style.id)}
                      data-testid={`card-style-${style.id}`}
                    >
                      <h4 className="font-semibold mb-1">{style.label}</h4>
                      <p className="text-sm text-muted-foreground">{style.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGeneratePhotos}
                disabled={isGenerating || !title}
                data-testid="button-generate-photos"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                {isGenerating ? "Generating..." : "Generate Recipe Photos"}
              </Button>
            </div>
          </Card>

          <div className="flex justify-end gap-3">
            <Link href="/">
              <Button type="button" variant="outline" data-testid="button-cancel">
                Cancel
              </Button>
            </Link>
            <Button type="submit" data-testid="button-save-recipe">
              Save Recipe
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
