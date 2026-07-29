import React from 'react';
import PropTypes from 'prop-types';
import "../css/Music.css"

// Renders music menu
class Music extends React.Component {
    render() {
        const {musicItems,active} = this.props;
        return (
            <div className="music">
                <h2>Music</h2>
                <ul>
                {musicItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                </ul>
            </div>

        )
    }

}

Music.propTypes = {
    musicItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.number.isRequired
};

export default Music;
