import Swal from "sweetalert2"
import { setPageContent, setPageId } from "./pageContentSlice";
import { Call } from "../../hooks/apiRequest";
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice";

export const startSetPageContent = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const company = localStorage.getItem('company_id');

        await Call(
            `page/${company}`,
            'GET'
        ).then((data) => {
            if (data.success) {
                if (!!data.data) {
                    dispatch(setPageContent(data?.data?.data));

                }
            }
        })
        dispatch(UiAppLoad())
    }
}
export const startPostDataPageContent = (dataForm) => {
    return async (dispatch) => {
        const company = localStorage.getItem('company_id');

        const dataPost = {
            company_id: company,
            data: dataForm,
        };

        const products = await Call(
            `userAdmin/page/${company}`,
            'PUT',
            dataPost
        )

        if (products.success) {
            Swal.fire(
                'Completado',
                'Se guardo la información',
                'success'
            )
            dispatch(UiAppLoad())
            return;
        }
    }
}
export const startSetPage = (data) => {
    return async (dispatch) => {
        localStorage.setItem('company_id', data);
        dispatch(setPageId(data));

        Swal.fire(
            'Completado',
            'Se cambio de pagina correctamente',
            'success'
        )
    }
}