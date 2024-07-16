import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import Home from "src/pages/Home/Home";
import RootContextProvider from "src/store/provider";

function App() {
  return (
    <RootContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RootContextProvider>
  );
}

export default App;
