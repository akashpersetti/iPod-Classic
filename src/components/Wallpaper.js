import React from 'react';
import PropTypes from 'prop-types';

// Renders wallpaper menu
class Wallpaper extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Wallpaper Select</h2>
                <ul>
                    {["AudioTapes","BlueCubes","BlueJelly"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}

Wallpaper.propTypes = {
    active: PropTypes.number.isRequired
};

export default Wallpaper;
