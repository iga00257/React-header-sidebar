import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBars } from '@fortawesome/free-solid-svg-icons'
import './layout/header.css'
import Sidebar from './layout/sidebar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import head from './layout/header';
import logo from './assets/Header_EdgeEye_white95x25.png'
import Navbar from './components/Navbar';

function App() {
  const [sidebar,setSidebar] = useState(true);
  // const [count, setCount] = useState(0)
  // const [color, setcolor] = useState('green');
  
  return (
    <>

      <header className='wrapper'>
        <nav className='navbar '>
          <div className='container-fluid'>
              <div className="navbar-header pull-left">
                  <button type="button" id="sidebarCollapse" className="btn navbar-btn toggle-menu menu-left" onClick={()=>{setSidebar(!sidebar)}}>
                      <i class="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <a>
                    <img id="icaplogo" style={{cursor: 'pointer'}} src={logo}/>
                </a>
              </div>
          </div>
        </nav>
        </header>
      <Router>
        <Navbar sidebar={sidebar}/>
        <Routes>
        <Route path='/'/>

        </Routes>
      </Router>
    </>
  )
}

function layOut(){
  <div>

  </div>
}



function BasicExample() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <BasicExample></BasicExample>
    </>
  );
}



// function App() {
//   const [count, setCount] = useState(0)
//   const [color, setcolor] = useState('green');
  
//   return (
//     <div >
//         {/* <Timer color={color}/>
//         <Timer color={color}/>
//         <Mybutton ></Mybutton>
//         <Mybutton backgroundColor={'green'} text={'button2'}></Mybutton>
//         <button onClick={()=>{setcolor('red')}}></button> */}
//         {btn}
//     </div>
//   )
// }


function Mybutton(props){
  return <button className='button'>
    {props.text}
  </button>
}


function Timer(props){
  let [second, setSecont] = useState(0);
  return <div>
    <p style={{color:props.color}}>{second}</p>
    <button onClick={()=>{setSecont(second+1)}}></button>
  </div>
}
export default App
// analize which is copys

//which component props
//component stats 