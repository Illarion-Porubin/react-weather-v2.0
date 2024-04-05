import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import { Main } from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
