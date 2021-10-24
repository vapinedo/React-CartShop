import { Component } from "react";
import { Producto } from './Producto';

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};

export class Productos extends Component {

    render() {
        const { productos, addToCart } = this.props;

        return (
            <div style={styles.productos}>
                { 
                    productos.map(producto => 
                        <Producto 
                            key={ producto.name }
                            producto={ producto }
                            addToCart={ addToCart } />
                    ) 
                }
            </div>
        );
    }
}