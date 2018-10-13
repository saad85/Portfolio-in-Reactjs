import React, { Component } from 'react';

import './News.css';

import { Grid, Col, Row, Image} from 'react-bootstrap';




    export default class News extends Component {
        render() {

            const News1= (<div><p>Paytm may acquire Alibaba-owned UCWeb’s India business
                             Over the past few weeks, top executives of the companies have met to discuss the acquisition. For Paytm,
                             CFO Madhur Deora is leading the discussions.
                            </p></div>)

            function Images(props){
                return(<div>
                    <a href="https://www.bbc.com/news/technology">
                            <div className="polaroid">
                            
                                <img src={props.image_path} />
                                
                            </div>
                        </a>
                        </div>

                )


            }



            return(


             

                
 <div>
         <div className="header-container">
            <h3>Latest News</h3>
        </div>


        <div className ="container">

            <Images image_path="assets\News\news-1.jpg" />
           
            <Images image_path="assets\News\news-1.jpg" />
            <Images image_path="assets\News\news-1.jpg" />
            <Images image_path="assets\News\news-1.jpg" />

                




        </div>
    <Grid>
        <Row>
            <Col xs={12} sm={8} className="main-section">
                <h3> News:  </h3>
                <p>This past week JavaScript Weekly surpassed 150,000 subscribers. Over the past eight years it's been a pleasure to share projects, advice, and news with you, and see how JavaScript continues to grow and grow. We don't do it often, but sometimes its nice to mark such a milestone — if you're reading this I just wanted to say thanks. :-)
                    — Peter Cooper, editor</p>
                <p>Many people use React.js as the V in MVC. It is a platform that you can easily use for a small feature on a project that is already exists. It is a library that will give you a very simple programming model and a great performance whenever you start creating your own applications. There is a lot that one can achieve with this framework; you just have to identify some of its best features so that you can utilize them to get what you are looking for.</p>
                <p>Many people use React.js as the V in MVC. It is a platform that you can easily use for a small feature on a project that is already exists. It is a library that will give you a very simple programming model and a great performance whenever you start creating your own applications. There is a lot that one can achieve with this framework; you just have to identify some of its best features so that you can utilize them to get what you are looking for.</p>
                <p>Many people use React.js as the V in MVC. It is a platform that you can easily use for a small feature on a project that is already exists. It is a library that will give you a very simple programming model and a great performance whenever you start creating your own applications. There is a lot that one can achieve with this framework; you just have to identify some of its best features so that you can utilize them to get what you are looking for.</p>
                <p> JavaScript closures have always been a bit of a mystery to me. I have read multiple articles, I have used closures in my work, sometimes I even used a closure without realizing I was using a closure.

                    Recently I went to a talk where someone really explained it in a way it finally clicked for me. I’ll try to take this approach to explain closures in this article. Let me give credit to the great folks at CodeSmith and their JavaScript The Hard Parts series.</p>
            
            </Col>

        <Col xs={12} sm={4} className="sidebar-section">
        <Image src="assets\News\udemy.jpg" />
        <a href="https://www.udemy.com/topic/react">
        <h3>New courses on Udemy !!</h3>
        </a>
        </Col>           
        
        <Col xs={12} sm={4} className="sidebar-section">
        <Image src="assets\News\udemy.jpg" />
        <a href="https://www.udemy.com/topic/react">
        <h3>New courses on Udemy !!</h3>
        </a>
        
        </Col>

        
        

    </Row>
    </Grid>



</div>


)
        }


    }