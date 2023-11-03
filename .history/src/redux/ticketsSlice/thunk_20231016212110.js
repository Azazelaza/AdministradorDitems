import { setTickets } from "./ticketsSlice"
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"

export const startGetTickets = ({ language }) => {
    return async (dispatch) => {
        data.company_id = localStorage.getItem('company_id');

        await Call(
            `userAdmin/products/${data.id}`,
            'PUT',
            data
        )

        Swal.fire(
            'Completado',
            'Se actualizo el plan correctamente',
            'success'
        )

        dispatch(startGetProduct());
    }
}

export const startUpdateTickets = ({ language, data }) => {
    return async (dispatch) => {
        const docRef = doc(FirebaseDB, `Incidencias/${data.id}`);
        await setDoc(docRef, data, { merge: true })

        Swal.fire(
            'Completado',
            'Se actualizo la incidencia correctamente',
            'success'
        )

        dispatch(startTickets());
    }
}

/* export const startDeleteMembership = ({ language, id }) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Seguro que quieres eliminarlo?',
            text: "Esta acción no se podra revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const docRef = doc(FirebaseDB, `Pagina/${language}/MemberShip/${id}`);
                await deleteDoc(docRef);

                dispatch(startGetMembership(
                    { language: 'ES' }
                ));

                Swal.fire(
                    'Eliminado!',
                    'El plan fue eliminado.',
                    'success'
                )
            }
        })

    }
} */