import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../assets/img/SliderImg/profile.png';
import '../Home/Home.css';
 
export class artist extends Component {
    render() {
        return (
            <>


                <div className="section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div>
                                    <center>
                                        <h2 className="text_font_color text_font_fam" ><span className="theme_color ">OneStroke Art Gallery </span>Artist</h2>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>&nbsp;
                <Container  >
                    <Row  >
                        <Col sm="4"> <img className="img_responsive img_shadow " src={profile} alt="#" /></Col>
                        <Col sm="8">
                            <h3 className="text_font_color " >
                                <span className="theme_color text_font_fam ">Mr.Vitthal More (Black Hole, Exibition 2019)</span>
                            </h3>
                            <p className=" text_font_fam ">
                                I have always loved drawing since I was a child. So, I have finished my education in Art and completed my whole life as Artist. I do mostly freestyle painting using the knife and use Oil color on the canvas.
                                </p>
                            <p className=" text_font_fam ">
                                The Blackhole exhibition was based on Abstract painting subject and we kept 20 plus different paintings in the Exibition.<b><i>"Black Hole", "Shwetambari", "World Beauty" and "Buddha" </i></b>are painting names from that exhibition.
                                </p>
                        </Col>
                    </Row>&nbsp;
                    <Row>
                        Im..
                    </Row>
                </Container>
            </>
        )
    }
}

export default artist
