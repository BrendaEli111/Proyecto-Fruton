import React from 'react';
import "./inicio.css";
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import { userData } from '../../../dummyData';



export default function Inicio() {
  return (
    <div className='inicio'>
      <FeaturedInfo />
      <Chart data={userData} title="Analisis de reporte de ventas" grid datakey="Numero de visitas" />
      <div className="homeWidgets">
      </div>
    </div>
  )
}