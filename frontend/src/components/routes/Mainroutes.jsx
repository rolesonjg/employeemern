import React from 'react'
import Navbar from '../ui/Navbar'
import Employeeform from '../ui/Employeeform'
import Homepage from '../ui/Homepage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../ui/Login';
import Admindashboard from '../ui/Admindashboard';
import Employeeview from '../ui/Employeeview';



const Mainroutes = () => {
    return (
        <div>


            <Router>
                {/* <Navbar /> */}

                <Routes>

                    <Route path="/" element={<Homepage />} />
                    <Route path="/employee" element={<Employeeform />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admindashboard" element={<Admindashboard />} />
                    <Route path="/employeeview" element={<Employeeview />} />
                </Routes>
            </Router>



        </div>
    )
}

export default Mainroutes
