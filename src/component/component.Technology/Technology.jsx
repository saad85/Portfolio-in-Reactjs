import React, { Component } from 'react';

import {Thumbnail,Row,Button, Grid , Col , Media,Well } from 'react-bootstrap';




import './Technology.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    export default class Technology extends Component {

       

        render(){
            const desc=(<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,</p>);


                function Icon(props){
                   return(<div> <Thumbnail>
                                    <FontAwesomeIcon icon={props.id}
                                            color=" #111 "
                                            size="5x"
                                     />
                                    
                                    <h3>
                                        Front-end web development is the converting data to graphical interface
                                        for user to view and interact.
                                    </h3>
                    </Thumbnail>
                    </div>)
                }

                function MediaHolder(props){

                    return(
                <div> 
                <Media>
                    <Media.Right>
                        <img width={10} height={64} src={props.imgSrc}  />
                    </Media.Right>
                     
                     

                    <Thumbnail>
                            <Media.Body >

                                <div className="media-container">
                                
                                    <Media.Heading>{props.heading}</Media.Heading>
                                
                                </div>
                                
                                <div className="media-container">
                                    {desc}
                                
                                </div>
                            </Media.Body>
                
                
                    </Thumbnail>
                
                </Media> 
            </div>
            )




                }

            return(
                    <div>

                        <Grid>
                            <Row>
                                <Col xs={12} sm ={4} id="1">
                                 
                                    <Row id="1.1">
                                      
                                    
                                        <MediaHolder imgSrc="assets\Technolgy\JavaScript-logo.png"  heading="JAVASCRIPT" />
                                    
                                    </Row>   


                                    <Row id="1.2">
                                        
                                    <MediaHolder imgSrc="assets\Technolgy\angular (1).png"  heading="ANGULAR" />
                                    
                                    </Row>  


                                    <Row id="1.3">

                                     <MediaHolder imgSrc="assets\Technolgy\vuejs-logo.jpg"  heading="VUE.JS" />    
                                    
                                    </Row>                           

                                </Col>


                                <Col xs={12} sm ={4} id="2">
                                <img width={64} height={500} src="assets\Technolgy\technology.jpeg" alt="thumbnail" />
                                </Col>


                                <Col xs={12} sm ={4} id="3">
                                    <Row id="3.1">
                                        
                                        <Media>
                                            <Media.Right>
                                                
                                                <img width={32} height={64} src="assets\Technolgy\jquery.png" thumbnail />
                                            
                                            </Media.Right>

                                        <Thumbnail>

                                            <Media.Body>

                                                <div className="media-container-2">
                                                
                                                    <Media.Heading>JQUERY</Media.Heading>
                                                
                                                </div>
                                                
                                                <div className="media-container-2">
                                                    
                                                        {desc}
                                                
                                                </div>
                                            </Media.Body>
                                        </Thumbnail>
                                        
                                     </Media>
                                    
                                    
                                    </Row>   


                                    <Row id="3.2">
                                        <Media>
                                            <Media.Right>
                                                
                                                <img width={32} height={64} src="assets\Technolgy\react.png" thumbnail />
                                            
                                            </Media.Right>
                                             
                                             
                                        <Thumbnail>

                                            <Media.Body>

                                                <div className="media-container-2">
                                                
                                                    <Media.Heading>REACT</Media.Heading>
                                                
                                                </div>
                                                
                                                <div className="media-container-2">
                                                    
                                                    {desc}
                                                
                                                </div>
                                            </Media.Body>
                                            
                                            </Thumbnail>
                                    
                                    </Media>
                                </Row>  


                                <Row id ="3.3">
                                        <Media>
                                            <Media.Right>
                                                
                                                <img width={32} height={64} src="assets\Technolgy\node.js_logo.png" thumbnail />
                                            
                                            </Media.Right>
                                             
                                             

                                    <Thumbnail>
                                            <Media.Body>

                                                <div className="media-container-2">
                                                
                                                    <Media.Heading>NODE</Media.Heading>
                                                
                                                </div>
                                                
                                                <div className="media-container-2">
                                                    
                                                        {desc}
                                                
                                                </div>
                                            </Media.Body>
                                        </Thumbnail>
                                        
                                    </Media>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>


                        
                        <div className="develope-container">
                                <div class="image">

                                        <img src="assets\Technolgy\black-1.jpg" alt="" />

                                        <div className="logo-saad">
                                            
                                            <Col xs={12} sm ={4}>
                                                    <Icon id="briefcase"/>
                                            </Col>

                                            <Col xs={12} sm ={4}>
                                                    <Icon id="code"/>
                                            
                                            </Col>

                                            <Col xs={12} sm ={4}>

                                                    <Icon id="database"/>
                                            </Col>

                                        </div>

                                </div>
                        </div>
                    </div>






            );
        }
    }