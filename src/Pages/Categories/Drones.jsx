import React from 'react'
import ProductList from '../../Components/ProductList'

const Drones = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-6">Drones</h1>
      <ProductList category="Drones" />
    </div>
  )
}

export default Drones