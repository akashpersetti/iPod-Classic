import React from 'react';
import PropTypes from 'prop-types';
import "../css/Themes.css"

// Render wheel color change menu
class WheelColor extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Wheel Color Select</h2>
                <ul>
                    {["Black","White","Brown","Purple"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}

WheelColor.propTypes = {
    active: PropTypes.number.isRequired
};

export default WheelColor;
