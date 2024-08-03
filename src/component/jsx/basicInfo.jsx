import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router';
import "../css/basicInfo.css";
import imgfile from "../assets/uploadImg.png"
import DataField from "../jsx_component/dataField";
import DataCheckBoxField from '../jsx_component/dataCheckBoxField';
import Logo from '../jsx_component/logo';


function BasicInfo(){

    const basicNavigate = useNavigate();
    const { state } = useLocation();
    var basic_data = state;

    // console.log(basic_data);



    const [proPicFile, setProPicFile] = useState(imgfile);
    const [proPicFileError, setProPicFileError] = useState([]);


    const [loanType, setLoanType] = useState("");
    const [loanTypeError, setLoanTypeError] = useState("");

    function handleChange(e) {
        setProPicFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleInputChange(event){
        const name = event.target.name;
        if (name === "buetId"){
            setBuetId(event.target.value);
        }
        if (name === "dob"){
            setDob(event.target.value);
        }
    }


    function validBasicInfo(){
        if(proPicFile === imgfile){
            const tem = [];
            tem.push(
                <span className='profilePictureErrorText'>আবেদনকারীর ছবি দিন***</span>
            );
            setProPicFileError(tem);
            return false;
        }else{
            setProPicFileError([]);
        }

        if(loanType === ""){
            setLoanTypeError("আবেদনকৃত ঋণের ধরণ নির্বাচন করুন***");
            return false;
        }else{
            setLoanTypeError("");
        }

        return true;
    }


    function onBasicAuthenticate(e){
        e.preventDefault();

        if(validBasicInfo()){
            basicNavigate("/application/2", {state : basic_data})
        }

    }

    return(
        <div>
            <div className="basic_logo">
                <Logo />
            </div>
            <div className="basicField">

                <div className='profileImg'>
                    <img className='proImgFile' src={proPicFile} />
                    <span className='profilePictureText'>আবেদনকারীর ছবি*</span>
                    {proPicFileError}
                    <input className='profileImgFile' type="file"  onChange={handleChange} />
                </div>

                <DataField 
                    id="applicantName" 
                    dataType="text"
                    validData="" 
                    label="১. আবেদনকারীর নাম* : " 
                    value={basic_data["EMPLOYEE_NAME"]}
                    placeholder="যেমন: আবু হাশেম মোহাম্মদ"
                />

                <DataField 
                    id="designation" 
                    dataType="text"
                    validData="" 
                    label="২. পদবী* : " 
                    value={basic_data["DESIGNATION"]}
                    placeholder="যেমন: প্রভাষক"
                />

                <DataField 
                    id="officeDepartment" 
                    dataType="text"
                    validData="" 
                    label="৩. অফিস/বিভাগ* : " 
                    value={basic_data["OFFICE"]}
                    placeholder="যেমন: রসায়ন"
                />

                <DataField 
                    id="accountNo" 
                    dataType="text"
                    validData="" 
                    label="৪. সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর* : " 
                    value={"44040"+basic_data["BANK_ACCOUNT_NO"]}
                    placeholder="যেমন: ৪৪০৪০********"
                />

                <DataCheckBoxField
                    id="loanType"
                    label="৫. যে ঋণের জন্যে আবেদন করা হয়েছে* : "
                    items={[["মোটরযান ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয় ঋণ",
                        "ভোগ্যপণ্য ঋণ",
                        "ল্যাপটপ ঋণ",
                        "সোনালী ব্যাংকের গৃহ ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয় ঋণ",
                        "সোনালী ব্যাংকের পারসোনাল/অন্যান্য (Any Purpose) ঋণ"
                    ],["House Building Loan", "Consumer Loan", "Laptop Loan", "Sonali House Building Loan", "Sonali Any Purpose Loan"]]}
                    value={(data) => {setLoanType(data)}}
                    validData={loanTypeError}
                    
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

                <div className='bisingleButton'>
                    <button className='binormalButton' onClick={onBasicAuthenticate}>
                        পরবর্তী
                    </button>
                </div>



            </div>

            
        </div>
    )

}


export default BasicInfo;



