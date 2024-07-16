import { PropsWithChildren } from "react";
import UserContextProvider from "src/store/provider/UserContextProvider";

export default function RootContextProvider({ children }: PropsWithChildren) {
  return <UserContextProvider>{children}</UserContextProvider>;
}
