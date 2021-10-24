import { Component } from "react";

const styles = {
    button: {
        color: '#FFF',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '15px 20px',
        backgroundColor: '#0A283E'
    }
};

export class Button extends Component {

    render() {
        return (
            <button style={styles.button} { ...this.props } />
        );
    }
}