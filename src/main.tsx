import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { PopupProvider } from "./provider/PopupProvider.tsx";
import { store } from "./redux/store.ts";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
  <Provider store={store}>
    <ThemeProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ThemeProvider>
  </Provider>
</HashRouter>
);
