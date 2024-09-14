import React from 'react'
import './Products.css'
import product_1 from '../../assets/productos/'
import product_2 from '../../assets/productos/'
import product_3 from '../../assets/productos/'
import product_icon_1 from '../../assets/iconos'
import product_icon_2 from '../../assets/iconos'
import product_icon_3 from '../../assets/iconos'


const Products = () => {
    return (
        <div className="products">
            <div className="product">
                <img src={product_1} alt="" />

                <div className="caption">
                    <img src={product_icon_1} alt="" />
                    <p>Hilos</p>
                </div>
            </div>

            <div className="product">
                <img src={product_2} alt="" />

                <div className="caption">
                    <img src={product_icon_2} alt="" />
                    <p>Cierres</p>
                </div>
            </div>

            <div className="product">
                <img src={product_3} alt="" />

                <div className="caption">
                    <img src={product_icon_3} alt="" />
                    <p>Refacciones</p>
                </div>
            </div>
        </div>
    )
}

export default Products
