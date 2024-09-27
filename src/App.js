import React from "react";
import { FlowersProvider } from "./context/flowersContext";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <FlowersProvider>
        <AppRoutes />
      </FlowersProvider>
    </Provider>
  );
}

export default App;
