import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/api/Auth/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Terms-of-reference-Cars-website">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
