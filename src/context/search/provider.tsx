import { PropsWithChildren, useState } from "react";
import { SearchContext } from "./context";

export default function SearchProvider({ children }: PropsWithChildren) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const addSearchTerm = (term: string) =>
    setRecentSearches((prev) => {
      const newSearches = [term, ...prev.filter((t) => t !== term)].slice(0, 5);
      return newSearches;
    });

  const deleteSearchTerm = (term: string) =>
    setRecentSearches((prev) => prev.filter((t) => t !== term));

  return (
    <SearchContext.Provider value={{ recentSearches, addSearchTerm, deleteSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
