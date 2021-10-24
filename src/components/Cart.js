import { Component } from "react";
import { BubbleAlert } from './BubbleAlert';
import { CartDetail } from './CartDetail';

const styles = {
    cart: {
        color: '#FFF',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '12px 28px',
        backgroundColor: '#359A2D'
    },
    bubble: {
        top: 20,
        left: 12,
        position: 'relative'                
    }
};

export class Cart extends Component {

    render() {
        const { cart, isCartVisible, showCart } = this.props;
        const itemsCount = cart.reduce((acc, item) => acc + item.count, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {
                        (itemsCount > 0) && <BubbleAlert value={itemsCount} />
                    }
                </span>
                <button onClick={showCart} style={styles.cart}>
                    Cart
                </button>
                {
                   (isCartVisible) && <CartDetail cart={cart} />
                }
            </div>
        );
    }
}