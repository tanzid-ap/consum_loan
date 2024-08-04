import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router';
import "../css/salServInfo.css";
import Logo from "../jsx_component/logo";

import ServiceInfo from '../jsx_component/serviceInfo';
import SalaryInfo from '../jsx_component/salaryInfo';
import DoubleButton from '../jsx_component/doubleButton';

function SalServInfo(){

    const salServNavigate = useNavigate();
    const { state } = useLocation();

    const [servData, setServData] = useState([]);


    function validSalServInfo(){

        return true;
    }

    function onSalServAuthenticate(button){

        if(button == "first")
            salServNavigate('/application/2', {state: state});

        if(button == "second"){
            if(validSalServInfo()){
                salServNavigate('/application/4', {state: state});
            }
        }

    }


    return(
        <div>
            <div className="salServ_logo">
                <Logo />
            </div>

            <div className='salServ_info'>

                <ServiceInfo service_data={state["info"] } />

                <SalaryInfo salary_data={state["info"]} />

                <DoubleButton 
                    firstButtonName="পূর্ববর্তী"
                    secondButtonName="পরবর্তী"
                    clickedButton={(clicked) => {onSalServAuthenticate(clicked)}}
                />

            </div>
        </div>
            
    );


}

export default SalServInfo;