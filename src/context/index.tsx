import { PropsWithChildren } from "react";
import TodoProvider from "./todo/provider";
import SearchProvider from "./search/provider";
import LogProvider from "src/context/log/provider";

export default function ContextProvider({ children }: PropsWithChildren) {
  return (
    <TodoProvider>
      <SearchProvider>
        <LogProvider>{children}</LogProvider>
      </SearchProvider>
    </TodoProvider>
  );
}
