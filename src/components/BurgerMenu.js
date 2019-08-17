import React, { Component } from 'react';


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
                {this.state.active && <p>sadff</p>}
            </>
        );
    }
}

export default BurgerMenu;