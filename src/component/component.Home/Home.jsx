import React, { Component } from 'react';



import {  Grid, Row, Col, Image, Button, Thumbnail,PageHeader,Collapse,Well} from 'react-bootstrap';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    export default class Home extends Component {
        
        constructor(props,context){
        super(props,context);

        this.state={
            open:false
        }
        
    }


   
        
        
        render() {


            function IconContact(props){
                return (
                        <FontAwesomeIcon
                                                            
                                icon={props.name}
                                color="#111"
                                size={props.size}
                          
                          />
                )
    
              }



            function Icon(props){
                return(
                        <div>

                            <FontAwesomeIcon
                                    icon={props.id}
                                    color=" #f1f1f1 "
                                    size={props.size} />
                        </div>);
            }

            
            
            return( 
              
            <div className="container-saad">
                <Image src="assets/apple-black-and-white-camera-6482.jpg" alt="Notebook"  />
                
                    <div className="content-saad">
                     
                                <div className="header-saad">
                                    <PageHeader> MY PORTFOLIO <small>samiul.saad@gmail.com</small></PageHeader>

                                    <p>My name is Samiul Islam</p>
                                    <small>This Portfolio is developed to reflect my accomplishments, skills, experiences in ReactJs.</small>
                                    <small>React allows you to write modular and clean code, breaking the project into separate components.</small>
                                    <small> This also allows for code reuse, which can really boost developer productivity.</small>
                                    <small>Unlike large monolithic projects, React code is easy to maintain and update due to its modular structure.</small>
                                
                                </div>
                      

                            <div  className ="quote-saad">
                                        
                                       <div  className ="quote-left" >
                                           <Icon id="quote-left" size="5x" /> 
                                        </div>

                                            <h3> 
                                                
                                                Your most unhappy customers are your greatest source of learning.
                                                Success is a lousy teacher. It seduces smart people into thinking they can't lose.
                                                Life is not fair; get used to it.
                                                    <div ></div>    
                                                    -Bill Gates
                                                    <div  className ="quote-right" >
                                            <Icon id="quote-right" size="3x"/> 
                                        </div>  
                                                    
                                            </h3>
                                        
                                       
                            </div>
                                    
                                    
                                    
                                    <div></div>
                                    
                                    
                                    <Button bsStyle="primary" onClick={
                                        ()=> this.setState({ open: !this.state.open})

                                    }> CONTACT WITH ME </Button>

                   
                        
                        
                        
                                    <Collapse in= {this.state.open}>

                                            
                                        <div className="contact-saad">
                                        
                                                
                                            <Row>
                                                    <Col xs={6} sm={4}>
                                                    
                                                            <div></div>
                                                            <div></div>
                                                                
                                                                
                                                            <div>
                                        
                                            
                                                                    <IconContact name="envelope" size="3x"/>

                                                                        <h3>Email: samiul.saad@gmail.com</h3>
                                                                        
                                                                
                                                                </div>  
                                            
                                            
                                                            <div> 
                                                                

                                                                    <IconContact name={['fab', 'apple']} size="3x"/> 
                                                                
                                                                
                                                                        <h3>Cell: 016394...</h3>
                                                                    
                                                                
                                                            </div> 

                                            
                                                            <div>
                                                            
                                                                    
                                                                    <IconContact name={['fab', 'facebook']} size="3x"/> 
                                                                        
                                                                        <h3>Facebook id: ...</h3>
                                                                
                                                            
                                                            </div>  

                                                            
                                                    </Col>
                                            </Row>
                                            
                                        </div>
                                            

                                    </Collapse>

                </div>

                    

                                        <div className="education-sec">
                                                <Grid>
                                                    <Row>
                                                        <Col xs={8} sm={4}>
                                                        <FontAwesomeIcon icon="graduation-cap"
                                                                    color=" #111 "
                                                                    size="5x" />
                                                        
                                                            <Well>
                                                            <h3>Ahsanullah University of Science and Technology.</h3>
                                                                Computer Science and Engineering.
                                                                year:2013-2017
                                                             </Well>
                                                        
                                                        </Col> 
                                                    <Col xs={8} sm={4}>

                                                    <FontAwesomeIcon icon="university"
                                                                    color=" #111 "
                                                                    size="5x" />
                                                        
                                                            <Well>
                                                                <h3>Dhaka City College.</h3>
                                                                Dhaka City College is one of the oldest colleges in Bangladesh. 
                                                                It is located at Dhanmondi 
                                                            </Well>
                                                        
                                                    </Col> 

                                                        <Col xs={8} sm={4}>
                                                        <FontAwesomeIcon icon="book-open"
                                                                    color=" #111 "
                                                                    size="5x" />
                                                        
                                                            <Well>
                                                                <h3>Mirpur Bangla High School.</h3>
                                                                Mirpur Bangla School and College is a school located in 
                                                                Dhaka, Bangladesh. 
                                                            </Well>
                                                        
                                                        </Col> 
                                                    
                                                    </Row>

                                                </Grid>
                                            </div>
            
            
            
            
            </div>
           
            
           
         
            );





        }








    }