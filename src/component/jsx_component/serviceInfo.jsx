import React, {useState} from 'react';
import "../css_component/serviceInfo.css";

import PiDataField from './piDataField';

function ServiceInfo(props){

    var service_data = props.service_data;

    var serv_type = false;
    if(service_data["APPOINTMENT_TYPE"] === "Permanent"){
        serv_type = true;
    }

    const [servCheckBox, setServCheckBox] = useState([serv_type, !serv_type]);
    const default_servCheckBox = [serv_type, !serv_type];
    
    const now = new Date();
    const first_join_date = new Date(service_data["DATE_FIRST_JOIN"]);

    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    var first_join_dateYear = first_join_date.getFullYear();
    var first_join_dateMonth = first_join_date.getMonth();
    var first_join_dateDate = first_join_date.getDate();

    var yearDuration = currentYear - first_join_dateYear;
	var monthDuration = 0;
    var dateDuration = 0;

    if(currentMonth >= first_join_dateMonth)
        monthDuration = currentMonth - first_join_dateMonth;
    else{
        yearDuration--;
        monthDuration = 12 + currentMonth - first_join_dateMonth;
    }

    if(currentDate >= first_join_dateDate)
        dateDuration = currentDate - first_join_dateDate;
    else{
        monthDuration--;
        dateDuration = 31 + currentDate - first_join_dateDate;
        if(monthDuration < 0){
            monthDuration = 11;
            yearDuration--;
        }
    }


    var birth_date = new Date(service_data["DATE_OF_BIRTH"]);

    var dobYear = birth_date.getFullYear();

    if(service_data["TEACHERORNOT"]=="1"){
        dobYear += 65; 
    }else{
        dobYear += 60; 
    }

    birth_date.setFullYear(dobYear);
    var date_of_birth = birth_date.toLocaleDateString().split("/").reverse().join("-");


    function servCheckBoxHandle(e){
        const {name} = e.target;
        var tempServBox = [...servCheckBox];
        var tempServ = tempServBox[name];
        if(!tempServ){
            tempServBox = [...default_servCheckBox];
            tempServBox[name] = !tempServ;
        }else{
            tempServBox[name] = !tempServ;
        }
        setServCheckBox(tempServBox);
    }

    var servData = {};
    servData["IDNO"] = service_data["IDNO"];
    servData["SERV_TYPE"] = serv_type;
    servData["DATE_FIRST_JOIN"] = service_data["DATE_FIRST_JOIN"];
    servData["SERV_PERIOD"] = yearDuration+" years, "+monthDuration+" months, "+dateDuration+" days";
    servData["TIME_OF_RETIREMENT"] = date_of_birth;

    props.setServData(servData);


    return(

        <div className="serviceInfo">
            <div className="serviceInfoLabel">
                ৯. আবেদনকারীর চাকুরী সংক্রান্ত তথ্যাবলী : 
            </div>

            <div className="serviceField">

                <PiDataField
                    id="buetIdNo" 
                    dataType="text"
                    validData="" 
                    label="ক) বুয়েট আই.ডি. নং : " 
                    value={servData["IDNO"]}
                    placeholder="যেমন: T201614032"
                />

                <div className="siDataCheckBoxField" data-validate="">
                    <div className="siDataCheckBoxLabel">
                        খ) বিশ্ববিদ্যালয়ের চাকুরী : 
                    </div>

                    <div className='siCheckBox'>
                        <div className="siDataCheckBox">
                            <input className="siDataCheckBoxInput" type="checkbox" onChange={servCheckBoxHandle} checked={servCheckBox[0]}  name={0} value="স্থায়ী" />
                            <span className="siDataCheckBoxValue">স্থায়ী</span>
                        </div>

                        <div className="siDataCheckBox">
                            <input className="siDataCheckBoxInput" type="checkbox" onChange={servCheckBoxHandle} checked={servCheckBox[1]} name={1} value="অস্থায়ী" />
                            <span className="siDataCheckBoxValue">অস্থায়ী</span>
                        </div>
                    </div>
                    

                </div>


                <PiDataField
                    id="uniJoinDate" 
                    dataType="text"
                    validData="" 
                    label="গ) বিশ্ববিদ্যালয়ে যোগদানের তারিখ : " 
                    value={service_data["DATE_FIRST_JOIN"]}
                    placeholder="যেমন: ২৬/০৫/২০১০"
                />


                <PiDataField
                    id="unSevicePeriod" 
                    dataType="text"
                    validData="" 
                    label="ঘ) এই বিশ্ববিদ্যালয়ে মোট চাকুরীকাল : " 
                    value={ servData["SERV_PERIOD"] }
                    placeholder="যেমন: ১১ বছর ৮ মাস ১৬ দিন"
                
                />

                <PiDataField
                    id="uniRetiredDate" 
                    dataType="text"
                    validData="" 
                    label="ঙ) চাকুরীর বয়স পূর্তির তারিখ (শিক্ষকের বয়স ৬৫ বছর, কর্মকর্তা/কর্মচারীর বয়স ৬০ বছর): " 
                    value={date_of_birth}
                    placeholder="যেমন: ৩০/০৭/২০৫১"
                />



            </div>

            


            





            

            



        </div>
    )
}

export default ServiceInfo