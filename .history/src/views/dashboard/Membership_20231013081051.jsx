import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteMembership,
  startGetMembership,
} from "../../redux/membershipSlice/thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MembershipModal } from "../../components/modal/MembershipModal";
import {
  startShowModal,
  startShowModalUpdate,
} from "../../redux/uiSlice/thunk";
import { Button } from "react-bootstrap";

export default function MemberShip() {
  const { page_id } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.membership);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetMembership());
  }, [page_id]);

  const openModal = () => {
    dispatch(startShowModal("planes"));
  };

  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("planes", item));
  };

  const deleteItem = (id) => {
    dispatch(startDeleteMembership({ id }));
  };
  console.log(data);

  return (
    <div>
      <Button
        className="mx-5 my-4 float-end"
        type="primary"
        onClick={() => openModal()}
      >
        Nuevo Plan
      </Button>
      <Crud
        camps={["Nombre", "Descripción", "Beneficios", "Precio", "Estatus"]}
        area={"plane"}
        data={data}
      >
        <>
          {data.length
            ? data.map((item, key) => (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.benefits}</td>
                  <td>{item.price == 0 ? "Gratuito" : "$" + item.price}</td>
                  <td>{item.isActive ?? "Activo"}</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => openModalEdit(item)}
                      icon={faEdit}
                      className="mx-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      onClick={() => deleteItem(item.id)}
                      icon={faTrash}
                      className="mx-2 cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            : null}
        </>
      </Crud>
      <MembershipModal />
    </div>
  );
}
