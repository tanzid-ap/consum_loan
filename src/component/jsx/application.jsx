import React, {useState} from 'react';
import "../css/application.css";
import Logo from "../jsx_component/logo";

import emp_data from "../employee_file.json"

import DoubleButton from '../jsx_component/doubleButton';


import Login from './login';
import BasicInfo from './basicInfo';
import PersonalInfo from './personalInfo';
import SalServInfo from './salServInfo';
import LoanInfo from './loanInfo';
import LastPageInfo from './lastPageInfo';
import PreviewApplication from './previewApplication';



function Application(){

    var alldata = {};
    var empl_data = [];

    const login_default_display = [];
    
    login_default_display.push(
        <Login onAuthenticate={(temp_value, temp_data) => {afterLogin(temp_value, temp_data);}  }/>

    );

    

    const [display, setDisplay] = useState([]);

    const [login_display,setLogin_display] = useState(login_default_display);

    const [preview_display,setPreview_display] = useState([]);


    function showLoginDisplay(val){
        if(val){
            setPreview_display([]);
            setLogin_display(login_default_display);
        }
        
    }

    function afterLogin(value, e_data){

        empl_data = e_data;
    
        if(value){
            setLogin_display([]);
            showBasicInfo(value);
        }
    }


    function showBasicInfo(val){
        if(val){
            const temp = [];
            temp.push(
                <BasicInfo 
                    basic_data={empl_data}
                    onBasicValidate={ (valNext) => {showPersonalInfo(valNext);} }
                />
                
            );
            setPreview_display([])
            setDisplay(temp);
        }
    }



    function showPersonalInfo(val){
        if(val){
            const temp = [];
            temp.push(
                <PersonalInfo 
                    personal_data={empl_data} 
                    onPersonalValidate={ (valPrev, valNext) => 
                        {showBasicInfo(valPrev); 
                        showServiceSalaryInfo(valNext);} }
                />
            );

            setDisplay(temp);
        }

    }



    function showServiceSalaryInfo(val){
        if(val){
            const temp = [];
            temp.push(
                <SalServInfo 
                    salServ_data={empl_data} 
                    onServSalValidate={ (valPrev, valNext) => 
                        {showPersonalInfo(valPrev); 
                        showLoanInfo(valNext);} }
                />
            );

            setDisplay(temp);
        }

        
    }


    function showLoanInfo(val){
        if(val){
            const temp = [];
            temp.push(
                <LoanInfo 
                    loan_data={empl_data}
                    onLoanValidate={ (valPrev, valNext) => 
                        {showServiceSalaryInfo(valPrev); 
                        showLastPageInfo(valNext);} }

                />
            );

            setDisplay(temp);
        }
        
    }



    function showLastPageInfo(val){
        if(val){
            const temp = [];
            temp.push(
                <LastPageInfo
                    onLastValidate={ (valPrev, valNext) => 
                        {showLoanInfo(valPrev); 
                        showPreview(valNext);} }

                /> 
            );

            setDisplay(temp);
        }
        
    }


    function showPreview(val){
        if(val){
            const temp = [];
            temp.push(
                    <PreviewApplication
                        onEdit={ (valPrev, valNext) => 
                            {showBasicInfo(valPrev); 
                            showLoginDisplay(valNext);} }
                    />
            );

            setDisplay([]);
            setPreview_display(temp);
        }
        
    }




    

    return(
        <div className="body">

            {login_display}

            <form>
                {display}
            </form>

            {preview_display}

        </div>
    );
}

export default Application;