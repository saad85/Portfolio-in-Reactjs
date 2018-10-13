import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { ListGroupItem,
     Carousel,CarouselItem,
     Image,Well,Thumbnail,
     Tooltip,OverlayTrigger,
    Collapse,Row,Col } 
     from 'react-bootstrap';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


     import './Gallery.css' ;

     export default class Gallery extends Component {

        constructor(props,context){
            super(props,context);
    
            this.state={
                open:false,
                openFavourite:false,
                openNature:false,
            }
            
        }
        
        
        Myfunction=()=>{
            this.setState({ openNature: !this.state.openNature })
              
          }
        
        render() {


        const desc =(
            <Tooltip id="tooltip">
                <strong>Greece !! </strong> Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas.
                 Influential in ancient times, it's often called the cradle of Western civilization.
                  Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple.
            </Tooltip>



        );

        function ImageViewer(props){
            return(
                <div className="responsive">
                        <div className="gallery">
                                <OverlayTrigger placement ="left" overlay={desc}>
                                    <a target="_blank" href={props.image_loca}>
                                    <img src={props.image_loca} alt="Cinque Terre" width="600" height="400"/>
                                    </a>
                                </OverlayTrigger>
                        </div>
                    </div>

            )
        }


    return(
            
        <div className="container">       
                
                    <div className ="carousel-container">
                        <Carousel>

                            

                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="assets\design\design-img.jpeg"  />
                            </CarouselItem>



                            <CarouselItem>
                                <img width={1400} height={500} alt="1400x500" src="assets/gallery/iceland.jpg"  />
                            </CarouselItem>

                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="assets/gallery/iceland2.jpg"  />
                            </CarouselItem>


                            <CarouselItem>
                                <img width={900} height={500} alt="900x500" src="assets\design\design-img2.jpeg"  />
                            </CarouselItem>
                        


                        </Carousel>

                    </div>

                <Well> This is My gallery </Well>
            


             <Nav bsStyle="tabs" activeKey="1" >
                        <NavItem eventKey="1"  onSelect={()=> this.setState({ open: !this.state.open})}>
                        City
                        </NavItem>
                        <NavItem eventKey="2" onSelect={()=> this.setState({ openFavourite: !this.state.openFavourite})}  >
                        Favourite
                        </NavItem>
                        <NavItem eventKey="3"  onSelect={this.Myfunction} >
                        Nature
                        </NavItem>
            </Nav>


                 <div className="collapse-container-saad">
                    <Collapse in= {this.state.open}>

                                <Row>
                                    <Col>
                                            
                                            
                                        <ImageViewer image_loca="assets/greece.jpeg" />
                                        <ImageViewer image_loca="assets/greece.jpeg" />
                                        <ImageViewer image_loca="assets/greece.jpeg" />


                                    </Col>
                                </Row>
                                        
                    </Collapse>

                </div>

                 <div className="collapse-container-saad">
                    <Collapse in= {this.state.openFavourite}>

                        <Row>
                            <Col>
                                
                                
                                <ImageViewer image_loca="assets\favourite\favourite.jpg" />
                                <ImageViewer image_loca="assets\favourite\favourite-2.jpg" />
                                <ImageViewer image_loca="assets\favourite\favourite.jpg" />


                            </Col>
                        </Row>
                    </Collapse>
                 </div>


                 <div className="collapse-container-saad">
                   <Collapse in={this.state.openNature}>
                   
                        <Row>
                            <Col>
                                
                                
                                <ImageViewer image_loca="assets\gallery\nature\nature.jpg" />
                                <ImageViewer image_loca="assets\gallery\nature\nature-1.jpg" />
                                <ImageViewer image_loca="assets\gallery\nature\nature-2.jpg" />


                            </Col>
                        </Row>
                            
                      
                    </Collapse>

                  </div>

               
            <div className= "gallery-section-saad">

                    <ImageViewer image_loca="assets/greece.jpeg" />
                    <ImageViewer image_loca="assets/greece2.jpeg" />
                    <ImageViewer image_loca="assets/gallery/city.jpeg" />
                    <ImageViewer image_loca="assets/gallery/city2.jpeg.jpeg" />
                    <ImageViewer image_loca="assets/gallery/iceland.jpg" />
                    <ImageViewer image_loca="assets/gallery/iceland2.jpg" />


            </div>
        </div>
          
        );
    }
    
}