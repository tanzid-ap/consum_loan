import React from 'react';
import "../css/salaryInfo.css";

function SalaryInfo(props){

    var salary_data = props.salary_data;

    return(
        <div>
            <div className="salaryInfo">
                <div className="salaryInfoLabel">
                    ১০. বেতন সংক্রান্ত তথ্যাবলী (বিগত তিন মাসের) : 
                </div>
                <div className='fullTable'>
                    <table>
                        <thead>
                            <tr className='tableHead'>
                                <th className='tableText'>মাস</th>
                                <th><input className='tableDataInput' type='text' placeholder='বিগত মাস' name='prevMonth0' onFocus={(e) => (e.target.type = "month")} /></th>
                                <th><input className='tableDataInput' type='text' placeholder='বিগত মাসের ১ মাস আগে' name='prevMonth1' onFocus={(e) => (e.target.type = "month")}/></th>
                                <th><input className='tableDataInput' type='text' placeholder='বিগত মাসের ২ মাস আগে' name='prevMonth2' onFocus={(e) => (e.target.type = "month")} /></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='tableText'>ক) মূল বেতন : </td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth0BasicSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth1BasicSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth2BasicSalary' /></td>
                            </tr>
                        </tbody>
                        
                        <tbody>
                            <tr>
                                <td className='tableText'>খ) মোট বেতন : </td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth0TotalSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth1TotalSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth2TotalSalary' /></td>
                            </tr>
                        </tbody>
                        
                        <tbody>
                            <tr>
                                <td className='tableText'>গ) মোট কর্তন : </td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth0TotalDeduct' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth1TotalDeduct' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth2TotalDeduct' /></td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td className='tableText'>ঘ) নীট বেতন : </td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth0CalcSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth1CalcSalary' /></td>
                                <td><input className='tableDataInput' type='text' placeholder='টাকার পরিমাণ' name='prevMonth2CalcSalary' /></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </div>
        </div>
    )
}


export default SalaryInfo