import React, {useRef} from "react";
import { useNavigate, useLocation } from 'react-router';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/previewApplication.css";

import Logo from "../jsx_component/logo";
import PreviewText from "../jsx_component/previewText";
import Photo from "../assets/Pro_pic.jpg"
import Sign from "../assets/Sign_pic.jpg"



function PreviewApplication(props){

    const previewNavigate = useNavigate();
    const { state } = useLocation();


    const pdfRef = useRef();

    const preAppPhoto = Photo;
    const preAppApplicantName = "K.M. ASHRAFUZZAMAN";
    const preAppDesignation = "ASSTT. DIRECTOR";
    const preAppOfficeDept = "DSW";
    const preAppAccountNo = "4404034282813";
    const preAppLoanType = "Comsumer Loan";
    const preAppLoanAmnt = "2300000";
    const preAppLoanReas = "Comsumer Product";

    const preAppPersoInfo = [["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ"],
                            ["পিতা/স্বামীর নাম", "মাতার নাম", "নমিনীর নাম", "আপনার সাথে নমিনীর সম্পর্ক", "বর্তমান ঠিকানা",
                                 "স্থায়ী ঠিকানা", "জন্ম তারিখ", "আবেদনকারীর জাতীয় পরিচয়পত্র নম্বর", "নমিনীর জাতীয় পরিচয়পত্র নম্বর"],
                            ["MD.MOHSHIN KHAN", "MRS. NASRIN AKHTER", "KAZI SHARIFUL ISLAM", "D-77/6, THANA ROAD TALBAGH, SAVAR,DHAKA.", "VILL.- UTTAR MEDINIMONDAL, P.S- LOHAJONJ, DIST.- MUNSHIGANJ.",
                                "VILL.- UTTAR MEDINIMONDAL, P.S- LOHAJONJ, DIST.- MUNSHIGANJ.", "1965-06-10", "4619769864", "19907213813000100"]
                            ];


    const preAppServInfo = [["ক", "খ", "গ", "ঘ", "ঙ"],
                            ["বুয়েট আই.ডি. নং", "বিশ্ববিদ্যালয়ের চাকুরী", "বিশ্ববিদ্যালয়ে যোগদানের তারিখ", "এই বিশ্ববিদ্যালয়ে মোট চাকুরীকাল", "চাকুরীর বয়স পূর্তির তারিখ (শিক্ষকের বয়স ৬৫ বছর, কর্মকর্তা/কর্মচারীর বয়স ৬০ বছর)"],
                            ["T201614032", "স্থায়ী", "2010-05-06", "11 years 8 months 16 days", "2010-05-06"]
                            ];

    const preAppSalInfo = [[" ","ক", "খ", "গ", "ঘ"],
                            ["মাস", "মূল বেতন","মোট বেতন", "মোট কর্তন", "নীট বেতন"],
                            ["Jun 2024", "57870", "92199", "21702", "70497"],
                            ["May 2024", "57870", "92199", "21716", "70483"],
                            ["Apr 2024", "57870", "92199", "20978", "71221"],
                            ];

    const preAppLoanInfo = [["ক্রমিক নং", "০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮"],
                            ["ঋণের নাম", "মোটরযান ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয়", "ভোগ্যপণ্য ঋণ", "ল্যাপটপ ঋণ", "সোনালী ব্যাংকের হোলসেল ঋণের আওতায় প্রদত্ত পারসোনাল বা অন্যান্য বা এনি পারপোস লোন", "সোনালী ব্যাংকের হোলসেল ঋণের আওতায় প্রদত্ত গৃহ নির্মাণ ঋণ, গৃহ ক্রয়, নির্মাণ, মেরামত, জমি ক্রয় ঋণ", "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়ের শিক্ষক/কর্মচারীদের ব্যাংকিং ব্যবস্থার মাধ্যমে গৃহীত গৃহ নির্মাণ ঋণ", "অন্যান্য", "সমষ্টি"],
                            ["ঋণের পরিমাণ", "57870", "92199", "21702", "0", "0", "0", "0", "0", "0", "0", "0"],
                            ["কিস্তির পরিমাণ", "57870", "92199", "21716", "0", "0", "0", "0", "0", "0", "0", "0"],
                            ["মোট কিস্তির সংখ্যা", "57870", "92199", "20978", "0", "0", "0", "0", "0", "0", "0", "0"],
                            ["পরিশোধিত কিস্তির সংখ্যা", "57870", "92199", "21716", "0", "0", "0", "0", "0", "0", "0", "0"],
                            ["অপরিশোধিত ঋণের পরিমাণ (সুদ সহ)", "57870", "92199", "20978", "0", "0", "0", "0", "0", "0", "0", "0"]
                            ];
    
    
    const preAppLastInfo = [["ক", "খ"],
                            ["পেনশন বাবদ (এককালীন পেনশন)", " "],
                            [" ", " "]
                            ];

    
    const preAppSign = Sign;
            
    const persoTable = [];

    for(let i=0;i<8;i++){
        persoTable.push(
            <tbody>
                <tr>
                    <th className='tableIndexCol'>{preAppPersoInfo[0][i]}</th>
                    <th className='tableLabelCol'>{preAppPersoInfo[1][i]}</th>
                    <th className='tableValueCol'>{preAppPersoInfo[2][i]}</th>
                </tr>
            </tbody>
        );
    }


    const servTable = [];

    for(let i=0;i<5;i++){
        servTable.push(
            <tbody>
                <tr>
                    <th className='tableIndexCol'>{preAppServInfo[0][i]}</th>
                    <th className='tableLabelCol'>{preAppServInfo[1][i]}</th>
                    <th className='tableValueCol'>{preAppServInfo[2][i]}</th>
                </tr>
            </tbody>
        );
    }


    const salTable = [];

    for(let i=0;i<5;i++){
        salTable.push(
            <tbody>
                <tr>
                    <th className='tableIndexCol'>{preAppSalInfo[0][i]}</th>
                    <th className='tableLabelCol'>{preAppSalInfo[1][i]}</th>
                    <th className='tableValueCol'>{preAppSalInfo[2][i]}</th>
                    <th className='tableValueCol'>{preAppSalInfo[3][i]}</th>
                    <th className='tableValueCol'>{preAppSalInfo[4][i]}</th>
                </tr>
            </tbody>
        );
    }


    const loanTable = [];

    for(let i=0;i<9;i++){
        loanTable.push(
            <tbody>
                <tr>
                    <th className='tableIndexCol'>{preAppLoanInfo[0][i]}</th>
                    <th className='tableLabelCol'>{preAppLoanInfo[1][i]}</th>
                    <th className='tableValueCol'>{preAppLoanInfo[2][i]}</th>
                    <th className='tableValueCol'>{preAppLoanInfo[3][i]}</th>
                    <th className='tableValueCol'>{preAppLoanInfo[4][i]}</th>
                    <th className='tableValueCol'>{preAppLoanInfo[5][i]}</th>
                    <th className='tableValueCol'>{preAppLoanInfo[6][i]}</th>
                </tr>
            </tbody>
        );
    }


    const lastTable = [];

    for(let i=0;i<2;i++){
        lastTable.push(
            <tbody>
                <tr>
                    <th className='tableIndexCol'>{preAppLastInfo[0][i]}</th>
                    <th className='tableLabelCol'>{preAppLastInfo[1][i]}</th>
                    <th className='tableValueCol'>{preAppLastInfo[2][i]}</th>
                    
                </tr>
            </tbody>
        );
    }


    const onClickEdit = (e) => {
        e.preventDefault();
        previewNavigate('/application/1', { state: state });

    };

    const downloadpdf = () => {

        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', 'a4', true);

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth/imgWidth , pdfHeight/imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 1;
            const zoom = 1;

            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio*zoom, (imgHeight*ratio*zoom));
            pdf.save('preview.pdf');


        });
    };

    const onClickSubmit = (e) => {
        e.preventDefault();
        downloadpdf();
        previewNavigate("/");

    };


    return(
        <div>
            <div className="previewApp" ref={pdfRef}>
                <div className="preview_logo">
                    <Logo />
                </div>

                <div className="pageLabel">
                    ঋণের জন্য আবেদন
                </div>
                <div className="allField">



                    <div className="preBasicFieldwithProPic">
                        <div className="preBasicField">
                            <PreviewText 
                                label="১. আবেদনকারীর নাম"
                                value={preAppApplicantName}
                            />

                            <PreviewText
                                label="২. পদবী"
                                value={preAppDesignation}
                            />

                            <PreviewText
                                label="৩. অফিস/বিভাগ"
                                value={preAppOfficeDept}
                            />

                            <PreviewText
                                label="৪. সোনালী ব্যাংক, বুয়েট শাখায় পরিচালিত হিসাব নম্বর"
                                value={preAppAccountNo}
                            />

                            <PreviewText
                                label="৫. যে ঋণের জন্যে আবেদন করা হয়েছে"
                                value={preAppLoanType}
                            />

                            <PreviewText
                                label="৬. আবেদনকৃত ঋণের পরিমাণ"
                                value={preAppLoanAmnt}
                            />

                            <PreviewText
                                label="৭. আবেদনকৃত ঋণ গ্রহণের কারণ"
                                value={preAppLoanReas}
                            />

                        </div>

                        <div className='preAppProPic'>
                            <img className='preAppProImg' src={preAppPhoto} />
                        </div>

                    </div>

                    

                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            ৮. ব্যক্তিগত তথ্যাবলী :
                        </div>
                        <table>
                            {persoTable}
                        </table>

                    </div>


                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            ৯. আবেদনকারীর চাকুরী সংক্রান্ত তথ্যাবলী :
                        </div>
                        <table>
                            {servTable}
                        </table>

                    </div>


                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            ১০. বেতন সংক্রান্ত তথ্যাবলী (বিগত তিন মাসের) :
                        </div>
                        <table>
                            {salTable}
                        </table>
                    </div>

{/* 
                    <div className="preview_margin">

                    </div>
 */}

                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            ১১. বিশ্ববিদ্যালয় ও সোনালী ব্যাংক হতে গৃহীত ঋণের তথ্যাবলী (কম্পট্রোলার অফিস কর্তৃক যাচাইকৃত) :
                        </div>
                        <table>
                            {loanTable}
                        </table>

                    </div>



{/* 
                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            ১২. বিশ্ববিদ্যালয় হইতে আনুমানিক প্রাপ্য (কম্পট্রোলার অফিস পূরণ করবে) :
                        </div>
                        <table>
                            {lastTable}
                        </table>
                        
                    </div> 
 */}


                    <div className="prePersInfo">
                        <div className="prePersInfoLabel">
                            এই মর্মে নিশ্চয়তা দিচ্ছি যে, উপরোক্ত তথ্যাদি সম্পূর্ণ সত্য ও সঠিক এবং নিয়মানুযায়ী গৃহীত ঋণের কিস্তি পরিশোধে বাধ্য থাকিব।
                            অন্যথায় কর্তৃপক্ষ কর্তৃক নির্ধারিত দায়ভার বহন করিতে আপত্তি নেই। ঋণ গ্রহণের পরে যদি কোনো তথ্য বা প্রদত্ত দলিলাদি সঠিক 
                            নয় বলে প্রমাণিত হয় তবে সেক্ষেত্রে বিশ্ববিদ্যালয়ের যেকোনো সিদ্ধান্ত বিনা আপত্তিতে মেনে নিতে বাধ্য থাকিব। 
                        </div>
                    </div>


                    <div className='preAppSignPic'>
                        <img className='preAppSignImg' src={preAppSign} />
                    </div>

            

                </div>

            </div>
            <div className='preButton'>
                <button className='preNormalButton' onClick={onClickEdit} >
                    সম্পাদন
                </button>
                <button className='preNormalButton' onClick={onClickSubmit} >
                    জমা দিন
                </button>
            </div>
        </div>
    );
}


export default PreviewApplication;

