import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout.jsx';
import RouteEffects from './components/RouteEffects.jsx';
import Home from './pages/Home.jsx';
import Comprar from './pages/Comprar.jsx';
import Vender from './pages/Vender.jsx';
import ClienteVista from './pages/ClienteVista.jsx';
import VendedorPanel from './pages/VendedorPanel.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';
import Creditos from './pages/Creditos.jsx';

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="comprar" element={<Comprar />} />
          <Route path="comprar/cliente" element={<ClienteVista />} />
          <Route path="vender" element={<Vender />} />
          <Route path="vender/panel" element={<VendedorPanel />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  );
}
