import { Component } from "react";

const styles = {
    layout: {
        display: 'flex',
        color: '#0A283E',
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column'
    },
    container: {
        width: '1200px'
    }
};

export class Layout extends Component {

    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}