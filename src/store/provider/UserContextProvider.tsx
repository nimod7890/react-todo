import { PropsWithChildren, useReducer } from "react";
import { initialUser, UserContext } from "../context/userContext";
import userReducer from "src/store/reducer/userReducer";
import { LoginUserProps, USER_ACTION } from "src/store/types/userTypes";

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialUser);

  const login = (payload: LoginUserProps) => {
    dispatch({ type: USER_ACTION.LOGIN_USER, payload });
  };

  const logout = () => {
    dispatch({ type: USER_ACTION.LOGOUT_USER });
  };

  return (
    <UserContext.Provider value={{ user: state, login, logout }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
