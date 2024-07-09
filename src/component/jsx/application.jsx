import React, {useState} from 'react';
import "../css/application.css";
import Logo from "./logo";

import BasicInfo from './basicInfo';
import PersonalInfo from './personalInfo';
import ServiceInfo from './serviceInfo';
import SalaryInfo from './salaryInfo';
import LoanInfo from './loanInfo';
import LastPageInfo from './lastPageInfo';




function Application(){

    const default_display = [];

    default_display.push(
        <div>
            <div>
                <BasicInfo/>
            </div>

            <div className='singleButton'>
                <button className='normalButton' onClick={showPersonalInfo} >
                    পরবর্তী
                </button>
            </div>
        </div>
        
    );

    const [display, setDisplay] = useState(default_display);

    function showPersonalInfo(e){

        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <PersonalInfo/>
                </div>
    
                <div className='doubleButton'>
                    <button className='normalButton' onClick={showBasicInfo} >
                        পূর্ববর্তী
                    </button>
                    <div className='buttonMargin'></div>
                    <button className='normalButton' onClick={showServiceSalaryInfo} >
                        পরবর্তী
                    </button>
                </div>
            </div>
        );

        setDisplay(temp);
    }

    function showBasicInfo(e){
        e.preventDefault();
        setDisplay(default_display);
    }

    function showServiceSalaryInfo(e){
        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <ServiceInfo/>
                </div>

                <div>
                    <SalaryInfo/>
                </div>
    
                <div className='doubleButton'>
                    <button className='normalButton' onClick={showPersonalInfo} >
                        পূর্ববর্তী
                    </button>
                    <div className='buttonMargin'></div>
                    <button className='normalButton' onClick={showLoanInfo} >
                        পরবর্তী
                    </button>
                </div>
            </div>
        );

        setDisplay(temp);
    }


    function showLoanInfo(e){
        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <LoanInfo/>
                </div>
    
                <div className='doubleButton'>
                    <button className='normalButton' onClick={showServiceSalaryInfo} >
                        পূর্ববর্তী
                    </button>
                    <div className='buttonMargin'></div>
                    <button className='normalButton' onClick={showLastPageInfo} >
                        পরবর্তী
                    </button>
                </div>
            </div>
        );

        setDisplay(temp);
    }



    function showLastPageInfo(e){
        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <LastPageInfo/>
                </div>
    
                <div className='doubleButton'>
                    <button className='normalButton' onClick={showLoanInfo} >
                        পূর্ববর্তী
                    </button>
                    <div className='buttonMargin'></div>
                    <button className='normalButton' onClick={showBasicInfo} >
                        জমা দিন
                    </button>
                </div>
            </div>
        );

        setDisplay(temp);
    }

    

    return(
        <div className="body">
            <div>
                <Logo/>
            </div>
        
            <div>
                <div>
                    <form>
                        <div>

                            {display}


                        </div>

                    </form>

                </div>
            </div>











        </div>
    );
}

export default Application;