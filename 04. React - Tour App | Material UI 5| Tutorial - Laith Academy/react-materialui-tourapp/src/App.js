import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Appbar from "./components/Appbar";
import CustomStyleExamples from "./pages/CustomStyleExamples";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Router>
				<Appbar />
				<div className="App">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="/styles"
							element={<CustomStyleExamples />}
						/>
						<Route exact path="/:id" element={<Tour />} />
					</Routes>
				</div>
			</Router>
		</LocalizationProvider>
	);
}

export default App;
