import React from 'react'

const productslist = [
  {
    name: 'Producto 1',
    ref: '123',
    quantity: '1'
  },
  {
    name: 'Producto 2',
    ref: '345',
    quantity: '3'
  },
  {
    name: 'Producto 3',
    ref: '567',
    quantity: '2'
  },
  {
    name: 'Producto 4',
    ref: '098',
    quantity: '10'
  },
  {
    name: 'Producto 5',
    ref: '111',
    quantity: '6'
  }
]


export const OrderDetailsTable = () => {

  return (
    <div className='OrderDetailsTable m-b-20 m-t-20'>
      <div className="OrderDetailsTableHead">
        <div>Nombre producto</div>
        <div>Ref</div>
        <div>Cantidad</div>
      </div>
      <div className="OrderDetailsTableList">
        {
          productslist.map((x: any, i: number) => 
            <div key={i} className="OrderDetailsTableListItem">
              <div>{x.name}</div>
              <div>{x.ref}</div>
              <div>{x.quantity}</div>
            </div>
          )
        }
      </div>
    </div>
  )
}
