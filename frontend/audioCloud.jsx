import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  
  const root = document.getElementById("root");
  let preloadedState;
  if (window.currentUser){
    preloadedState = {
        session: {
            currentUser: window.currentUser
        }
    }
  }

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});


