import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./utils/query-client.ts";
import { GlobalContextProvider } from "./context/global/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { DrawerContextProvider } from "./context/drawer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DrawerContextProvider>
          <GlobalContextProvider>
            <App />
          </GlobalContextProvider>
        </DrawerContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
