import { setusers } from "./usersSlice"
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite"
import { FirebaseAuth, FirebaseDB } from "../../firebase/config"
import { UiAppLoad, UiLoadingApp } from "../uiSlice/uiSlice"
import Swal from "sweetalert2"

export const startGetUsers = () => {
    return async (dispatch) => {
        dispatch(UiLoadingApp())
        const allUsers = FirebaseAuth.listUser
        const collectionData = collection(FirebaseDB, `users`)
        const docs = await getDocs(collectionData);
        const data = [];
        docs.forEach(doc => {
            console.log(doc.id, doc.data());
            //let dat = doc.data()[doc.id];
            //dat.id = doc.id;
            data.push(dat);
        })
        dispatch(setusers(data));
        dispatch(UiAppLoad())
    }
}

export const startDeleteUser = ({ id }) => {
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
                const docRef = doc(FirebaseDB, `users/${id}`);
                await deleteDoc(docRef);

                dispatch(startGetUsers());

                Swal.fire(
                    'Eliminado!',
                    'El plan fue eliminado.',
                    'success'
                )
            }
        })
    }
}