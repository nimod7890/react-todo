import { PropsWithChildren, useReducer } from "react";
import { initialUser, UserContext } from "../context/userContext";
import userReducer from "src/store/reducer/userReducer";

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialUser);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
