import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StyleProvider from "./context/StyleProvider";


ReactDOM.render(
<StyleProvider>
 <App/>
</StyleProvider>

,document.getElementById("root"))