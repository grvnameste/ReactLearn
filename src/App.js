import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/DashBoard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
