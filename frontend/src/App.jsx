import './App.css'
import Google from './components/google/Google';
import EmploymentSelectionPage from './pages/employmentSelectionPage/EmploymentSelectionPage';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import EmployeeRegistration from './pages/employeeRegistration/EmployeeRegistration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployerRegistration from './pages/employerRegistration/EmployerRegistration';
import JobSeekerRegistration from './pages/jobseekerRegistration/JobSeekerRegistration'
import LongTermShortTermSelection from './pages/choosing page/ChoosingPage';
import ProfileRegistration from './pages/ProfileRegistration/ProfileRegistration';
import ContinueOptionPage from './pages/Yes or/YesOrNo';
function App() {
  return (  
  
    <Router>
      <Routes>
        
        <Route  path="/" element={<Login/>} />
        <Route  path="/register/:userId" element={<Register/>} />
        <Route  path="/google" element={<Google/>} />
        <Route path='/EmploymentSelectionPage/:userRefId_ER' element={<EmploymentSelectionPage/>}/>
        <Route  path="/employeeRegistration/:userRefId_EeR" element={<EmployeeRegistration/>} />
        <Route  path="/employerRegistration/:userRefId_EeR" element={<EmployerRegistration/>} />
        <Route  path="/jobseekerRegistration/:userRefId_EeR" element={<JobSeekerRegistration/>} />
        <Route  path="/LongTermShortTermSelection" element={<LongTermShortTermSelection/>} />
         <Route  path="/ContinueOptionPage" element={<ContinueOptionPage/>} />
         <Route  path="/ProfileRegistration" element={<ProfileRegistration/>} />
      </Routes>
    </Router>
  
  )
}

export default App
