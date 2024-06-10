import React from 'react';
import { LineStyle, Timeline, TrendingUp, PermIdentity, MailOutline, WorkOutline,Report, ChatBubble,Forum, FastfoodOutlined,Accessibility } from '@mui/icons-material';
import "./sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Usuario</h3>
                    <ul className='sidebarList'>
                        <Link to="/Inicio" className='link'>
                            <li className='sidebarlistItem active'>
                                <LineStyle className='sidebarIcon' />
                                Inicio
                            </li>
                        </Link>
                        <Link to="/users" className='link'>
                            <li className='sidebarlistItem'>
                                <PermIdentity className='sidebarIcon' />
                                Usuarios
                            </li>
                        </Link>
                        <Link to="/rolesList" className='link'>
                            <li className='sidebarlistItem'>
                                <Accessibility className='sidebarIcon' />
                                Roles
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to="/productos" className='link'>
                            <li className='sidebarlistItem'>
                                <FastfoodOutlined className='sidebarIcon' />
                                Productos
                            </li>
                        </Link>
                        <Link to="/catalogo" className='link'>
                            <li className='sidebarlistItem'>
                                <FastfoodOutlined className='sidebarIcon' />
                                Catálogo
                            </li>
                        </Link>
                        <li className='sidebarlistItem'>
                            <TrendingUp className='sidebarIcon' />
                            Inventario
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notificaciones</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarlistItem'>
                            <MailOutline className='sidebarIcon' />
                            eMail
                        </li>
                        <li className='sidebarlistItem'>
                            <Forum className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarlistItem'>
                            <ChatBubble className='sidebarIcon' />
                            Mensajes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Personal</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarlistItem'>
                            <WorkOutline className='sidebarIcon' />
                            Administrar
                        </li>
                        <li className='sidebarlistItem'>
                            <Timeline className='sidebarIcon' />
                            Analiticas
                        </li>
                        <li className='sidebarlistItem'>
                            <Report className='sidebarIcon' />
                            Reportes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}








