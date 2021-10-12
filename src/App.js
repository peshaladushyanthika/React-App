import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import CreateData from './components/createData.component';
import ListData from './components/listData.component';
import {Button, Container,Nav,Navbar} from 'react-bootstrap';

class App extends Component{
  render(){
    return(
<Router>
<Container>
    
      <Navbar bg="dark" variant="dark">
    
    <Nav className="me-auto">
      <Nav.Link href="/createData" className = "link">Create</Nav.Link>
      <Nav.Link href="/listData" className = "link">Link</Nav.Link>
      <Button className="signup" bg="light"  size="lg" block="block" type="button">SignUp</Button> 
      <Button className="login"  size="lg" block="block" type="button">LogIn</Button> 
      
      </Nav>
    </Navbar>
<Switch>
    <Route exact path = "/createData" component = {CreateData}/>
    <Route exact path = "/listData" component = {ListData}/>
    
  </Switch>
  </Container>
</Router>
    );
  }
}
export default App;
