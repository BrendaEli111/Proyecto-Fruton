import React from 'react';
import "./widgetsSm.css"
import { Visibility } from '@mui/icons-material';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Nuevos Clientes</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Ingeniero de Sistemas</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Ingeniero de Sistemas</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Ingeniero de Sistemas</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Ingeniero de Sistemas</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Ingeniero de Sistemas</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className="widgetSmIcon" />
                        Mostrar
                    </button>
                </li>
            </ul>
        </div>
    )
}