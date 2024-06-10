import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Paginas/Inicio/Inicio';
import ProductoList from './components/Paginas/ProductoList/ProductoList';
import NuevoProducto from './components/Paginas/NuevoProducto/NuevoProducto';
import UserList from './components/Paginas/userList/UserList';
import RolesList from './components/Paginas/rolesList/RolesList';
import Catalogo from './components/Paginas/catalogo/Catalogo';
import Login from './components/Paginas/Login/Login';
import Layout from './layouts/layouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route path="/productos" element={<ProductoList />} />
              <Route path="/nuevoProducto" element={<NuevoProducto />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/rolesList" element={<RolesList />} />
              <Route path="/catalogo" element={<Catalogo />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
