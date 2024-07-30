import React, { useState } from 'react';
import "../css/lastPageInfo.css";
import signImg from "../assets/uploadImg.png"
import Logo from '../jsx_component/logo';
import DoubleButton from '../jsx_component/doubleButton';


function LastPageInfo(props){

    const [signFile, setSignFile] = useState(signImg);


    function handleSignChange(e) {
        setSignFile(URL.createObjectURL(e.target.files[0]));
    }


    function validLastInfo(){


        return true;
    }

    function onLastAuthenticate(button){

        if(button == "first")
            props.onLastValidate(true, false);

        if(button == "second"){
            props.onLastValidate(false, validLastInfo());
        }

    }

    return(
        <div>
            <div className="loan_logo">
                <Logo />
            </div>

            <div className='lastPage'>

{/* 
                <div className="lastPageInfo">

                    <div className="lastPageInfoLabel">
                        ১২. বিশ্ববিদ্যালয় হইতে আনুমানিক প্রাপ্য (কম্পট্রোলার অফিস পূরণ করবে) : 
                    </div>

                    <div className='lastPageTable'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><div className='tableText' >ক) পেনশন বাবদ (এককালীন পেনশন)</div></td>
                                    <td><input className='tableDataInput' type='text' name="pension" /></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td><input className='tableDataInput' type='text' name="pension" /></td>
                                    <td><input className='tableDataInput' type='text' name="pension" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
*/}


                <div className='commitText'>
                    <div className='commitRealText'>
                        এই মর্মে নিশ্চয়তা দিচ্ছি যে, উপরোক্ত তথ্যাদি সম্পূর্ণ সত্য ও সঠিক এবং নিয়মানুযায়ী গৃহীত ঋণের কিস্তি পরিশোধে বাধ্য থাকিব।
                        অন্যথায় কর্তৃপক্ষ কর্তৃক নির্ধারিত দায়ভার বহন করিতে আপত্তি নেই। ঋণ গ্রহণের পরে যদি কোনো তথ্য বা প্রদত্ত দলিলাদি সঠিক 
                        নয় বলে প্রমাণিত হয় তবে সেক্ষেত্রে বিশ্ববিদ্যালয়ের যেকোনো সিদ্ধান্ত বিনা আপত্তিতে মেনে নিতে বাধ্য থাকিব। 
                    </div>
                </div>

                <div className='signature'>
                    <div className='signPic'>
                        <img className='signImg' src={signFile} />
                        <div className='signPictureText'>আবেদনকারীর স্বাক্ষর <br/> তারিখ সহ</div>
                        <input className='signImgFile' type="file"  onChange={handleSignChange} />
                    </div>
                </div>

                <DoubleButton 
                    firstButtonName="পূর্ববর্তী"
                    secondButtonName="পূর্বরুপ"
                    clickedButton={(clicked) => {onLastAuthenticate(clicked)}}
                />



{/* 
                <div className='condition'>
                    <div className='conditionText'>
                        প্রযোজ্য ক্ষেত্রে টিক দিয়ে স্বাক্ষর করুন।
                    </div>
                    <div className='lpDataBox'>
                        <div className="lpDataCheckBox">
                            <input className="lpDataCheckBoxInput" type='checkbox' name="signFor" value="opt1" />
                            <span className="lpDataCheckBoxValue">
                                ভোগ্যপণ্য ঋণ, মোটরযান ক্রয় গৃহ নির্মাণ মেরামত জমি ক্রয় ও সোনালী ব্যাংক হোলসেল ঋণের আওতায় প্রদত্ত 
                                পারসোনাল বা অন্যান্য বা এনি পারপোস লোন এবং গৃহ নির্মাণ ঋণ, গৃহ ক্রয়, নির্মাণ, মেরামত, জমি ক্রয় ঋণ 
                                প্রাপ্যতা যাচাই সাপেক্ষে প্রদানের সুপারিশ করা হল।
                            </span>
                        </div>

                        <div className="lpDataCheckBox">
                            <input className="lpDataCheckBoxInput" type='checkbox' name="signFor" value="opt2" />
                            <span className="lpDataCheckBoxValue">
                                আবেদনকারী সরাসরি শিক্ষা কার্যক্রমে ল্যাপটপ ব্যবহার করেন বলে প্রত্যয়ন করা হল এবং প্রাপ্যতা যাচাই সাপেক্ষে
                                প্রদানের সুপারিশ করা হল।
                            </span>
                        </div>
                    </div>
                </div>
*/}
            </div>
        </div>
    )
}

export default LastPageInfo
