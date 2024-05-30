import React from 'react';
import "./productoList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productosRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Alquileres() {
  const [data, setData] = useState(productosRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product', headerName: 'Producto', width: 200, renderCell: (params) => {
        return (
          <div className='productoListItem'>
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'category', headerName: 'Categoria', width: 150 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 180,
    },
    {
      field: 'transaction',
      headerName: 'Precio',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Acciones',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productos/" + params.row.id}>
              <button className="productoListEdit">Editar</button>
            </Link>

            <DeleteOutline className='productoListDelete' onClick={() => handleDelete(params.row.id)} />
          </>

        );
      },
    },
  ];
  return (
    <div className='productoList'>
      <div className='productoContenedor'>
        <h1 className='productoTitulo'>Lista de Productos</h1>
        <Link to="/nuevoProducto">
          <button className='productoAddBoton'>Nuevo</button>
        </Link>
      </div>
      <div style={{ height: '80%', width: '100%' }}> {/* Ajusta la altura según tus necesidades */}
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
      </div>
    </div>
  )
}
