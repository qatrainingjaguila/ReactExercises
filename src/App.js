import logo from './logo.svg';
import './App.css';
// import Header from './Components/Parent-Child/Header'
// import Navbar from './Components/Parent-Child/Navbar'
// import Main from './Components/Parent-Child/Main'
// import Footer from './Components/Parent-Child/Footer'
import ListItems from './Components/FakeTodo/ListItems'
import Info from './Components/Intermediate/Info';
import ContactsStart from './Components/ContactSolution/ContactsStart'

function App(){
  return (
    <div className="App">
      {/* <Standard/> */}
      {/* <ListItems/> */}
      {/* <Info/> */}
      <ContactsStart/>
    </div>
  );
}

export default App;
