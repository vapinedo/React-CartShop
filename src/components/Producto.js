import { Component } from "react";
import { Button } from './Button';

const styles = {
    producto: {
        width: '30%',
        borderRadius: '5px',
        padding: '10px 15px',
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0, 0.1)'
    },
    img: {
        width: '100%'
    }
};

export class Producto extends Component {

    render() {
        const { producto, addToCart } = this.props;
        return (
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name} />
                <h3>{ producto.name }</h3>
                <p>{ producto.price }</p>
                <Button onClick={() => addToCart(producto)}>Agregar al Carrito</Button>
            </div>
        );
    }
}