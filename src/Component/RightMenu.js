import React from 'react'
import CartIttem from './CartIttem'
import DebitCard from './DebitCard'
import SubMenuContainer from './SubMenuContainer'

function RightMenu({cart}) {
  return (
    <div className='rightMenu'>
    <div className='debitCardContainer'>
      <div className='debitCard'>
        <DebitCard />
      </div>
    </div>

    { !cart ? (<div></div>) :(

     
    <div className='cartCheckOutContainer'>
        <SubMenuContainer name={"Carts Items"}  />
      <div className='cartContainer'>
        <div className='cartItems'>
        {cart && cart.map(data =>(
        
          <CartIttem
          key={data.id}
          itemId={data.id}
          name={data.name}
          imgSrc={data.imgSrc}
          price={data.price}
          />  
        ))}
        </div>
      </div>

      <div className="totalSection">
        <h3>Total</h3>
        <p>
          <span>$ </span>{25}
        </p>
      </div>

      <button className="checkOut">Check Out</button>


    </div>)
    }
  </div>
  )
}

export default RightMenu