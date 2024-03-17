import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import AdmDashboard from "./pages/Admin/admPages/Dashboard";
import AdmSettings from "./pages/Admin/admPages/Settings";
import AdminUsers from "./pages/Admin/admPages/Users";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Ranks = lazy(() => import("./pages/Ranks"));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					{/* Rotas publicas acessiveis a todos os usuarios */}
					<Route path='/' element={<Home />} />
					<Route path='/ranks' element={<Ranks />} />

					{/* Rotas da área de Administrativa */}
					<Route path='/admin/dashboard' element={<AdmDashboard />} />
					<Route path='/admin/users' element={<AdminUsers />} />
					<Route path='/admin/settings' element={<AdmSettings />} />

					{/* Rota Padrão para páginas... 404 */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
