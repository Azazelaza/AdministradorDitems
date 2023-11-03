import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { startGetTickets } from "../../redux/ticketsSlice/thunk";

export default function Tickets() {
  const { data } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetTickets());
  }, []);

  return (
    <div>
      <Crud
        camps={[
          "Solicitante",
          "Telefono",
          "Problema",
          "Descripción",
          "Estatus",
        ]}
        area={"incidencia"}
        data={data}
      >
        <>
          {data.length &&
            data.map((item, key) => (
              <tr key={key}>
                <td>{item.request_user_id}</td>
                <td>{item.user_email}</td>
                <td>{item.incident}</td>
                <td
                  style={{
                    width: "100px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </td>
                <td>{item.status_name}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faBarsProgress}
                    className="mx-2 cursor-pointer"
                  />
                  {/* <FontAwesomeIcon icon={faTrash} className='mx-2' /> */}
                </td>
              </tr>
            ))}
        </>
      </Crud>
    </div>
  );
}
