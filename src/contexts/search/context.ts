import { createContext } from "react";

type SearchContextType = {
  recentSearches: string[];
  addSearchTerm: (term: string) => void;
  deleteSearchTerm: (term: string) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);
