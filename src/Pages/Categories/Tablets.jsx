import React from 'react'
import ProductList from '../../Components/ProductList'

const Tablets = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-6">Tablets</h1>
            <ProductList category="ipads" />
        </div>
    )
}

export default Tablets