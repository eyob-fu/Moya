import { Link } from "wouter";
import Logo from "../../public/favicon.png"

export default function RecipeHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home">
            <img src={Logo} alt="Recipe Box" className="w-8 h-8" />
            <div>
              <h1 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">
                MOYA
              </h1>
              <p className="text-xs text-muted-foreground">Your Personal Cookbook</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
