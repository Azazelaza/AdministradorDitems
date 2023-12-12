import { setOrder } from "./slice"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"
import { Call } from "../../hooks/apiRequest";

export const startGetOrders = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const order = await Call(
            `order`,
            'GET',
        )
        dispatch(setOrder(order.data.data));
        dispatch(UiAppLoad())
    }
}

export const startUpdateOrder = ({ order_id, status }) => {
    return async (dispatch) => {
        await Call(
            `order/${order_id}`,
            'PUT',
            status
        )

        Swal.fire(
            'Completado',
            'Se actualizo el plan correctamente',
            'success'
        )

        dispatch(startGetOrders());
    }
}