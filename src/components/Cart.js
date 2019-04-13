import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, decQuan, incQuan } from './actions/cartActions'
class Cart extends Component{

    render(){
              
        let cartItems = this.props.items.length ?
            (  
                this.props.items.map(item => {
                    return(
                        <li className="cart__item__container" key={item.id}>
                                <div className="cart__item">
                                    <h3>{item.title}</h3>
                                    <img src={item.img} />
                                    <p>{item.desc}</p>
                                    <p><b>Price: </b>{item.price*item.quantity}$</p> 
                                    <p>
                                        <b>Quantity: </b>{item.quantity} 
                                    </p>
                                    <div className="cart__btn__container">
                                        <div className="quantity__btn"><i className="fa fa-arrow-circle-up" aria-hidden="true" onClick={()=>{this.handleIncQuan(item.id)}}></i></div>
                                        <div className="quantity__btn"><i className="fa fa-arrow-circle-down" aria-hidden="true" onClick={()=>{this.handleDecQuan(item.id)}}></i></div>
                                    
                                    </div>
                                    <div className="remove__btn"><i className="fa fa-trash-o" aria-hidden="true" onClick={()=>{this.handleRemoveItem(item.id)}}></i></div>
                                </div>   
                        </li>                        
                    )
                })
            )
            :
            (
                <p>Empty..</p>
            )
       return(
            <div className="container">
                <div>
                    <h4>Cart:</h4>
                    <ul className="cart__list">
                        {cartItems}
                    </ul>
                </div>  
            </div>
       )
    }
    handleRemoveItem = (id) => {
        this.props.removeItem(id);
    }
    handleIncQuan = (id) => {
        this.props.incQuan(id);
    }
    handleDecQuan = (id) => {
        this.props.decQuan(id);
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        decQuan: (id)=>{dispatch(decQuan(id))},
        incQuan: (id)=>{dispatch(incQuan(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)