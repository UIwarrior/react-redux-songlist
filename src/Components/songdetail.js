import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SongDetail = ({song}) => {
    if(!song){
        return <p>Select a song </p>
    }
    console.log("song detail", song);

    return <div><p>Title : {song.title} </p></div>
}

const mapStateToProps = (state) => {
    return { song: state.myCurrentSong}
}
/* connect.propTypes ={
    song: PropTypes.objectOf(Object)
}
connect.defaultProps = {
    song: { title: 'Select a song'}
}
 */
export default connect(mapStateToProps)(SongDetail);