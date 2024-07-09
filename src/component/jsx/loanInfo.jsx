import React from 'react';
import "../css/loanInfo.css";


function LoanInfo(){

    var text = "loanType"

    const table_data = [
        ["০১","মোটরযান ক্রয়/গৃহ নির্মাণ/মেরামত/জমি ক্রয়"],
        ["০২","ভোগ্যপণ্য ঋণ"],
        ["০৩","ল্যাপটপ ঋণ"],
        ["০৪","সোনালী ব্যাংকের হোলসেল ঋণের আওতায় প্রদত্ত পারসোনাল বা অন্যান্য বা এনি পারপোস লোন"],
        ["০৫","সোনালী ব্যাংকের হোলসেল ঋণের আওতায় প্রদত্ত গৃহ নির্মাণ ঋণ, গৃহ ক্রয়, নির্মাণ, মেরামত, জমি ক্রয় ঋণ"],
        ["০৬","বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়ের শিক্ষক/কর্মচারীদের ব্যাংকিং ব্যবস্থার মাধ্যমে গৃহীত গৃহ নির্মাণ ঋণ"],
        ["০৭","অন্যান্য"],
        ["০৮","সমষ্টি"],
    ]

    var jsx_table_data = []

    for(let i=0;i<table_data.length;i++){

        var loan_amount = "loanAmount"+i
        var installment_amount = "installationAmount"+i
        var total_installment_number = "totalInstallmentNumber"+i
        var refined_installment_number = "refinedInstallmentNumber"+i
        var unrefined_loan_amount = "unrefinedLoanAmount"+i

        jsx_table_data.push(
            <tbody>
                <tr>
                    <td className='tableText'>{table_data[i][0]}</td>
                    <td className='tableText'>{table_data[i][1]}</td>
                    <td><input className='tableDataInput' type='text' name={loan_amount} /></td>
                    <td><input className='tableDataInput' type='text' name={installment_amount} /></td>
                    <td><input className='tableDataInput' type='text' name={total_installment_number} /></td>
                    <td><input className='tableDataInput' type='text' name={refined_installment_number} /></td>
                    <td><input className='tableDataInput' type='text' name={unrefined_loan_amount} /></td>
                </tr>
            </tbody>
        )
    }


    return(
        <div>
            <div className="loanInfo">
                <div className="loanInfoLabel">
                    ১১. বিশ্ববিদ্যালয় ও সোনালী ব্যাংক হতে গৃহীত ঋণের তথ্যাবলী (কম্পট্রোলার অফিস কর্তৃক যাচাইকৃত) : 
                </div>
                <div>
                    <table>
                        <thead>
                            <tr className='tableHead'>
                                <th className='tableHeadText'>ক্রমিক নং</th>
                                <th className='tableHeadText'>ঋণের নাম</th>
                                <th className='tableHeadText'>ঋণের পরিমাণ</th>
                                <th className='tableHeadText'>কিস্তির পরিমাণ</th>
                                <th className='tableHeadText'>মোট কিস্তির সংখ্যা</th>
                                <th className='tableHeadText'>পরিশোধিত কিস্তির সংখ্যা</th>
                                <th className='tableHeadText'>অপরিশোধিত ঋণের পরিমাণ (সুদ সহ)</th>
                                
                            </tr>
                        </thead>

    
                        {jsx_table_data}


                    </table>
                </div>

            </div>
        </div>
    )
}

export default LoanInfo