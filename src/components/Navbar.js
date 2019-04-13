import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import Home from './Home'
import Cart from './Cart'
import NotFound from './NotFound'

 class Navbar extends React.Component {
    render() {
        return(
                <nav className="nav__container">
                    <Router>
                        <div>
                            <ul className="nav__list">
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/cart">My cart <span id="total__sum">{this.props.total}$</span></Link></li>
                            </ul>
                        </div>
                        <Switch>
                            <Route path="/" exact strict component={Home} />
                            <Route path="/cart" exact strict component={Cart} />
                            <Route path="/*" exact strict component={NotFound} />
                        </Switch>
                    </Router>
                </nav>  
        )
    }
}
const mapStateToProps = (state) => {
    return{
        total: state.total
    }
}

export default connect(mapStateToProps)(Navbar);