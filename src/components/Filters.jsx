import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'
export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChagecategory = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio Minimo:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChagecategory}>
          <option value="all">Todas</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Woman</option>
          <option value="jewelery">Joyeria</option>
          <option value="electronics">Electronicos</option>
        </select>
      </div>
    </section>
  )
}
