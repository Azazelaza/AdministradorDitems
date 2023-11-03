import React, { useEffect } from "react";
import styles from "../../styles/components/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { startSetPage } from "../../redux/pageSlice/thunk";

export const Header = () => {
  const { page_id } = useSelector((state) => state.pageContent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!!localStorage.getItem("company_id")) {
      localStorage.setItem("company_id", page_id);
    }
  }, []);

  const handleCompany = (e) => {
    dispatch(startSetPage(e.target.value));
  };

  return (
    <div className={styles.header}>
      <div className="mt-auto">
        <select
          onChange={handleCompany}
          defaultValue={page_id}
          className={styles.dataPage}
        >
          <option value="1">PetID</option>
          <option value="2">Tagtical</option>
        </select>
      </div>
      <div className={styles.dataAdmin}>
        <h3>Administrador</h3>
        <small>admin@ditems.com</small>
      </div>
      <div className={styles.iconImage}>
        <FontAwesomeIcon icon={faUserAlt} />
      </div>
    </div>
  );
};
