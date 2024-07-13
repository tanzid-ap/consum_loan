import React, {useState} from 'react';
import "../css/basicInfo.css";
import imgfile from "../assets/uploadImg.png"
import DataField from "./dataField";
import DataCheckBoxField from './dataCheckBoxField';


function BasicInfo(props){

    const [proPicFile, setProPicFile] = useState(imgfile);

    var basic_data = props.basic_data;
    

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
                    value={basic_data["EMPLOYEE_NAME"]}
                    placeholder="যেমন: আবু হাশেম মোহাম্মদ"
                />

                <DataField 
                    id="designation" 
                    dataType="text"
                    validData="আপনার পদবী লিখুন" 
                    label="২. পদবী* : " 
                    value={basic_data["DESIGNATION"]}
                    placeholder="যেমন: প্রভাষক"
                />

                <DataField 
                    id="officeDepartment" 
                    dataType="text"
                    validData="আপনার অফিস/বিভাগ লিখুন" 
                    label="৩. অফিস/বিভাগ* : " 
                    value={basic_data["OFFICE"]}
                    placeholder="যেমন: রসায়ন"
                />

                <DataField 
                    id="accountNo" 
                    dataType="text"
                    validData="আপনার সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর লিখুন" 
                    label="৪. সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর* : " 
                    value={"44040"+basic_data["BANK_ACCOUNT_NO"]}
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
                    value={""}
                    placeholder="যেমন: ১০০০০০"
                />


                <DataField 
                    id="reasonForLoan" 
                    dataType="text"
                    validData="আবেদনকৃত ঋণ গ্রহণের কারণ লিখুন" 
                    label="৭. আবেদনকৃত ঋণ গ্রহণের কারণ* : " 
                    value={""}
                    placeholder="যেমন: ভোগ্যপণ্য"
                />

            </div>

            </div>
            
        </div>
    )

}


export default BasicInfo;



