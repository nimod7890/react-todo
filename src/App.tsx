import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from 'src/constants/routes';
import RootContextProvider from 'src/store/provider';
import Home from 'src/views/Home/Home';
import Todo from './views/Todo/Todo';

function App() {
  return (
    <RootContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.TODO} element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </RootContextProvider>
  );
}

export default App;
