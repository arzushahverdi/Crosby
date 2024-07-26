import React from "react";
// import { FlowersProvider } from "./context/flowersContext";
import { FlowersProvider } from "./context/flowersContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <FlowersProvider>
      <AppRoutes />
    </FlowersProvider>
  );
}

export default App;
