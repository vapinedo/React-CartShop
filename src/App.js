import { Component } from 'react';
import { Title } from './components/Title';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Productos } from './components/Productos';

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: './productos/tomate.jpeg' },
      { name: 'Arbejas', price: 2500, img: './productos/arbejas.jpeg' },
      { name: 'Lechuga', price: 500, img: './productos/lechuga.jpeg' },
    ],
    cart: [],
    isCartVisible: false
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if(cart.find(item => item.name === product.name)) {
      const newCart = cart.map(item => item.name === product.name
        ? ({
          ...item,
          count: item.count + 1
        })
        : item)
      return this.setState({ cart: newCart })
    }

    return this.setState({ 
      cart: this.state.cart.concat({ ...product, count: 1 }) 
    });
  };

  showCart = () => {
    const cartIsEmpty = this.state.cart.length === 0;
    if(cartIsEmpty) return;
    this.setState({ isCartVisible: !this.state.isCartVisible }) 
  };

  render() {
    const { isCartVisible } = this.state;
    return (
      <div>
        <Navbar 
          cart={this.state.cart}
          showCart={this.showCart}  
          isCartVisible={isCartVisible} />

        <Layout>
          <Title />
          <Productos 
            productos={this.state.productos}
            addToCart={this.addToCart} />
        </Layout>
      </div>
    );
  }
}

export default App;
