import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "slate-simple-editor/dist/index.css";
import "@/styles/main.scss";

const App = ({ Component, pageProps }) => {
	console.log("AUTH0_DOMAIN: " + process.env.AUTH0_DOMAIN);
	console.log("AUTH0_REDIRECT_URI: " + process.env.AUTH0_REDIRECT_URI);
	console.log("AUTH0_NAMESPACE: " + process.env.AUTH0_NAMESPACE);
	return <Component {...pageProps} />;
};

export default App;
