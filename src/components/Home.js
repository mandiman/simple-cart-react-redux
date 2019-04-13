import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/cartActions'

class Home extends React.Component {
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div className="item" key={item.id}>
                            <img src={item.img} />
                            <h3 className="item__title">{item.title}</h3>
                            <button className="add__btn" onClick={()=>{this.handleClick(item.id)}}>Add to cart</button>
                        <div className="item__content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h4>Coffee shop</h4>
                <div className="items__container">
                    {itemList}
                </div>
            </div>
        )
    }
    handleClick = (id) => {
        this.props.addItem(id);
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        addItem: (id)=>{dispatch(addItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);