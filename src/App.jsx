import React, { useState } from 'react';
import './App.css';


import { Routes, Route } from 'react-router';

import Login from './component/jsx/login';
import BasicInfo from './component/jsx/basicInfo';
import PersonalInfo from './component/jsx/personalInfo';
import SalServInfo from './component/jsx/salServInfo';
import LoanInfo from './component/jsx/loanInfo';
import LastPageInfo from './component/jsx/lastPageInfo';
import PreviewApplication from './component/jsx/previewApplication';

function App() {

    return (
        <div>

{/* 
            <Application/>
 */}

            <Routes>
                <Route 
                    path="/" 
                    element={ <Login /> }

                />

                <Route 
                    path="/application/1" 
                    element={ <BasicInfo /> }
                    
                />

                <Route 
                    path="/application/2" 
                    element={ <PersonalInfo /> }

                />

                <Route 
                    path="/application/3" 
                    element={ <SalServInfo /> }

                />

                <Route 
                    path="/application/4" 
                    element={ <LoanInfo /> }

                />


                <Route 
                    path="/application/5" 
                    element={ <LastPageInfo /> }

                />

                <Route 
                    path="/application/preview" 
                    element={ <PreviewApplication /> }

                />

            </Routes>


        </div>
    );
}

export default App
