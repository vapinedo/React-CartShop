import { Component } from "react";

const styles = {
    bubbleAlert: {
        color: '#FFF',
        widht: '20px',
        fontSize: '.9rem',
        padding: '2px 10px',
        borderRadius: '15px',
        backgroundColor: '#E9725A'
    }
};

export class BubbleAlert extends Component {

    getItemsInCart(itemsCount) {
        if (! itemsCount) return '';

        const itemCountToShow = 9;
        return (itemsCount > itemCountToShow) ? '9+' : itemsCount; 
    }

    render() {
        const { value } = this.props;
        return (
            <span style={styles.bubbleAlert}>
                {this.getItemsInCart(value)}
            </span>
        );
    }
}