import React, { useContext } from 'react'
import './OrderDetails.scss'
import { OrderDetailsTable } from './OrderDetailsTable'
import ClientContext from '../../context/clientContext'

export const OrderDetails = () => {

  const { setDataOrder, dataOrder } = useContext(ClientContext)

  const closeDetails = () => {
    window.location.href = '/home'
  }

  const goToForm = () => {
    setDataOrder(null)
  }

  return (
    <div className='OrderDetailsComponent'>
        <div className="AppTitle">Detalles del pedido</div>

        <div className='OrderDetailsComponentContent'>
          <div className='OrderDetailsComponentSubtitle'><strong>Código: </strong> 2312312 </div>
          <div className='OrderDetailsComponentSubtitle'><strong>Cliente: </strong> Brayan </div>
          <div className='OrderDetailsComponentSubtitle'>
            <strong>Dirección de entrega: </strong> 2312312
          </div>

          <div className='OrderDetailsComponentProductsList'>
            <OrderDetailsTable />
          </div>

          <div className='OrderDetailsComponentSubtitle'><strong>Estado del pedido: </strong> Pendiente </div>
          <div className='OrderDetailsComponentSubtitle'><strong>Fecha estimada de entrega: </strong> 28/23/1231 </div>

        </div>

        <div className="actions">
          <button className='bttn close' onClick={() => closeDetails()}>Cerrar</button>
          <button className='bttn' onClick={() => goToForm()}>Nueva consulta</button>
        </div>
    </div>
  )
}
