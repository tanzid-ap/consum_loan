import React from 'react';
import logo_image from "../assets/logo.png"
import "../css/logo.css";


function Logo(){

    return(

        <div className="logo">
            <div>
                <div className="logo_img">
                    <img className="l_img" src={logo_image} alt='BUET Logo'/>
                </div>
    
                <div className="logo_text">
                    <div className="logo_text_1">
                        <p>বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়</p>
                    </div>
                    <div className="logo_text_2">
                        <p>ল্যাপটপ, ভোগ্যপণ্য, মোটরযান ক্রয়/ গৃহ নির্মাণ/ মেরামত <br/> জমি ক্রয় ও সোনালী ব্যাংক হোলসেল ঋণের জন্য আবেদন</p>
                    </div>
                </div>
            </div>
        </div>

            
    )
}

export default Logo;