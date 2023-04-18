import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import ClientContext, { ClientProvider } from './context/clientContext'
import '../../../node_modules/fx-lib-react/src/Styles/App.scss'
import { SearchOrder } from './views/SearchOrder/SearchOrder'
import { hasValue } from 'fx-lib-react'
import { OrderDetails } from './views/OrderDetails/OrderDetails'

const AppState = ({ children } : { children: JSX.Element | JSX.Element[] }) => {
  return (
    <ClientProvider>
      {children}
    </ClientProvider>
  )
}

export const ClientApp = () => {


  return (
    <AppState>
      <Navigate />
    
    </AppState>
  )
}

const Navigate = () => {
  const { dataOrder } = useContext(ClientContext)
  return (
    <>
      <OrderDetails />
      {/* { !hasValue(dataOrder?.customer)
        ? <SearchOrder />
        : <OrderDetails />
      } */}
    </>
  )
}

document.querySelectorAll('.ClientApp').forEach((element: any) => {
  ReactDom.render(<ClientApp />, element)
})
