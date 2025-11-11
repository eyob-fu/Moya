import { Card } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";

interface PrintableCardProps {
  title: string;
  category: string;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

export default function PrintableCard({
  title,
  category,
  cookTime,
  servings,
  ingredients,
  instructions,
  imageUrl,
}: PrintableCardProps) {
  return (
    <Card className="w-[400px] h-[600px] p-6 overflow-hidden print:shadow-none">
      <div className="flex gap-4 mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-20 h-20 rounded-md object-cover flex-shrink-0"
          data-testid="img-printable-card"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-bold leading-tight mb-1" data-testid="text-title">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
            {category}
          </p>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{cookTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{servings}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-serif font-bold text-sm mb-2">Ingredients</h4>
        <ul className="space-y-1">
          {ingredients.slice(0, 8).map((ingredient, idx) => (
            <li key={idx} className="text-xs flex items-start gap-2" data-testid={`text-ingredient-${idx}`}>
              <span className="text-muted-foreground">□</span>
              <span className="flex-1">{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif font-bold text-sm mb-2">Instructions</h4>
        <ol className="space-y-1">
          {instructions.slice(0, 4).map((instruction, idx) => (
            <li key={idx} className="text-xs flex gap-2" data-testid={`text-step-${idx}`}>
              <span className="font-bold text-muted-foreground">{idx + 1}.</span>
              <span className="flex-1 line-clamp-2">{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="absolute bottom-4 left-6 right-6 pt-4 border-t">
        <p className="text-[10px] text-center text-muted-foreground font-serif italic">
          Recipe Box
        </p>
      </div>
    </Card>
  );
}
