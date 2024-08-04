import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "../css/login.css";
import emp_data from "../employee_file.json";
import Logo from '../jsx_component/logo';



function Login(){


    const [err_text_color, setErr_text_color] = useState(true);

    const loginNavigate = useNavigate();


    const [buetId, setBuetId] = useState("");
    const [dob, setDob] = useState("");
    const [error_display,setError_Display] = useState([]);

    function handleInputChange(event){
        const name = event.target.name;
        if (name === "buetId"){
            setBuetId(event.target.value);
        }
        if (name === "dob"){
            setDob(event.target.value);
        }
    }

    function authenticate(e){
        e.preventDefault();

        const emp_data_length = emp_data.length;

        var data_found = false;

        for(let i=0;i<emp_data_length;i++){
            if (buetId === emp_data[i]["IDNO"] && dob === emp_data[i]["DATE_OF_BIRTH"]) {
                data_found = true;
                loginNavigate('/application/1', { state: {info: emp_data[i], used: "no"} });
                break;
            }
        }



        if(!data_found){
            setErr_text_color(!err_text_color);
            var e_t_c = "red";
            if(err_text_color) e_t_c = "black";

            const temp = [];
            temp.push(
                <div className="login_text_area">
                    <div className='login_error_Text' style={{ color: e_t_c }}>
                        Invalid BUET ID and/or password <br/> Try Again!!!
                    </div>
                </div>
            );
            setError_Display(temp);
        }

        


    }

    
    return (
        <div className='login_body'>
            <div className="login_logo">
                <Logo />
            </div>
            <div>
                <div className="login">
                    <div className='login_label' >Login</div>
                    <div className='login_form'>
                        <form >
                            <div className='login_form_items' >
                                <div className="login_text_area">
                                    <input
                                        type="text"
                                        id="buetId"
                                        name="buetId"
                                        placeholder="BUET ID"
                                        className="login_text_input"
                                        onChange={handleInputChange} 

                                    />
                                </div>
                                <div className="login_text_area">
                                
                                    <input
                                        type="text"
                                        id="dob"
                                        name="dob"
                                        placeholder="DOB"
                                        onFocus={(e) => (e.target.type = "date")}
                                        className="login_text_input"
                                        min="1900-01-01" max="2025-01-01"
                                        onChange={handleInputChange} 
                                        
                                    />
                                </div>

                                <div className="login_text_area">
                                    <button className="login_btn" onClick={authenticate}>
                                        LOGIN
                                    </button>
                                </div>

                                {error_display}

                                
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
            

        </div>
        
    );
}

export default Login;