import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import FormikComponent from './components/FormikComponent';
import { Routes,Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>



        <Routes>
          <Route path="/custom" element={<FormikComponent/>} />
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      


    </div>
  );
}

export default App;
