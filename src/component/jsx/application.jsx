import React, {useState} from 'react';
import "../css/application.css";
import Logo from "./logo";


import Login from './login';
import BasicInfo from './basicInfo';
import PersonalInfo from './personalInfo';
import ServiceInfo from './serviceInfo';
import SalaryInfo from './salaryInfo';
import LoanInfo from './loanInfo';
import LastPageInfo from './lastPageInfo';
import PreviewApplication from './previewApplication';



function Application(){

    const login_default_display = [];
    var empl_data = [];

    login_default_display.push(
        <div>
            <Login onAuthenticate={(temp_value, temp_data) => {showLogin(temp_value, temp_data)}  }/>
        </div>
    );

    

    const [display, setDisplay] = useState([]);

    const [login_display,setLogin_display] = useState(login_default_display);

    function showLogin(value, e_data){

        empl_data = e_data;
    
        if(value){
            setLogin_display([]);
            const temp = [];
            temp.push(
                <div>
                    <div>
                        <BasicInfo basic_data={empl_data}/>
                    </div>
        
                    <div className='singleButton'>
                        <button className='normalButton' onClick={showPersonalInfo} >
                            পরবর্তী
                        </button>
                    </div>
                </div>
                
            );
            setDisplay(temp);
        }
    }


    function showBasicInfo(e){
        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <BasicInfo basic_data={empl_data}/>
                </div>
    
                <div className='singleButton'>
                    <button className='normalButton' onClick={showPersonalInfo} >
                        পরবর্তী
                    </button>
                </div>
            </div>
            
        );
        setDisplay(temp);
    }



    function showPersonalInfo(e){

        e.preventDefault();

        const temp = [];
        temp.push(
            <div>
                <div>
                    <PersonalInfo personal_data={empl_data} />
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



    function showServiceSalaryInfo(e){
        e.preventDefault();
        const temp = [];
        temp.push(
            <div>
                <div>
                    <ServiceInfo service_data={empl_data} />
                </div>

                <div>
                    <SalaryInfo salary_data={empl_data} />
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
                    <LoanInfo loan_data={empl_data} />
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
                        পূর্বরুপ
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
                <PreviewApplication />
            </div>

            {/* {login_display} */}
            
        
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