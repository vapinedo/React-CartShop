import { Component } from "react";

const styles = {
    logo: {
        fontSize: '2rem',
        fontWeight: '700'
    }
};

export class Logo extends Component {

    render() {
        return (
            <div style={styles.logo}>
                Shop
            </div>
        );
    }
}