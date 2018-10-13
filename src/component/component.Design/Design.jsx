import React, { Component } from 'react';

import {Thumbnail,Row,Button, Grid , Col , Image,Media,Well } from 'react-bootstrap';


import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';



import './Design.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    export default class Design extends Component {


        render(){


            function Design(){
           return( 
                <div>
               
               
                    <Well>
                            <h3> My Design Plan </h3>
                    </Well>
            
                </div>
                );
            }

            function DesignDescription(){
                return( 
                     <div>
                    
                            <h3>
                                 Front-end web development is the converting data to graphical interface
                                for user to view and interact.
                            </h3>

                     </div>
                     );
                 }


                 function BodyDesign(props){
                    return( 
                         <div className="design">
                            <Thumbnail>
                                                            
                                        <FontAwesomeIcon className="logo-container"
                                            icon={props.id}
                                            color=" #111 "
                                            size="3x"
                                        />        
                                                            
                                    <DesignDescription />
                                                        
                                                        
                            </Thumbnail>
                         </div>
                         );
                     }



            return(
                    <div>
                       

                        
                        <div className="develope-container">
                                <div class="image">

                                        <img src="assets\design\design-img2.jpeg" alt="" />

                                        <div className="logo-saad">
                                            <Row>
                                                
                                                <Col xs={6} sm ={4}>
                                                    
                                                   <BodyDesign id="edit"/>
                                            
                                                </Col>

                                            <Col xs={6} sm ={4}>
                                                    <BodyDesign id="code"/>
                                            
                                            </Col>

                                            <Col xs={6} sm ={4}>

                                                    <BodyDesign id="database"/>
                                            
                                            </Col>

                                        </Row>



                                        <Row>
                                            <Col xs={6} sm ={4}>

                                                  <BodyDesign id="align-center"/>

                                            </Col>

                                            <Col xs={6} sm ={4}>
                                                    

                                                    <BodyDesign id="code"/>
                                            
                                            </Col>

                                            <Col xs={6} sm ={4}>

                                                   <BodyDesign id="camera-retro"/>
                                            
                                            </Col>
                                        </Row>

                                    </div>

                                </div>

                        </div>

                    </div>

            );
        }
    }