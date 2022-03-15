import logo from './logo.svg';
import './App.css'
import { Form } from './composant/Form';
import { Affichage } from './composant/Affichage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return(
    <><div className='container'>
      <Form />
    </div>
    <br/>
    <div className='container'>
      <Affichage />
    </div></>

  );
}

export default App;
