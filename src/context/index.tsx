import { PropsWithChildren } from "react";
import TodoProvider from "./todo/provider";

export default function ContextProvider({ children }: PropsWithChildren) {
  return <TodoProvider>{children}</TodoProvider>;
}
