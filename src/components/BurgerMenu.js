import React, { Component } from 'react';
import Menu from '../components/Menu'


class BurgerMenu extends Component {

    state = {
        active: false,

    }

    handleClick = () => {
        this.setState({
            active: !this.state.active,
        })
    }


    render() {
        return (
            <>
                <div className="toggle_menu" onClick={this.handleClick}>
                    <span> x</span>
                </div>
                <div className="mobile_nav">
                    {this.state.active && <Menu />}
                </div>
            </>
        );
    }
}
export default BurgerMenu;