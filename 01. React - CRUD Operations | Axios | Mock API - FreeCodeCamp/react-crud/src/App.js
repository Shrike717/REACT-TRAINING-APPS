import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="main">
				<h2 className="main__header">React Crud Operations</h2>
				<div>
					<Routes>
						<Route exact path="/create" element={<Create />} />
					</Routes>
				</div>
				<div style={{ marginTop: 20 }}>
					<Routes>
						<Route exact path="/" element={<Read />} />
						<Route exact path="/read" element={<Read />} />
					</Routes>
				</div>
				<Routes>
					<Route path="/update" element={<Update />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
