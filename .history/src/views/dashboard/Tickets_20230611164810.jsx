import React, { useEffect } from 'react'
import { Crud } from '../../components/ui/Crud'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { startTickets } from '../../redux/ticketsSlice/thunk';

export default function Tickets() {
  const { language } = useSelector(state => state.pageContent);
  const { data } = useSelector(state => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startTickets({ language }));
  }, [])


  return (
    <div>
      <Crud
        camps={['Solicitante', 'Problema', 'Descripción', 'Estatus']}
        area={'incidencia'}
        data={data}
      >
        <>
          {data.map((item, key) =>
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.problem}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>
                <FontAwesomeIcon icon={faBarsProgress} className='mx-2 cursor-pointer'/>
                {/* <FontAwesomeIcon icon={faTrash} className='mx-2' /> */}
              </td>
            </tr>
          )}
        </>
      </Crud>
    </div>
  )
}
