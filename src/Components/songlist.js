import React from 'react';
import { connect} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap';
import { selectSong  } from "../Actions";



class SongList extends React.Component {
    

  clickSongFunc(song){
    console.log("props",this.props);
    this.props.selectSong(song);
  }

    render(){
        return (
          <Row>
          <ListGroup>
          {this.props.songs.map(song => (
            <div>
              <ListGroup.Item>{song.title}</ListGroup.Item>
              <Button variant="primary" size="md" onClick={() => this.clickSongFunc(song)}>Select</Button>
            </div>
          ))
          }
        </ListGroup>
        </Row>  
        )}
}

const mapStateToProps = (state) => {
  console.log("store redux state", state);
  return {songs: state.songs}
}

export default connect(mapStateToProps, { selectSong })(SongList);