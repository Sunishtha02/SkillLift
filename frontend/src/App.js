import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Categories from './pages/categories';
import Login from './pages/login';
import Signup from './pages/signup';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Tsignup from './pages/tsignup';
import Scat from './pages/scat';
import English from './pages/english';
import Javascript from './pages/javascript';
import Hindi from './pages/hindi';
import Maths from './pages/maths';
import Cplus from './pages/cplus';
import Java from './pages/java';
import Python from './pages/python';
import Science from './pages/science';
import Creact from './pages/creact';
import Admin from './pages/admin';
import StudInfo from './pages/studentinfo';
import StudentDetails from './pages/studentDetails';
import UpdateStudent from './pages/updateStudent';
import TutorInfo from './pages/tutorinfo';
import TutorDetails from './pages/tutorDetails';
import UpdateTutor from './pages/updateTutor';
import GetCourse from './pages/getcourse';
import Classroom from './pages/classroom';
import Class from './pages/class';

class App extends Component {

  render() {
      return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route exact path='/' element={<Home/>} />
                      <Route path='/home' element={<Home/>} />
                      <Route path='/categories' element={<Categories/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/signup' element={<Signup/>} />
                      <Route path='/student' element={<Student/>} />
                      <Route path='/tutor' element={<Teacher/>} />
                      <Route path='/tsignup' element={<Tsignup/>} />
                      <Route path='/scat' element={<Scat/>} />
                      <Route path='/english' element={<English/>} />
                      <Route path='/hindi' element={<Hindi/>} />
                      <Route path='/maths' element={<Maths/>} />
                      <Route path='/cplus' element={<Cplus/>} />
                      <Route path='/java' element={<Java/>} />
                      <Route path='/python' element={<Python/>} />
                      <Route path='/science' element={<Science/>} />
                      <Route path='/creact' element={<Creact/>} />
                      <Route path='/javascript' element={<Javascript/>} />
                      <Route path='/admin' element={<Admin/>} />
                      <Route path='/studinfo' element={<StudInfo/>}/>
                      <Route path="/students/:id" element={<StudentDetails/>} />
                      <Route path="/students/:id/edit" element={<UpdateStudent/>} />
                      <Route path='/tutorinfo' element={<TutorInfo/>}/>
                      <Route path="/tutors/:id" element={<TutorDetails/>} />
                      <Route path="/tutors/:id/edit" element={<UpdateTutor/>} />
                      <Route path="/getcourse" element={<GetCourse/>} />
                      <Route path="/classroom" element={<Classroom/>} />
                      <Route path="/class" element={<Class/>} />
                  </Routes>
              </Router>
          </div>
      );
  }
}

export default App;
