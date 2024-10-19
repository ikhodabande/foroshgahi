import React from "react";
import { Layout } from "./components/layout/Layout";
import { AllRoutes } from "./Routes";

export default function App() {
  return (
    <>
      <Layout>
        <AllRoutes />
      </Layout>
    </>
  );
}
