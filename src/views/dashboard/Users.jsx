import React, { useEffect } from 'react'
import { Crud } from '../../components/ui/Crud'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleteUser, startGetUsers } from '../../redux/usersSlice/thunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
/* import { UsersModal } from '../../components/modal/UsersModal';
import { startShowModal } from '../../redux/uiSlice/thunk';
import { Button } from 'react-bootstrap'; */

export default function Users() {
  const { data } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetUsers());
  }, [])

  /* const openModal = () => {
    dispatch(startShowModal('usuarios'))
  } */

  const deleteItem = (id) => {
    dispatch(startDeleteUser({ id }))
  }

  return (
    <div>
      <Crud
        camps={['Usuario', 'Télefono', 'Mascota', 'Dispositivo', 'Estatus']}
        area={'usuario'}
        data={data}
      >
        <>
          {data.map((item, key) =>
            <tr key={key}>
              <td>{item.userName}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.petName}</td>
              <td>{item.Expediente ? 'Sin expediente' : 'Con expediente'}</td>
              <td>{item.deviceName}</td>
              <td>
                {/* <FontAwesomeIcon icon={faEdit} className='mx-2'/> */}
                <FontAwesomeIcon onClick={() => ViewExpediente(item.id)} icon={faClipboard} className='mx-2' />
                <FontAwesomeIcon onClick={() => deleteItem(item.id)} icon={faTrash} className='mx-2' />
              </td>
            </tr>
          )}
        </>
      </Crud>
      {/* <UsersModal /> */}
    </div>
  )
}
