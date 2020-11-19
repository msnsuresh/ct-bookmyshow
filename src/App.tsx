import React from "react";
import { Provider } from "react-redux";
import Theatre from "./containers/Theatre/Theatre";
import logo from "./logo.svg";
import configureStore from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <GlobalStyle />
        <div className="container py-5">
          <Theatre />
        </div>
      </Provider>
    </>
  );
}

export default App;
