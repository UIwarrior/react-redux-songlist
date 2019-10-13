import React from  'react';
import { selectSong } from '../Actions/';
import SongList from './songlist';
import { Container, Col, Row } from 'react-bootstrap';
import SongDetail from './songdetail';
const App = () => {
    return (
    <Container>
     <Row>
     <Col sm={8} >  
     <SongList />
     </Col>
     <Col sm ={4}>
     <SongDetail />
     </Col>   
         </Row>   
  
    </Container>)
}

export default App;