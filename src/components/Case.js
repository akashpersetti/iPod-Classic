import React from 'react';
import PropTypes from 'prop-types';
import "../css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

// This component is the outer case of iPod it does nothing special just renders display and wheel component
class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor ,wallpaper, wallpaperItems, noty, setNoty, notifyText} = this.props;
        return (
            <div className="case-container">
                <div style={{backgroundColor:theme}} className="case">
                    <Display songIndex={songIndex} playing={playing} active={active} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} songItems={songItems} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} wallpaper={wallpaper} wallpaperItems={wallpaperItems} noty={noty} setNoty={setNoty} notifyText ={notifyText}/>
                    <Wheel theme={theme} active={active} menuItems={menuItems} currentMenu={currentMenu} changeMenuForward={changeMenuForward} changeMenuBackward={changeMenuBackward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause} seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor}/>
                </div>
            </div>
        )
    }
}

Case.propTypes = {
    active: PropTypes.number.isRequired,
    updateActiveMenu: PropTypes.func.isRequired,
    currentMenu: PropTypes.number.isRequired,
    changeMenuBackward: PropTypes.func.isRequired,
    changeMenuForward: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired,
    musicItems: PropTypes.array.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    songItems: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    songIndex: PropTypes.number.isRequired,
    theme: PropTypes.string.isRequired,
    audio: PropTypes.object,
    songUrl: PropTypes.string.isRequired,
    songImgUrl: PropTypes.string.isRequired,
    seekSongForward: PropTypes.func.isRequired,
    seekSongReverse: PropTypes.func.isRequired,
    wheelColor: PropTypes.string.isRequired,
    wallpaper: PropTypes.string.isRequired,
    wallpaperItems: PropTypes.array.isRequired,
    noty: PropTypes.bool.isRequired,
    setNoty: PropTypes.func.isRequired,
    notifyText: PropTypes.string.isRequired
};

export default Case;
