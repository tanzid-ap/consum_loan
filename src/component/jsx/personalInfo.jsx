import React, {useState} from 'react';
import "../css/personalInfo.css";
import PiDataField from './piDataField';


function PersonalInfo(){

    const [presentAddressValue, setPresentAddressValue] = useState("");
    const [permanantAddressValue, setPermanantAddressValue] = useState("");

    function presentAddressValueHandle(e){
        e.preventDefault();
        setPresentAddressValue("");
    }

    function permanantAddressValueHandle(e){
        e.preventDefault();
        setPermanantAddressValue("");
    }

    return(

        <div>
            <div className="personalInfo">
                <div className="personalInfoLabel">
                    ৮. ব্যক্তিগত তথ্যাবলী : 
                </div>


                <PiDataField 
                    id="piFatherName" 
                    dataType="text"
                    validData="আপনার পিতা/স্বামীর নাম লিখুন" 
                    label="ক) পিতা/স্বামীর নাম : " 
                    placeholder="যেমন: আবুল হাশেম"
                />

                <PiDataField 
                    id="piMotherName" 
                    dataType="text"
                    validData="আপনার মাতার নাম লিখুন" 
                    label="খ) মাতার নাম : " 
                    placeholder="যেমন: আনোয়ারা বেগম"
                />

                <PiDataField 
                    id="piNomineeName" 
                    dataType="text"
                    validData="আপনার নমিনীর নাম লিখুন" 
                    label="গ) নমিনীর নাম : " 
                    placeholder="যেমন: তাহমিদ আহমেদ"
                />

                <PiDataField
                    id="piNomineeRelation" 
                    dataType="text"
                    validData="আপনার সাথে নমিনীর সম্পর্ক লিখুন" 
                    label="ঘ) আপনার সাথে নমিনীর সম্পর্ক : " 
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
                    placeholder="যেমন: ৩০/০৮/১৯৮০"
                />


                <PiDataField
                    id="piNID" 
                    dataType="text"
                    validData="আপনার জাতীয় পরিচয়পত্র নম্বর লিখুন" 
                    label="জ) আবেদনকারীর জাতীয় পরিচয়পত্র নম্বর : " 
                    placeholder="যেমন: ১২৩৪৫৬৭৮৯০"
                />



                <PiDataField
                    id="piNomineeNID" 
                    dataType="text"
                    validData="নমিনীর জাতীয় পরিচয়পত্র নম্বর লিখুন" 
                    label="ঝ) নমিনীর জাতীয় পরিচয়পত্র নম্বর : " 
                    placeholder="যেমন: ১৯৯৩৫৪৬৮৩৮৬৫২৩৪৫৭"
                />

                
            </div>
        </div>
    )

}


export default PersonalInfo