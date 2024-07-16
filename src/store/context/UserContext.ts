import { createContext, Dispatch } from "react";
import { UserState, UserAction } from "src/store/types/userTypes";

const initialUser = {
  name: "",
  isLoggedIn: false,
};

const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserAction>;
}>({
  state: initialUser,
  dispatch: () => null,
});

export { UserContext, initialUser };
