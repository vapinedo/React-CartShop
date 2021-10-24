import { Component } from "react";

const styles = {
    title: {
        marginBottom: '30px'
    }
};

export class Title extends Component {

    render() {
        return (
            <h1 style={styles.title}>Tienda</h1>
        );
    }
}