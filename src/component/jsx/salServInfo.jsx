import React, {useState} from 'react';
import "../css/salServInfo.css";
import Logo from "../jsx_component/logo";

import ServiceInfo from '../jsx_component/serviceInfo';
import SalaryInfo from '../jsx_component/salaryInfo';
import DoubleButton from '../jsx_component/doubleButton';

function SalServInfo(props){


    function validSalServInfo(){


        return true;
    }

    function onSalServAuthenticate(button){

        if(button == "first")
            props.onServSalValidate(true, false);

        if(button == "second"){
            props.onServSalValidate(false, validSalServInfo());
        }

    }


    return(
        <div>
            <div className="salServ_logo">
                <Logo />
            </div>

            <div className='salServ_info'>

                <ServiceInfo service_data={props.salServ_data} />

                <SalaryInfo salary_data={props.salServ_data} />

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