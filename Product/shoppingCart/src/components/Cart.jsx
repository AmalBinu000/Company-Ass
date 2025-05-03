import React, { useState } from 'react'
import {connect} from 'react-redux'
import { addItem,deleteItem,updateItem } from '../action/cartAction'



const Cart = ({cart,addItem,deleteItem,updateItem})=>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")

    const handleAdd = ()=>{
        if(name && price){
            addItem({name,price:parseFloat(price)})
            setName("")
            setPrice("")
        }
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity,
    0);


    return(
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>🛒 Shopping Cart</h2>
                <input
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={handleAdd}>Add to Cart</button>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cart.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong> - ${item.price} ×
                        <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                            updateItem({ id: item.id, quantity: parseInt(e.target.value) || 1 })
                          }
                          
                        style={{ width: '40px', marginLeft: '5px' }}
                        />
                        <button onClick={() => deleteItem(item.id)}>❌</button>
                    </li>
                    ))}
                </ul>

                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cartState.cart
})


const mapDispatchToProps ={
    addItem,
    deleteItem,
    updateItem
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);