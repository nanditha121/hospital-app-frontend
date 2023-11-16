import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewPatientComponent from './components/AddNewPatientComponent/AddNewPatientComponent';
import EditPatientsComponent from './components/EditPatientsComponent/EditPatientsComponent';
import GetAllPatientsComponent from './components/GetAllPatientsComponent/GetAllPatientsComponent';
import DeletePatientsComponent from './components/DeletePatientsComponent/DeletePatientsComponent';


function App() {
  return (
    <Router>
            <div className="container">
            <h1>Hospital Management App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Patient</Link>
                <Link to="/admin/edit" >Edit Patient</Link>
                <Link to="/admin/delete" >Delete Patient</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllPatientsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewPatientComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditPatientsComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeletePatientsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
