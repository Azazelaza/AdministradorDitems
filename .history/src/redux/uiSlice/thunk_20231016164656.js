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
        const data = await CallWithFormDataFile(
            `uploadImage`,
            'POST',
            file
        )

        return data.data
    }
}