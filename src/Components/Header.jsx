import React from 'react';

function Header(){
        return (
            <div id='main'>
                <div className="header-heading">
                    <h2 style={{fontSize:'40px'}}>STEP UP YOUR</h2>
                    <h1 style={{fontSize:'5rem',marginTop:'-30px'}}><span><font color="red">FITNESS</font> </span>WITH US</h1>
                    <p className="details">Build Your Body And Fitness With Professional Touch</p>
                    <div className="header-btns">
                        <a className='header-btn' style={{marginLeft:'30px',marginTop:'40px'}} href="#">JOIN US</a>
                    </div>
                </div>


            </div>
        );

}

export default Header;