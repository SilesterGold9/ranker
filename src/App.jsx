import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import Ranks from "./pages/Ranks";
import AdmDashboard from "./pages/Admin/admPages/Dashboard";
import AdmSettings from "./pages/Admin/admPages/Settings";
import AdminUsers from "./pages/Admin/admPages/Users";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<Router>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					{/* Rotas publicas acessiveis a todos os usuarios */}
					<Route path="/" element={<Home />} />
					<Route path="/ranks" element={<Ranks />} />

					{/* Rotas da área de Administrativa */}
					<Route path="/admin/dashboard" element={<AdmDashboard />} />
					<Route path="/admin/users" element={<AdminUsers />} />
					<Route path="/admin/settings" element={<AdmSettings />} />

					{/* Rota Padrão para páginas... 404 */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
