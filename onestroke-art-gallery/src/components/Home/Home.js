import React, { Component } from 'react';
import { Container, Modal, Row, Col } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel'

import './SliderStyle.css';
import './Home.css';

//Image Slider Images
import img1 from '../../assets/img/SliderImg/Img001.png';
import img2 from '../../assets/img/SliderImg/Img002.png';
import img3 from '../../assets/img/SliderImg/Img003.png';
import img4 from '../../assets/img/SliderImg/Img004.png';

//Collection Section Images
import whitelogo from '../../assets/img/SliderImg/profile.png';
import Abstract from '../../assets/img/Art_Collection/Abstrat.png';
import Vitthal from '../../assets/img/Art_Collection/Vitthal.png';
import Buddha from '../../assets/img/Art_Collection/Buddha.png';
import MultiColor from '../../assets/img/Art_Collection/MultiColor.png';

//Exibition Gallery Section images
import oo1 from '../../assets/img/Exibition_photos/001.jpg';
import oo2 from '../../assets/img/Exibition_photos/002.jpg';
import oo3 from '../../assets/img/Exibition_photos/003.jpg';
import oo4 from '../../assets/img/Exibition_photos/004.jpg';
import oo5 from '../../assets/img/Exibition_photos/005.jpg';
import oo6 from '../../assets/img/Exibition_photos/006.jpg';
import oo7 from '../../assets/img/Exibition_photos/007.jpg';
import oo8 from '../../assets/img/Exibition_photos/008.jpg';
import oo9 from '../../assets/img/Exibition_photos/009.jpg';
import o10 from '../../assets/img/Exibition_photos/010.jpg';
import o12 from '../../assets/img/Exibition_photos/012.jpg';
import o13 from '../../assets/img/Exibition_photos/013.jpg';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false, ImgSrc: null
        };
        
    }

    closeModal = () => this.setState({ isOpen: false });

    showModel(ImgName) {
        this.setState({ ImgSrc: ImgName });
        this.setState({ isOpen: true });
        //console.log(ImgName);
    }

    render() {
        console.log(this.state);


        return (

            <>
                <Carousel  >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Buddha Fmaily Ancestry"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Buddha Art"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Lord Vitthal"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Abstract Art"
                        />
                    </Carousel.Item>

                </Carousel>

                <div className="section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <h2 className="text_font_color text_font_fam" ><span className="theme_color ">OneStroke Art Gallery </span> present best imaginary Canvas paintings.</h2>
                                    <p className="large text_font_fam text_font_color">
                                        We believe customer happiness when they visit at One Stroke art gallery.We have plenty of art works available here and all are uniquely painted on the Canvas.
                                        The artist has more then 20 years of experience in the Art industry and exhibited all over the India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;

                <Container  >
                    <Row  >
                        <Col sm="4"> <img className="img_responsive img_shadow " src={whitelogo} alt="#" /></Col>
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
                    </Row>
                </Container>
                &nbsp;
                <div className="section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11">
                                <div>
                                    <center>
                                        <h2 className="text_font_color text_font_fam" ><span className="theme_color ">Explore OneStroke Art </span>Collection</h2>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp; &nbsp;
                <Container>
                    <Row  >
                        <Col sm>
                            <img className="img_responsive art " src={Buddha} alt="#" />
                        </Col>
                        &nbsp;
                        <Col sm>
                            <img className="img_responsive art" src={Vitthal} alt="#" />
                        </Col>
                        &nbsp;
                        <Col sm>
                            <Row >
                                <img style={{ width: "350px", height: "320px" }} className="img_responsive art" src={Abstract} alt="#" />
                            </Row>
                        &nbsp;
                            <img className="img_responsive art" src={MultiColor} alt="#" />
                        </Col>
                    </Row>
                </Container>
                &nbsp;
                <div className="section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-11">
                                <div>
                                    <center>
                                        <h2 className="text_font_color text_font_fam" ><span className="theme_color "> Art Exibition </span> Photos</h2>
                                    </center>
                                    <p className="large text_font_fam text_font_color">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;

                <Container >
                    <Row>
                         <Col md="2">
                         <img className="img_responsive art " src={oo1} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo1)} />
                        </Col>
                        <Col md="2"><img className="img_responsive art " src={oo2} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo2)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo4} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo4)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo5} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo5)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo6} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo6)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo7} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo7)} /></Col>
                    </Row>&nbsp;
                    <Row>
                        <Col md="2"><img className="img_responsive art " src={oo8} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo8)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo9} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo9)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={o10} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(o10)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={o12} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(o12)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={oo3} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(oo3)} /></Col>
                        <Col md="2"><img className="img_responsive art " src={o13} alt="#" style={{ cursor: 'pointer' }} onClick={() => this.showModel(o13)} /></Col>
                    </Row>&nbsp;

                </Container>
                <Modal className="special_modal" show={this.state.isOpen} onHide={this.closeModal} centered >
                    <Modal.Body><img className="img_responsive " src={this.state.ImgSrc} alt="Gallary" /></Modal.Body>
                </Modal>

                <div className="section layout_padding" >
                    <Container>
                        <Row>
                            <Col>
                                <center>
                                    <span style={{ fontSize: "12px", fontWeight: "lighter" }} className="theme_color ">Copyright &copy;{new Date().getFullYear()} by OneStroke Art Gallery.All Right Reserved.</span>
                                </center>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </>
        )
    }
}

export default Home;

