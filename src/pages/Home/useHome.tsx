import useUserContext from "src/store/hooks/useUserContext";

//view model
const useHome = () => {
  const { user, login } = useUserContext();

  return { user, login };
};

export default useHome;
