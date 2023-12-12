import { setInvoice } from "./slice"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"
import { Call } from "../../hooks/apiRequest";

export const startGetInvoices = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const invoice = await Call(
            `invoice`,
            'GET',
        )
        dispatch(setInvoice(invoice.data.data));
        dispatch(UiAppLoad())
    }
}

export const startUpdateInvoice = ({ invoice_id, status }) => {
    return async (dispatch) => {
        await Call(
            `invoice/${invoice_id}`,
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