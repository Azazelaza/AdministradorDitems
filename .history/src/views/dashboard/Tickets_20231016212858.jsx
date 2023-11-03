import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { startGetTickets } from "../../redux/ticketsSlice/thunk";

export default function Tickets() {
  const { language } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetTickets());
  }, []);
  console.log(data);

  return (
    <div>
      <Crud
        camps={["Solicitante", "Problema", "Descripción", "Estatus"]}
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
                <td>{item.description}</td>
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
