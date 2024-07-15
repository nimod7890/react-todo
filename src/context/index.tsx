import { PropsWithChildren } from "react";
import TodoProvider from "./todo";

export default function ContextProvider({ children }: PropsWithChildren) {
  return <TodoProvider>{children}</TodoProvider>;
}
