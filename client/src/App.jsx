import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetupPage from "./pages/SetupPage";
import BoutPage from "./pages/BoutPage";
import RulesPage from "./pages/RulesPage";
import SyncPage from "./pages/SyncPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SetupPage />} />
				<Route path="/bout" element={<BoutPage />} />
				<Route path="/rules" element={<RulesPage />} />
				<Route path="/sync" element={<SyncPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
