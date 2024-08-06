import React from 'react';
import "../css_component/salaryInfo.css";

import salary_file from "../paySlip_file.json"

function SalaryInfo(props){

    var salary_data = props.salary_data;

    var mydate = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var prevMonthName = [];
    var currYear = mydate.getFullYear();
    var currMonth = mydate.getMonth();
    var prevMonthSal = [];
    const salText = ["ক) মূল বেতন : ","খ) মোট বেতন : ", "গ) মোট কর্তন : ", "ঘ) নীট বেতন : "];

    const salData = [];
    
    

    for(let i=0;i<salary_file.length;i++){
        for(let j=2;j>=0;j--){
            if((salary_data["EMPLOYEEID"] === salary_file[i]["SAL_ID"]) && 
            (salary_file[i]["YEAR"] === currYear.toString()) &&
            (salary_file[i]["MONTH"] === (currMonth-j).toString())){
                
                prevMonthSal.push([salary_file[i]["BASIC_SALARY"], 
                                    salary_file[i]["GROSS_SALARY"], 
                                    salary_file[i]["TOTAL_DEDUCTION"], 
                                    salary_file[i]["NET_SALARY"]]);


            }
        }
        
    }

    prevMonthSal = prevMonthSal.map(row=>row).reverse();

    var prevMonSal = [];

    for(let i=0;i<3;i++){
        prevMonthName.push(month[currMonth-i-1] + ' ' + currYear);
        prevMonSal.push([prevMonthName[i]]);
        prevMonSal[i] = [...prevMonSal[i],...prevMonthSal[i]];
    }

    
    for(let i=0;i<4;i++){
        salData.push(
            <tbody>
                <tr>
                    <td className='tableText'>{salText[i]}</td>
                    <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' value={prevMonthSal[0][i]} name='prevMonth0BasicSalary' /></td>
                    <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' value={prevMonthSal[1][i]} name='prevMonth1BasicSalary' /></td>
                    <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' value={prevMonthSal[2][i]} name='prevMonth2BasicSalary' /></td>
                </tr>
            </tbody>
        );
    }
    

    var prevSal = {"PREV_MON_SAL": prevMonSal};

    props.setSalData(prevSal);
    

    return(
        <div className="salaryInfo">
            <div className="salaryInfoLabel">
                ১০. বেতন সংক্রান্ত তথ্যাবলী (বিগত তিন মাসের) : 
            </div>
            <div className='fullTable'>
                <table>
                    <thead>
                        <tr className='tableHead'>
                            <th className='tableText'>মাস</th>
                            
                            <th><input className='tableDataInput' type='text' value={prevMonthName[0]} placeholder='বিগত মাস' name='prevMonth0' /></th>
                            <th><input className='tableDataInput' type='text' value={prevMonthName[1]} placeholder='বিগত মাসের ১ মাস আগে' name='prevMonth1' /></th>
                            <th><input className='tableDataInput' type='text' value={prevMonthName[2]} placeholder='বিগত মাসের ২ মাস আগে' name='prevMonth2' /></th>
                        </tr>
                    </thead>

                    {salData}

                </table>
            </div>

        </div>
    )
}


export default SalaryInfo