import { Component } from "react";

const styles = {
    cartDetail: {
        right: 50,
        marginTop: 30,
        width: '300px',
        borderRadius: '5px',
        position: 'absolute',
        backgroundColor: '#FFF',
        boxShadow: '1px 5px 5px rgb(0,0,0, 0.3)'
    },
    ul: {
        margin: '0',
        padding: '0'
    },
    product: {
        display: 'flex',
        alignItems: 'center',
        padding: '25px 20px',
        listStyleType: 'none',
        borderBottom: 'solid 1px #eee',
        justifyContent: 'space-between'
    }
};

export class CartDetail extends Component {

    render() {
        const { cart } = this.props;
        console.log(cart);
        return (
            <div style={styles.cartDetail}>
                <ul style={styles.ul}>
                    {
                        cart.map(item => 
                            <li style={styles.product} key={item.name}>
                                <img src={item.img} alt={item.name } width="50" height="32" />
                                {item.name}
                                <span>{item.count}</span>
                            </li>    
                        )
                    }
                </ul>
            </div>
        );
    }
}