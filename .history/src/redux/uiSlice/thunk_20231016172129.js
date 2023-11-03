import Swal from "sweetalert2";
import { Call, CallWithFormDataFile } from "../../hooks/apiRequest";
import { HiddenModal, SetDataModal, ShowModal } from "./uiSlice"

export const startShowModal = (name) => {
    return async (dispatch) => {
        dispatch(ShowModal(name));
    }
}
export const startShowModalUpdate = (name, item) => {
    return async (dispatch) => {
        dispatch(ShowModal(name));
        dispatch(SetDataModal(item));
    }
}
export const startHiddenModal = () => {
    return async (dispatch) => {
        dispatch(HiddenModal());
    }
}
export const startUploadImage = (file) => {
    return async (dispatch) => {
        const dataForm = new FormData();
        dataForm.set('image', file);

        const data = await CallWithFormDataFile(
            `uploadImage`,
            'POST',
            dataForm
        )

        if (data.success) {
            return data.data
        }

        Swal.fire(
            'Ooops!',
            'Ocurrio un error intentalo mas tarde.',
            'error'
        )
        return
    }
}