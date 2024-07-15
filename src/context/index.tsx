import { PropsWithChildren } from "react";
import TodoProvider from "./todo/provider";
import SearchProvider from "./search/provider";

export default function ContextProvider({ children }: PropsWithChildren) {
  return (
    <TodoProvider>
      <SearchProvider>{children}</SearchProvider>
    </TodoProvider>
  );
}
