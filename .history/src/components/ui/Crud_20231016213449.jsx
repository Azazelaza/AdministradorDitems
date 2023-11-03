import React from "react";
import { Table } from "react-bootstrap";
import styles from "../../styles/components/ui/Crud.module.scss";
import { useSelector } from "react-redux";
import Loading from "./Loading";
export const Crud = ({ camps, data, area, children }) => {
  const { loading } = useSelector((state) => state.ui);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.CrudMenu}>
      <Table
        striped
        bordered
        hover
        style={{
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr>
            {camps.map((item, key) => (
              <th key={key}>{item}</th>
            ))}
            <th className={styles.accion}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            <>{children}</>
          ) : (
            <tr>
              <td colSpan={5} className={styles.notCrud}>
                No existen {area}s en este listado
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
