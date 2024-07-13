import React, {useState} from 'react';
import "../css/serviceInfo.css";

import PiDataField from './piDataField';

function ServiceInfo(props){

    var service_data = props.service_data;

    var serv_type = false;
    if(service_data["APPOINTMENT_TYPE"] === "Permanent"){
        serv_type = true;
    }

    const [servCheckBox, setServCheckBox] = useState([serv_type, !serv_type]);
    const default_servCheckBox = [serv_type, !serv_type];


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


    return(
        <div>
            <div className="serviceInfo">
                <div className="serviceInfoLabel">
                    ৯. আবেদনকারীর চাকুরী সংক্রান্ত তথ্যাবলী : 
                </div>

                <div className="serviceField">

                    <PiDataField
                        id="buetIdNo" 
                        dataType="text"
                        validData="আপনার বুয়েট আই.ডি. নং লিখুন" 
                        label="ক) বুয়েট আই.ডি. নং : " 
                        value={service_data["IDNO"]}
                        placeholder="যেমন: T201614032"
                    
                    />

                    <div>
                        <div className="siDataCheckBoxField" data-validate="">
                            <div className="siDataCheckBoxLabel">
                            খ) বিশ্ববিদ্যালয়ের চাকুরী : 
                            </div>


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
                        dataType="date"
                        validData="আপনার বিশ্ববিদ্যালয়ে যোগদানের তারিখ লিখুন" 
                        label="গ) বিশ্ববিদ্যালয়ে যোগদানের তারিখ : " 
                        value={service_data["DATE_FIRST_JOIN"]}
                        placeholder="যেমন: ২৬/০৫/২০১০"
                    
                    />


                    <PiDataField
                        id="unSevicePeriod" 
                        dataType="text"
                        validData="আপনি এই বিশ্ববিদ্যালয়ে মোট কতকাল চাকুরী করেছেন" 
                        label="ঘ) এই বিশ্ববিদ্যালয়ে মোট চাকুরীকাল : " 
                        value={""}
                        placeholder="যেমন: ১১ বছর ৮ মাস ১৬ দিন"
                    
                    />

                    <PiDataField
                        id="uniRetiredDate" 
                        dataType="Date"
                        validData=" " 
                        label="ঙ) চাকুরীর বয়স পূর্তির তারিখ (শিক্ষকের বয়স ৬৫ বছর, কর্মকর্তা/কর্মচারীর বয়স ৬০ বছর): " 
                        placeholder="যেমন: ৩০/০৭/২০৫১"
                    
                    />



                </div>

                


                





                

                



            </div>
        </div>
    )
}

export default ServiceInfo