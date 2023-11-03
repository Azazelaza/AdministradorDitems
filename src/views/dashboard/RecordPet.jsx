import React from 'react'
import { Crud } from '../../components/ui/Crud'

export default function RecordPet() {
  const data = [];
  return (
    <div>
      <Crud
        camps={['Expediente', 'Usuario', 'Acción']}
        data={data}
        area={'producto'}
      />
    </div>
  )
}
