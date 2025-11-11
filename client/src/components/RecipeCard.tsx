import { Link } from "wouter";
import { Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecipeCardProps {
  id: number;
  title: string;
  category: string;
  cookTime: number;
  servings: number;
  imageUrl: string;
}

export default function RecipeCard({
  id,
  title,
  category,
  cookTime,
  servings,
  imageUrl,
}: RecipeCardProps) {
  return (
    <Link href={`/recipe/${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-recipe-${id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <Badge className="absolute top-3 right-3" data-testid={`badge-category-${id}`}>
            {category}
          </Badge>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif text-xl font-bold text-white mb-2" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <div className="flex items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-1" data-testid={`text-cooktime-${id}`}>
                <Clock className="w-4 h-4" />
                <span>{cookTime} min</span>
              </div>
              <div className="flex items-center gap-1" data-testid={`text-servings-${id}`}>
                <Users className="w-4 h-4" />
                <span>{servings} servings</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
