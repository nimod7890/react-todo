import { FC, ReactNode } from 'react';
import UserContextProvider from 'src/store/provider/UserContextProvider';
import CombinedComponents from 'src/utils/combineComponents';
import TodoContextProvider from './TodoContextProvider';

const providers: FC<{ children: ReactNode }>[] = [UserContextProvider,TodoContextProvider];

const RootContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const CombinedProvider = CombinedComponents(providers);
  return <CombinedProvider>{children}</CombinedProvider>;
};

export default RootContextProvider;
