/* eslint-disable react/prop-types */
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import useCart from '../hooks/useCart'

function CartItem({
  image,
  price,
  title,
  quantity,
  addToCart,
  sbustractToCart
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong>-${price}
      </div>
      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={sbustractToCart}>-</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart, removeFromCart, subustractToCart } =
    useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              sbustractToCart={() => subustractToCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
