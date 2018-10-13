import React, { Component } from 'react';

import {Thumbnail,Row,Button, Grid , Col , Image } from 'react-bootstrap';

import './About.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


    export default class About extends Component {
        render() {

          function Icon(props){
            return (
                    <FontAwesomeIcon
                                                        
                            icon={props.name}
                            color="#cc1100"
                            size={props.size}
                      
                      />
            )

          }

         
          const MY_Desc =(<div>

                    <h3> SAMIUL ISLAM</h3>
                        <p>Hello ! My name is Samiul islam.</p>
                        <p>I am a Front-end developer.</p>
                        <p>I am developing front end development for over 1 year.
                              The technologies that i use are Angular, React, Jquery, JavaScript,
                              HTML, Css, Bootstrap.
                              JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface.
                              JavaScript code can use the Document Object Model (DOM), provided by the HTML standard, to manipulate a web page in response to events, like user input.</p>  




                        </div>);


              function DeveloperDetail (props){
                  if(props.id==="1"){

                    return(
                      <div>

                            <h3>Christopher Esplin, USA</h3>
                            
                                <p>Christoper designs and develops for the web using the latest JavaScript technologies including React,
                                  Polymer, and other variants.
                                  He possesses extensive experience with Node.js, GraphQL, Firebase, React,
                                </p>

                                <p>
                                      <Button bsStyle="primary" href="https://platform.toptal.com/resume/christopher-esplin">Go To Page</Button>
                                        &nbsp;
                            
                                </p>

                        </div>
                      )
                    }

                  if(props.id==="2"){
                        return(
                        
                        <div>

                                <h3>Wout Mertens, Poland</h3>
                                
                                    <p>Christoper designs and develops for the web using the latest JavaScript technologies including React,
                                      Polymer, and other variants.
                                      He possesses extensive experience with Node.js, GraphQL, Firebase, React,
                                    </p>

                                    <p>
                                      <Button bsStyle="primary" href="https://platform.toptal.com/resume/christopher-esplin">Go To Page</Button>
                                       &nbsp;
                            
                                    </p>

                        </div> )
                         }
                         
                         if(props.id==="3"){
                          return(
                          
                          <div>
  
                                  <h3>Pierre Killy, Sweden</h3>
                                  
                                      <p>Christoper designs and develops for the web using the latest JavaScript technologies including React,
                                        Polymer, and other variants.
                                        He possesses extensive experience with Node.js, GraphQL, Firebase, React,
                                      </p>
  
                                      <p>
                                        <Button bsStyle="primary" href="https://platform.toptal.com/resume/christopher-esplin">Go To Page</Button>
                                         &nbsp;
                              
                                      </p>
  
                          </div> )
                           }


               }           


              function DeveloperBody(props){
                return (
                  <div>

                    <Thumbnail src={props.developer_pic} alt="242x200">
                    </Thumbnail>
                  </div>
                )

              }



  return(
                
        <div className="container">
          
          <Image src = "assets/about-1.jpeg" className="header-image" />
                  

              <div className="about-profile">
            
                  <Grid>
                    <Row>
                      <Col xs={6} md={4}>
                        <div className="about-me">
                              <Thumbnail>

                                  <Icon name="user-tie" size ="5x"/>

                                  {MY_Desc}
                                    
                              </Thumbnail>
                        </div>      
                      </Col>
                                      
                                      
                        <Col xs={6} md={4}>
                                      
                          <Image src="assets/profile.jpg" alt="242x200" thumbnail/>
                                      
                        </Col>

                                  
                    <Col xs={6} md={4}>
                      
                      <div className="contact-me">      
                      
                        <Thumbnail>
                          
                          
                            <Icon name="address-card" size="5x"/>
                                  
                               <h3 > CONTACT ME</h3>
                              
                              <div>
                                
                                    
                                <Icon name="envelope" size="lg"/>

                                    Email: samiul.saad@gmail.com
                              </div>  
                                    
                                    
                                <div> 
                                  <Icon name={['fab', 'apple']} size="lg"/>
                                    Cell: 016394...
                                </div> 

                                    
                                <div>
                                  <Icon name={['fab', 'facebook']} size="lg"/> 
                                    Facebook id: ...
                                </div>
                          
                        </Thumbnail>
                      
                      </div>
                    
                    </Col>



                    </Row>
                  </Grid>

            </div>


            <div className= "container2">
                    <h3>DEVELOPERS I FOLLOW</h3>
            </div>


              <Grid>
                  
                      <Row>
                  
                        <Col xs={6} md={4}>
                            <div className="developer-container">
                              <Thumbnail>
                                  <DeveloperBody developer_pic="assets/developer1.jpg"/>
                                  <DeveloperDetail id="1" />
                                </Thumbnail>

                            </div>           
                        
                        </Col>


                        <Col xs={6} md={4}>

                            <div className="developer-container">
                            <Thumbnail>

                                <DeveloperBody developer_pic="assets/developer2.jpg"/>
                                <DeveloperDetail id="2" />
                            </Thumbnail> 
                            </div>
                        
                        </Col>


                        
                        <Col xs={6} md={4}>

                          <div className="developer-container">
                              <Thumbnail>  
                                <DeveloperBody  developer_pic="assets/developer3.jpg"/>
                                <DeveloperDetail id="3"/>
                              
                              </Thumbnail>
                          </div>
                            
                        </Col>
                          
                      </Row>
                        
                  </Grid>

          <div className="footer-container">
                                <div class="image">

                                        <img src="assets\footer.jpeg" alt="" />
                                  </div>
          </div>                              


    </div>);
            





        }








    }