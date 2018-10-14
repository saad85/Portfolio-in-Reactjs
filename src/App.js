import React, { Component } from 'react';



import {BrowserRouter as Router ,Route } from 'react-router-dom';

import Home from './component/component.Home/Home';

import About from './component/component.About/About';

import News from './component/component.News/News';

import Design from './component/component.Design/Design';

import CustomNavbar from './component/component.CustomNavbar/CustomNavbar';


import Gallery from './component/component.Gallery/Gallery';

import Technology from './component/component.Technology/Technology';



import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5 } from '@fortawesome/free-brands-svg-icons'


import { faEnvelope, faKey, faAddressCard,faUserTie, 
          faUniversity,
           faGraduationCap,
           faQuoteLeft,faQuoteRight,
           faBookOpen,
           faBriefcase,
           faCode,
           faDatabase,
           faEdit,
           faAlignCenter,
           faCameraRetro,
           faDesktop,
           faShieldAlt,
           faPen
          
           
          
            } from '@fortawesome/free-solid-svg-icons'





 

import {
  faCoffee,
  faCog,
  faSpinner,
 
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'




library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faEnvelope,
  faKey,
  faAddressCard,
  faUserTie,
  faUniversity,
  faGraduationCap,
  faQuoteLeft,faQuoteRight,
  faBookOpen,
 faHtml5,faBriefcase,
 faCode,faDatabase,
 faEdit,
 faAlignCenter,
 faCameraRetro,
 faDesktop,
 faShieldAlt,
 faPen

  
)






class App extends Component {
  render() {
    return (

      <Router>
      
      
        <div>
          
          <CustomNavbar />
        
          <Route exact path ="/" component = {Home} />
          <Route  path ="/design" component = {Design} />
          <Route  path ="/about" component = {About} />
          <Route path ="/news" component = {News} />
          <Route path ="/gallery" component = {Gallery} />
          <Route path ="/technology" component = {Technology} />
        

        </div>


      </Router>





    );
  }
}

export default App;
