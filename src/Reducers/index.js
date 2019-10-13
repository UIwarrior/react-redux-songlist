import { combineReducers} from 'redux';

const songsReducer = () => {
    return [
        { title: 'Viva la vida', duration: '4:05'},
        { title: 'Perfect', duration: '4:05'},
        { title: 'We will rock you', duration: '4:05'},
        { title: 'Cave', duration: '4:05'}
    ]
}

const selectedSongReducer = (myCurrentSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
        return myCurrentSong

}

export default combineReducers({
    songs: songsReducer,
    myCurrentSong: selectedSongReducer
})