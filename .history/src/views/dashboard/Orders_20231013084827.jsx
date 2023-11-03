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

export default function Orders() {
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

  return (
    <div>
      <Crud
        camps={["Orden #", "Productos", "Usuario", "Fecha", "Estatus"]}
        area={"Pedidos"}
        data={[]}
      >
        <></>
      </Crud>
      <MembershipModal />
    </div>
  );
}
