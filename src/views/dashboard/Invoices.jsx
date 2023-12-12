import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import { startShowModalUpdate } from "../../redux/uiSlice/thunk";
import { startGetInvoices } from "../../redux/InvoiceSlice/thunk";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faEdit } from "@fortawesome/free-solid-svg-icons";
import { StatusInvoice } from "../../components/modal/StatusInvoice";
import { InvoiceModal } from "../../components/modal/InvoiceModal";

export default function Invoices() {
  const { data } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetInvoices());
  }, []);

  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("invoice_status", item));
  };
  const openModalView = (item) => {
    dispatch(startShowModalUpdate("invoice", item));
  };

  return (
    <div>
      <Crud
        camps={[
          "# Factura",
          "Solicitante",
          "N. Orden",
          "Fecha Solicitud",
          "RFC",
          "Constancia",
          "Tipo cfdi",
          "Estatus",
        ]}
        area={"Factura"}
        data={data}
      >
        <>
          {data?.length
            ? data.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.business_name}</td>
                  <td>{item.order_id}</td>
                  <td>{dayjs(item.created_at).format("YYYY-MM-DD HH:mm")}</td>
                  <td>{item.rfc}</td>
                  <td>{item.tax_certificate}</td>
                  <td>{item.cfdis.name}</td>
                  <td>{item.status_name}</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => openModalEdit(item)}
                      icon={faEdit}
                      className="mx-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      onClick={() => openModalView(item)}
                      icon={faBarChart}
                      className="mx-2 cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            : null}
        </>
      </Crud>
      <StatusInvoice />
      <InvoiceModal />
    </div>
  );
}
