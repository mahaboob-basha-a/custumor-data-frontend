import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayGrid from './components/DisplayGrid';
import InputForm from './components/InputForm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<InputForm />} />
        <Route path='/customers' element={<DisplayGrid />} />
      </Routes>
    <ToastContainer />
  </div>
  );
}

export default App;
