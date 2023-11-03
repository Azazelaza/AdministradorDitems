import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faEye } from "@fortawesome/free-solid-svg-icons";
import { startGetTickets } from "../../redux/ticketsSlice/thunk";
import { startShowModalUpdate } from "../../redux/uiSlice/thunk";
import { TicketModal } from "../../components/modal/TicketModal";
import { ChangeTicketModal } from "../../components/modal/ChangeTicket";

export default function Tickets() {
  const { data } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetTickets());
  }, []);
  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("tickets", item));
  };
  const openModalChangeStatus = (item) => {
    dispatch(startShowModalUpdate("ticket_status", item));
  };
  return (
    <div>
      <Crud
        camps={[
          "Solicitante",
          "Contacto",
          "Problema",
          "Descripción",
          "Estado",
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
                    onClick={() => openModalEdit(item)}
                    icon={faEye}
                    className="mx-2 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    onClick={() => openModalChangeStatus(item)}
                    icon={faBarsProgress}
                    className="mx-2 cursor-pointer"
                  />
                  {/* <FontAwesomeIcon icon={faTrash} className='mx-2' /> */}
                </td>
              </tr>
            ))}
        </>
      </Crud>
      <TicketModal />
      <ChangeTicketModal />
    </div>
  );
}
