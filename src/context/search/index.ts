import { useContext } from "react";
import { SearchContext } from "./context";

export default function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearchContext must be used within a SearchProvider");
  return context;
}
