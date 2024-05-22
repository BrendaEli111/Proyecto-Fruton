import React from 'react';
import "./nuevoProducto.css";
import { Link } from 'react-router-dom';

export default function NuevoProducto() {
    return (
        <div className='newProducto'>
            <h1 className='newProductoTitle'>Nuevo Producto</h1>
            <form className='newProductoForm'>
                <div className='newProductoItem'>
                    <label>Imagen</label>
                    <input type="file" id='file' />
                </div>
                <div className='newProductoItem'>
                    <label>Nombre del Producto</label>
                    <input type="text" placeholder="Cremolada de fresa" />
                </div>
                <div className='newProductoItem'>
                    <label>Categoría</label>
                    <input type="text" placeholder='Bebida' />
                </div>
                <div className='newProductoItem'>
                    <label>Activo</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='newProductoItem'>
                    <label>Precio del Producto</label>
                    <input type="number" placeholder='s/ 8.00' />
                </div>
                <Link to="/productos">
                    <button className='newProductoButton'>Crear</button>
                </Link>

            </form>
        </div>
    )
}
