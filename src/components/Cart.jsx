import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
export function Cart() {
  const cartCheckBoxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              alt="Nose xd"
            />
            <div>
              <strong>Nose</strong>-$1000
            </div>
            <footer>
              <small>Qty:1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
} 
