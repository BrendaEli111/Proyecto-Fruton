import React from 'react';
import "./widgetsLg.css"

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Listado de clientes</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Nombre</th>
          <th className='widgetLgTh'>Correo</th>
          <th className='widgetLgTh'>Fecha compra</th>
          <th className='widgetLgTh'>estado</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNiEd63SvTXMXe-2Llo9Lcp1mWHtSUJhPg&usqp=CAU" alt="" className='widgetLgImg' />
            <span className='widgetLgImg'>Susana Carlo</span>
          </td>
          <td className='widgetLgDate'> susana@gmail.com</td>
          <td className='widgetLgAmount'>2 junio 2023</td>
          <td className='widgetLdstatus'><Button type="Activo" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src="https://www.shutterstock.com/image-photo/young-happy-overjoyed-indian-man-260nw-2346743413.jpg" alt="" className='widgetLgImg' />
            <span className='widgetLgImg'>Francisco Melendez</span>
          </td>
          <td className='widgetLgDate'> melendez@gmail.com</td>
          <td className='widgetLgAmount'>2 enero 2024</td>
          <td className='widgetLdstatus'><Button type="Activo" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src="https://www.shutterstock.com/image-photo/young-happy-overjoyed-indian-man-260nw-2346743413.jpg" alt="" className='widgetLgImg' />
            <span className='widgetLgImg'>Francisco Melendez</span>
          </td>
          <td className='widgetLgDate'> melendez@gmail.com</td>
          <td className='widgetLgAmount'>13 marzo 2024</td>
          <td className='widgetLdstatus'><Button type="Activo" /></td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src="https://www.shutterstock.com/image-photo/young-happy-overjoyed-indian-man-260nw-2346743413.jpg" alt="" className='widgetLgImg' />
            <span className='widgetLgImg'>Francisco Melendez</span>
          </td>
          <td className='widgetLgDate'> melendez@gmail.com</td>
          <td className='widgetLgAmount'>20 abril 2024</td>
          <td className='widgetLdstatus'><Button type="Inactivo" /></td>
        </tr>
      </table>
    </div>
  )
}
