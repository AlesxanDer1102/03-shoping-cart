import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}
      {/*
          <h4>Prueba Técnica de React</h4>
          <span>Diego Alesxander</span>
          <h5>Shopping Cart con useContext & useReducer</h5>
*/}
    </footer>
  )
}
