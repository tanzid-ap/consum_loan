import React, { useState } from 'react';
import './App.css';
import Application from './component/jsx/application';

import { Router, Route } from 'react-router';

function App() {

    

    return (
        <div>
            {/* <Router>
                <Route path={pageName} Component={Application()} />
            </Router> */}
            <Application/>
            {/* <Application pageName={(value) => {setPageName(value)}}/> */}
        </div>
    );
}

export default App
