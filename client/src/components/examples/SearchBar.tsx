import { useState } from "react";
import SearchBar from "../SearchBar";

export default function SearchBarExample() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="w-full max-w-4xl">
      <SearchBar
        searchQuery={search}
        onSearchChange={(query) => {
          setSearch(query);
          console.log("Search query:", query);
        }}
      />
    </div>
  );
}
