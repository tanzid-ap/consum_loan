import React, {useState} from 'react';
import "../css/basicInfo.css";
import imgfile from "../assets/uploadImg.png"
import DataField from "./dataField";
import DataCheckBoxField from './dataCheckBoxField';


function BasicInfo(){

    const [proPicFile, setProPicFile] = useState(imgfile);


    

    function handleChange(e) {
        setProPicFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div>
            <div>
                <div className="basicField">

                <div className='profilePicture'>
                    <div className='profileImg'>
                        <img className='proImgFile' src={proPicFile} />
                        <span className='profilePictureText'>আবেদনকারীর ছবি</span>
                        <input className='profileImgFile' type="file"  onChange={handleChange} />
                    </div>
                </div>

                <DataField 
                    id="applicantName" 
                    dataType="text"
                    validData="আপনার পূর্ণনাম লিখুন" 
                    label="১. আবেদনকারীর নাম* : " 
                    placeholder="যেমন: আবু হাশেম মোহাম্মদ"
                />

                <DataField 
                    id="designation" 
                    dataType="text"
                    validData="আপনার পদবী লিখুন" 
                    label="২. পদবী* : " 
                    placeholder="যেমন: প্রভাষক"
                />

                <DataField 
                    id="officeDepartment" 
                    dataType="text"
                    validData="আপনার অফিস/বিভাগ লিখুন" 
                    label="৩. অফিস/বিভাগ* : " 
                    placeholder="যেমন: রসায়ন"
                />

                <DataField 
                    id="accountNo" 
                    dataType="text"
                    validData="আপনার সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর লিখুন" 
                    label="৪. সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর* : " 
                    placeholder="যেমন: ৪৪০৪০********"
                />

                <DataCheckBoxField
                    id="loanType"
                    label="৫. যে ঋণের জন্যে আবেদন করা হয়েছে* : "
                    items={["মোটরযান ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয় ঋণ",
                        "ভোগ্যপণ্য ঋণ",
                        "ল্যাপটপ ঋণ",
                        "সোনালী ব্যাংকের গৃহ ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয় ঋণ",
                        "সোনালী ব্যাংকের পারসোনাল/অন্যান্য (Any Purpose) ঋণ"
                    ]}
                />

                <DataField 
                    id="loanAmount" 
                    dataType="text"
                    validData="আবেদনকৃত ঋণের পরিমাণ লিখুন" 
                    label="৬. আবেদনকৃত ঋণের পরিমাণ* : " 
                    placeholder="যেমন: ১০০০০০"
                />


                <DataField 
                    id="reasonForLoan" 
                    dataType="text"
                    validData="আবেদনকৃত ঋণ গ্রহণের কারণ লিখুন" 
                    label="৭. আবেদনকৃত ঋণ গ্রহণের কারণ* : " 
                    placeholder="যেমন: ভোগ্যপণ্য"
                />

            </div>

            </div>
            
        </div>
    )

}


export default BasicInfo;




/*


const default_display = []

    default_display.push(
        <div>
            <div>
                <BasicInfo/>
            </div>

            <div className='singleButton'>
                <button className='normalButton' onClick={basicInfoHandle} >
                    পরবর্তী
                </button>
            </div>
        </div>
        
    );

    const [display, setDisplay] = useState(default_display)

    function basicInfoHandle(){

        
        setDisplay(
            

        )
    }



    display = [];
        display.push(
            <div>
                <div>
                    <PersonalInfo/>
                </div>
    
                <div className='doubleButton'>
                    <button className='normalButton' >
                        পূর্ববর্তী
                    </button>
                    <div className='buttonMargin'></div>
                    <button className='normalButton' >
                        পরবর্তী
                    </button>
                </div>
            </div>
        );
        console.log("Button is clicked");





*/


