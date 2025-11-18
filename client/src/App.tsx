// src/App.tsx
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import RecipeDetail from "@/pages/recipe-detail";
import CreateRecipe from "@/pages/create-recipe";
import NotFound from "@/pages/not-found";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";

import GlobalProtected from "@/components/GlobalProtected";

function Router() {
  return (
    <Switch>
      <Route path="/mybooks" component={Home} />
      <Route path="/recipe/:id" component={RecipeDetail} />
      <Route path="/create" component={CreateRecipe} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <GlobalProtected>
          <Router />
        </GlobalProtected>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
