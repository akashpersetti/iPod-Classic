import React from 'react';
import PropTypes from 'prop-types';

// Renders songs menu
class Songs extends React.Component {
    render() {
        const {songItems,active} = this.props;
        return (
            <div className="music">
                <h2>Songs</h2>
                <ul>
                {songItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li  id="song1" key={index}>&nbsp;{element}</li>
                        })}
                </ul>
            </div>

        )
    }

}

Songs.propTypes = {
    songItems: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired
};

export default Songs;
