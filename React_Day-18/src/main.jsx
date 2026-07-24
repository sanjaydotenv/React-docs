import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { ProductContextProvider } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductContextProvider>
      <AppRoutes />
      <ToastContainer />
    </ProductContextProvider>
  </AuthContextProvider>,
);
