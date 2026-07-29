import React from 'react';
import PropTypes from 'prop-types';
import "../css/Themes.css"

// Renders themes menu
class Themes extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Theme Select</h2>
                <ul>
                    {["Rose Gold","Space Gray","Gold","Light Purple","Black"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}

Themes.propTypes = {
    active: PropTypes.number.isRequired
};

export default Themes;
