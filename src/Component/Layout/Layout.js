import React from 'react'
import ButtomMenu from './ButtomMenu'
import Header from './Header'
import RightMenu from '../RightMenu/RightMenu';
import { useStateValue } from '../../context/StateProvider';

function Layout() {
  const[{cart}, dispatch] = useStateValue();

  return (
    <div>
        <Header />
        <ButtomMenu />
      <RightMenu cart={cart} />

    </div>
  )
}

export default Layout