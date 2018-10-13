import React, { Component } from 'react';

import {Thumbnail,Row,Button, Grid , Col , Image,Media,Well,PageHeader } from 'react-bootstrap';


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
                                    <PageHeader>{props.header}</PageHeader>                  
                                    <DesignDescription />
                                                        
                                                        
                            </Thumbnail>
                         </div>
                         );
                     }



            return(
                    <div>
                       

                        
                        <div className="develope-container">
                            <Design/>
                                <div className="image">

                                        <img src="assets\design\design-img2.jpeg" alt="" />

                                        <div className="logo-saad">
                                            <Row>
                                                
                                                <Col xs={6} sm ={4}>
                                                    
                                                   <BodyDesign id="edit" header="PLATFORM"/>
                                            
                                                </Col>

                                            <Col xs={6} sm ={4}>
                                                    <BodyDesign id="code" header="CODE"/>
                                            
                                            </Col>

                                            <Col xs={6} sm ={4}>

                                                    <BodyDesign id="database" header="BACK-END"/>
                                            
                                            </Col>

                                        </Row>



                                        <Row>
                                            <Col xs={6} sm ={4}>

                                                  <BodyDesign id="shield-alt" header="TESTING" />

                                            </Col>

                                            <Col xs={6} sm ={4}>
                                                    

                                                    <BodyDesign id="desktop" header="WEB DOMAIN"/>
                                            
                                            </Col>

                                            <Col xs={6} sm ={4}>

                                                   <BodyDesign id="camera-retro" header="FEEDBACK"/>
                                            
                                            </Col>
                                        </Row>

                                    </div>

                                </div>

                        </div>

                    </div>

            );
        }
    }