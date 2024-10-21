import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      direction="rtl"
      theme={{ token: { fontFamily: "iranYekan", colorPrimary: "#FF4600" } }}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  </StrictMode>
);
