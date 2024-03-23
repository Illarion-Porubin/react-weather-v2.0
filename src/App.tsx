import { Main } from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Popup } from "./components/Popup/Popup";

const App = () => {
  
  return (
    <>
      <Popup />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
