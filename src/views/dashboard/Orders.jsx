import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MembershipModal } from "../../components/modal/MembershipModal";
import { startShowModalUpdate } from "../../redux/uiSlice/thunk";
import { startGetOrders } from "../../redux/orderSlice/thunk";
import dayjs from "dayjs";
import { StatusOrder } from "../../components/modal/StatusOrder";
import { OrderModal } from "../../components/modal/OrderModal";

export default function Orders() {
  const { page_id } = useSelector((state) => state.pageContent);
  const { data } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetOrders());
  }, [page_id]);

  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("status_order", item));
  };

  const openModalView = (item) => {
    dispatch(startShowModalUpdate("order", item));
  };

  return (
    <div>
      <Crud
        camps={[
          "Orden #",
          "Productos",
          "Usuario",
          "Fecha creación",
          "Total",
          "Estatus",
          "Pagado en",
        ]}
        area={"Pedido"}
        data={data}
      >
        <>
          {data?.length
            ? data.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.products.product.name}</td>
                  <td>{item.user.name}</td>
                  <td>{dayjs(item.created_at).format("YYYY-MM-DD HH:mm")}</td>
                  <td>${item.price}</td>
                  <td>{item.status}</td>
                  <td>{item.payment_type}</td>
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
      <StatusOrder />
      <OrderModal />
    </div>
  );
}
