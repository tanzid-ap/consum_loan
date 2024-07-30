import React, {useState} from 'react';
import "../css/personalInfo.css";
import PiDataField from '../jsx_component/piDataField';
import Logo from '../jsx_component/logo';
import DoubleButton from '../jsx_component/doubleButton';

function PersonalInfo(props){

    var personal_data = props.personal_data;

    const [presentAddressValue, setPresentAddressValue] = useState(personal_data["ADDRESS"]);
    const [permanantAddressValue, setPermanantAddressValue] = useState(personal_data["ADDRESS"]);

    function presentAddressValueHandle(e){
        e.preventDefault();
        setPresentAddressValue("");
    }

    function permanantAddressValueHandle(e){
        e.preventDefault();
        setPermanantAddressValue("");
    }


    function validPersonalInfo(){


        return true;
    }

    function onPersonalAuthenticate(button){

        if(button == "first")
            props.onPersonalValidate(true, false);

        if(button == "second"){
            props.onPersonalValidate(false, validPersonalInfo());
        }

    }




    return(

        <div>
            <div className="loan_logo">
                <Logo />
            </div>
            <div className='perInfo'>
                <div className="personalInfo">
                    <div className="personalInfoLabel">
                        ৮. ব্যক্তিগত তথ্যাবলী : 
                    </div>


                    <PiDataField 
                        id="piFatherName" 
                        dataType="text"
                        validData="আপনার পিতা/স্বামীর নাম লিখুন" 
                        label="ক) পিতা/স্বামীর নাম : " 
                        value={personal_data["FATHERS_NAME"]}
                        placeholder="যেমন: আবুল হাশেম"
                    />

                    <PiDataField 
                        id="piMotherName" 
                        dataType="text"
                        validData="আপনার মাতার নাম লিখুন" 
                        label="খ) মাতার নাম : " 
                        value={""}
                        placeholder="যেমন: আনোয়ারা বেগম"
                    />

                    <PiDataField 
                        id="piNomineeName" 
                        dataType="text"
                        validData="আপনার নমিনীর নাম লিখুন" 
                        label="গ) নমিনীর নাম : " 
                        value={""}
                        placeholder="যেমন: তাহমিদ আহমেদ"
                    />

                    <PiDataField
                        id="piNomineeRelation" 
                        dataType="text"
                        validData="আপনার সাথে নমিনীর সম্পর্ক লিখুন" 
                        label="ঘ) আপনার সাথে নমিনীর সম্পর্ক : " 
                        value={""}
                        placeholder="যেমন: ছেলে"
                    />



                    <div className="piDataField" data-validate="আপনার বর্তমান ঠিকানা লিখুন">
                        <span className="piDataLabel">
                            ঙ) বর্তমান ঠিকানা : 
                        </span>

                        <div className='piDataInputField'>
                            <textarea className="piDataInput" name="piPresentAddress" placeholder="যেমন: গ্রাম, ডাক, থানা ও জেলা" 
                            value={presentAddressValue} onChange={(e) => setPresentAddressValue(e.target.value)} />

                            <button className="piDataClearBtn" onClick={presentAddressValueHandle}>×</button>
                        </div>
                        

                    </div>


                    <div className="piDataField" data-validate="আপনার স্থায়ী ঠিকানা লিখুন">
                        <span className="piDataLabel">
                            চ) স্থায়ী ঠিকানা : 
                        </span>


                        <div className='piDataInputField'>
                            <textarea className="piDataInput" name="piPermanantAddress" placeholder="যেমন: গ্রাম, ডাক, থানা ও জেলা" 
                            value={permanantAddressValue} onChange={(e) => setPermanantAddressValue(e.target.value)} />

                            <button className="piDataClearBtn" onClick={permanantAddressValueHandle}>×</button>
                        </div>

                    </div>



                    <PiDataField
                        id="piDOB" 
                        dataType="date"
                        validData="আপনার জন্ম তারিখ লিখুন" 
                        label="ছ) জন্ম তারিখ : " 
                        value={personal_data["DATE_OF_BIRTH"]}
                        placeholder="যেমন: ৩০/০৮/১৯৮০"
                    />


                    <PiDataField
                        id="piNID" 
                        dataType="text"
                        validData="আপনার জাতীয় পরিচয়পত্র নম্বর লিখুন" 
                        label="জ) আবেদনকারীর জাতীয় পরিচয়পত্র নম্বর : " 
                        value={personal_data["NID_NO"]}
                        placeholder="যেমন: ১২৩৪৫৬৭৮৯০"
                    />



                    <PiDataField
                        id="piNomineeNID" 
                        dataType="text"
                        validData="নমিনীর জাতীয় পরিচয়পত্র নম্বর লিখুন" 
                        label="ঝ) নমিনীর জাতীয় পরিচয়পত্র নম্বর : " 
                        value={""}
                        placeholder="যেমন: ১৯৯৩৫৪৬৮৩৮৬৫২৩৪৫৭"
                    />

                    
                </div>

                <DoubleButton 
                    firstButtonName="পূর্ববর্তী"
                    secondButtonName="পরবর্তী"
                    clickedButton={(clicked) => {onPersonalAuthenticate(clicked)}}
                />

            </div>

           
        </div>
    )

}


export default PersonalInfo