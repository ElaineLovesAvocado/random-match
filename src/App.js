// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Match from "./pages/match";
import withSplashScreen from "./components/Navbar/withSplashScreen";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/random-match/" element={<Match />} />
				<Route
					path="/match"
					element={<Match />}
				/>

			</Routes>
		</Router>
	);
}

export default withSplashScreen(App);
