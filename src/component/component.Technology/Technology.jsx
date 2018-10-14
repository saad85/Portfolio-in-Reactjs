import React, { Component } from 'react';

import {Thumbnail,Row,Button, Grid , Col , Media,Well,Image } from 'react-bootstrap';




import './Technology.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    export default class Technology extends Component {

       

        render(){
            const desc=(<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,</p>);


                function Icon(props){
                   return(<div> <Thumbnail>
                                    <FontAwesomeIcon icon={props.id}
                                            color="#8b0000 "
                                            size={props.size}
                                     />
                                    
                                    
                    </Thumbnail>
                    </div>)
                }

                function MediaHolder(props){

                    return(
                <div> 
                <Media>
                    
                     
                     

                    <Thumbnail>
                            <Media.Body >

                                <div className="media-container">

                                    
                                <Icon id="pen" size="3x"/>
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


            function MediaHolder2(props){

                return(
            <div> 
            <Media>
                
                 
                 

                <Thumbnail>
                        <Media.Body >

                            <div className="media-container">

                                
                            <Icon id="pen" size="3x"/>
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
                                    
                                      
                                    
                                        <MediaHolder   heading="JAVASCRIPT" />
                                    
                                    </Row>   


                                    <Row id="1.2">
                                        
                                    <MediaHolder   heading="ANGULAR" />
                                    
                                    </Row>  


                                    <Row id="1.3">

                                     <MediaHolder   heading="VUE.JS" />    
                                    
                                    </Row>                           

                                </Col>


                                <Col xs={12} sm ={4} id="2">
                                <Image width={64} height={600} src="assets\Technolgy\technology.jpeg" alt="thumbnail" />
                                </Col>


                                <Col xs={12} sm ={4} id="3">
                                    <Row id="3.1">
                                    <MediaHolder2   heading="JQUERY" />
                                    
                                    
                                    </Row>   


                                    <Row id="3.2">
                                        
                                    <MediaHolder   heading="REACT" />
                                </Row>  


                                <Row id ="3.3">
                                <MediaHolder   heading="NODE" />
                                </Row>
                            </Col>
                        </Row>
                    </Grid>


                        
                        <div className="develope-container">
                                <div className="image">

                                        <Image src="assets\Technolgy\black-1.jpg" alt="" responsive  />

                                        <div className="logo-saad">
                                            
                                            <Col xs={12} sm ={4}>
                                                    <Icon id="briefcase" size="5x"/>
                                                    <p>Web design is a process of conceptualizing, planning, and building a collection of electronic files that determine the layout, colors, text styles, structure, graphics, images</p>
                                            </Col>

                                            <Col xs={12} sm ={4}>
                                                    <Icon id="code" size="5x"/>
                                                    <p>Web design is a process of conceptualizing, planning, and building a collection of electronic files that determine the layout, colors, text styles, structure, graphics, images</p>
                                            </Col>

                                            <Col xs={12} sm ={4}>

                                                    <Icon id="database" size="3x"/>
                                                    <p>Web design is a process of conceptualizing, planning, and building a collection of electronic files that determine the layout, colors, text styles, structure, graphics, images</p>
                                            </Col>

                                        </div>

                                </div>
                        </div>
                    </div>






            );
        }
    }