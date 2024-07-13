import React, { useState } from 'react';
import "../css/login.css";
import emp_data from "../employee_file.json"

function Login(props){


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
                props.onAuthenticate(true, emp_data[i]);
                break;
            }
        }

        if(!data_found){
            const temp = [];
            temp.push(
                <div className="login_text_area">
                    <div className='login_error_Text'>
                        Invalid BUET ID and/or password <br/> Try Again!!!
                    </div>
                </div>
            );
            setError_Display(temp);
        }

        


    }

    
    return (
        <div className="login">
            <div className='login-item login_label' >Login</div>
            <div className='login-item login_form'>
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
    );
}

export default Login;