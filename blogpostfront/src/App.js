import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components';
import Create from './components/create';
import Update from './components/update';
import Show from './components/show';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to='/' className="navbar-brand">Home</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/create' className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to='/update/1' className="nav-link">Update</Link>
                </li>
                <li className="nav-item">
                  <Link to='/show/1' className="nav-link">Show</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/update/:id' element={<Update />}/>
          <Route path='/show/:id' element={<Show />}/>
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
