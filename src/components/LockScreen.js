import React from 'react';
import PropTypes from 'prop-types';

// Renderse lockscreen
class LockScreen extends React.Component {
    render() {
        return (
            <div>
                <div className="lock-display">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button to unlock!</h3>
                </div>
            </div>
        )
    }

}

LockScreen.propTypes = {};

export default LockScreen;
