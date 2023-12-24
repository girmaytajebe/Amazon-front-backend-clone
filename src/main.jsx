

import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./Componenet/StateProvider/StateProvider";
import reducer, { initialState } from "./Componenet/Reducer/Reducer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>
);