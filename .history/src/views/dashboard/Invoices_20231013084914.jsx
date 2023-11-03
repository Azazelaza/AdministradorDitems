import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteMembership,
  startGetMembership,
} from "../../redux/membershipSlice/thunk";
import { startShowModalUpdate } from "../../redux/uiSlice/thunk";

export default function Invoices() {
  const { page_id } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.membership);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetMembership());
  }, [page_id]);

  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("facturas", item));
  };

  const deleteItem = (id) => {
    dispatch(startDeleteMembership({ id }));
  };

  return (
    <div>
      <Crud
        camps={["ID", "Nombre", "Factura", "N. Orden", "Fecha Solicitud", "Estatus"]}
        area={"Factura"}
        data={[]}
      >
        <></>
      </Crud>
    </div>
  );
}
