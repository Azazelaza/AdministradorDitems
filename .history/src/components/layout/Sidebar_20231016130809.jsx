import React from "react";
import styles from "../../styles/components/Sidebar.module.scss";
/* import logo from '../../assets/logo/logopetid_light.svg'
 */ import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartPlus,
  faCreditCard,
  faPager,
  faSignOut,
  faTicket,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { startLogOut } from "../../redux/authSlice/thunk";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogOut());
    navigate("/");
  };

  return (
    <div>
      <div className={styles.logoPet}>
        <Link to="/dashboard">
          <Image src="/logo-ligth.png" width={100} />
        </Link>
      </div>
      <div className={styles.areaSelect}>
        <h3>Pagina Web</h3>
        <div className={styles.areaSection}>
          <Link to="/dashboard/content" className={styles.areaLink}>
            <FontAwesomeIcon icon={faPager} />
            Contenido
          </Link>
          {/* <div className={styles.areaLink}>
            <FontAwesomeIcon icon={faBars} />
            <Link to='/dashboard/menu'>Menu</Link>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.areaSelect}>
        <h3>Administración</h3>
        <div className={styles.areaSection}>
          <Link to='/dashboard/users' className={styles.areaLink}>
            <FontAwesomeIcon icon={faUserAlt} />
            Usuarios
          </Link>
          <div className={styles.areaLink}>
            <FontAwesomeIcon icon={faClipboard} />
            <Link to='/dashboard/records'>Expedientes</Link>
          </div> 
        </div>
      </div> */}
      <div className={styles.areaSelect}>
        <h3>Comercial</h3>
        <div className={styles.areaSection}>
          <Link to="/dashboard/products" className={styles.areaLink}>
            <FontAwesomeIcon icon={faCartPlus} />
            Productos
          </Link>
          <Link to="/dashboard/membership" className={styles.areaLink}>
            <FontAwesomeIcon icon={faCreditCard} />
            Planes
          </Link>
          <Link to="/dashboard/orders" className={styles.areaLink}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            Ordenes
          </Link>
          <Link to="/dashboard/invoices" className={styles.areaLink}>
            <FontAwesomeIcon icon={faCartArrowDown} />
            Facturación
          </Link>
        </div>
      </div>
      <div className={styles.areaSelect}>
        <h3>Incidentes</h3>
        <div className={styles.areaSection}>
          <Link className={styles.areaLink} to="/dashboard/tickets">
            <FontAwesomeIcon icon={faTicket} />
            Lista de tickets
          </Link>
        </div>
      </div>
      <div className={styles.areaSelect}>{/* 
        <h3>Cuenta de administrador</h3> */}
        <div className={styles.areaSection + ' cursor-pointer'}>
          {/* <Link className={styles.areaLink} to='/dashboard/profile'>
            <FontAwesomeIcon icon={faUserEdit} />
            Perfil
          </Link> */}
          <div className={styles.areaLink} onClick={() => logout()}>
            <FontAwesomeIcon icon={faSignOut} />
            Salir de la cuenta
          </div>
        </div>
      </div>
    </div>
  );
};
