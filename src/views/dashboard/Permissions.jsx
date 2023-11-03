import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteMembership,
  startGetMembership,
} from "../../redux/membershipSlice/thunk";
import { MembershipModal } from "../../components/modal/MembershipModal";
import {
  startShowModal,
  startShowModalUpdate,
} from "../../redux/uiSlice/thunk";

export default function Permissions() {
  const { page_id } = useSelector((state) => state.pageContent);
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
        camps={["ID", "Usuario", "Permiso", "Fecha del permiso"]}
        area={"Permisos"}
        data={[]}
      >
        <></>
      </Crud>
      <MembershipModal />
    </div>
  );
}
