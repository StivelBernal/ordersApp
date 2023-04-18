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
        
        <div className="AppTitle m-b-20">Detalles del pedido</div>

        <div className='OrderDetailsComponentContent'>
          <div className='OrderDetailsComponentSubtitle m-b-10'><strong>Código: </strong> {dataOrder.order?.code} </div>
          <div className='OrderDetailsComponentSubtitle m-b-10'>
            <strong>Cliente: </strong>
            {dataOrder.customer?.first_name} {dataOrder.customer?.last_name} 
          </div>
          <div className='OrderDetailsComponentSubtitle m-b-10'>
            <strong>Dirección de entrega: </strong> {dataOrder.order?.delivery_address}
          </div>

          <div className='OrderDetailsComponentProductsList'>
            <OrderDetailsTable />
          </div>

          <div className='OrderDetailsComponentSubtitle m-b-10'><strong>Estado del pedido: </strong> {dataOrder.order?.status} </div>
          <div className='OrderDetailsComponentSubtitle'><strong>Fecha estimada de entrega: </strong> {dataOrder.order?.delivery_date} </div>

        </div>

        <div className="actions">
          <button className='bttn close' onClick={() => closeDetails()}>Cerrar</button>
          <button className='bttn' onClick={() => goToForm()}>Nueva consulta</button>
        </div>
    </div>
  )
}
