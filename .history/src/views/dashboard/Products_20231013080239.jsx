import React, { useEffect } from "react";
import { Crud } from "../../components/ui/Crud";
import { useDispatch, useSelector } from "react-redux";
import {
  startDeleteProduct,
  startGetProduct,
} from "../../redux/productsSlice/thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductsModal } from "../../components/modal/ProductsModal";
import {
  startShowModal,
  startShowModalUpdate,
} from "../../redux/uiSlice/thunk";
import { Button } from "react-bootstrap";

export default function Products() {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { page_id } = useSelector((state) => state.pageContent);

  useEffect(() => {
    dispatch(startGetProduct());
  }, [page_id]);

  const openModal = () => {
    dispatch(startShowModal("product"));
  };
  const openModalEdit = (item) => {
    dispatch(startShowModalUpdate("product", item));
  };

  const deleteProduct = (id) => {
    dispatch(startDeleteProduct({ id }));
  };
  console.log(data);
  return (
    <div>
      <Button
        className="mx-5 my-4 float-end"
        type="primary"
        onClick={() => openModal()}
      >
        Nuevo Producto
      </Button>
      <Crud
        camps={["Nombre", "Subtitulo", "Descripción", "Precio", "Estatus"]}
        area={"producto"}
        data={data}
      >
        <>
          {data.lenght
            ? data.map((item, key) => {
                console.log("oka");
                return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.subtitle}</td>
                    <td>{item.description}</td>
                    <td>${item.price}</td>
                    <td>{item.isActive}</td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => openModalEdit(item)}
                        icon={faEdit}
                        className="mx-2 cursor-pointer"
                      />
                      <FontAwesomeIcon
                        onClick={() => deleteProduct(item.id)}
                        icon={faTrash}
                        className="mx-2 cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })
            : null}
        </>
      </Crud>
      <ProductsModal />
    </div>
  );
}
