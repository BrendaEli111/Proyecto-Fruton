import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Paginas/Inicio/Inicio';
import ProductoList from './components/Paginas/ProductoList/ProductoList';
import NuevoProducto from './components/Paginas/NuevoProducto/NuevoProducto';
import UserList from './components/Paginas/userList/UserList';
import RolesList from './components/Paginas/rolesList/RolesList';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/nuevoProducto" element={<NuevoProducto />} />
          <Route path="/users" element={<UserList />} />
          <Route path="rolesList" element={<RolesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
