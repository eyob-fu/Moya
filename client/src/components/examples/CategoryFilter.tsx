import { useState } from "react";
import CategoryFilter from "../CategoryFilter";

export default function CategoryFilterExample() {
  const [category, setCategory] = useState("all");
  
  return (
    <div className="w-full max-w-4xl">
      <CategoryFilter
        activeCategory={category}
        onCategoryChange={(cat) => {
          setCategory(cat);
          console.log("Category changed to:", cat);
        }}
      />
    </div>
  );
}
