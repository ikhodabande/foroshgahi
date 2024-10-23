import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import fa_IR from "antd/locale/fa_IR";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      locale={fa_IR}
      direction="rtl"
      theme={{
        token: { fontFamily: "iranYekan", colorPrimary: "#FF4600" },
        components: {
          Pagination: {
            colorText: "#6e6e6e",
            colorPrimary: "#FF3B30",
            itemActiveColor: "#FF3B30",
            itemSize: 40,
            itemSizeSM: 42,
          },
        },
      }}
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
