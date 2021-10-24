import { Component } from "react";
import { Logo } from './Logo';
import { Cart } from './Cart';

const styles = {
    navbar: {
        display: 'flex',
        height: '100px',
        padding: '0 50px',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxShadow: '0 2px 3px rgb(0,0,0, 0.1)'
    }
};

export class Navbar extends Component {
    render() {

        const { cart, isCartVisible, showCart } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Cart 
                    cart={cart} 
                    showCart={showCart}
                    isCartVisible={isCartVisible} />
            </nav> 
        );
    }
}