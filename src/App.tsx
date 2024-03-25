import { Main } from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";


const App = () => {
  
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
  );
};

export default App;
