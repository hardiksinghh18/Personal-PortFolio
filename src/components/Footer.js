import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer flexcolumn">
                <h3 className='highlightHeading' data-aos="fade-right">Hardik</h3>
                <div className='footerLinks'  data-aos="fade-left">
                    <a href='#about'>About </a>
                    <a href='#projects'>Projects </a>
                    <a href='#contact'>Contact </a>
                </div>
                <div className="socialMedia" data-aos="fade-right" >
                    <a href="https://github.com/hardiksinghh18" target='_blank'  ><i className='bx bxl-github' ></i></a>
                    <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank'  ><i className='bx bxl-linkedin' ></i></a>
                    <a href="https://www.instagram.com/hardiksingh18_/" target='_blank'><i className='bx bxl-instagram' ></i></a>
                    <a href="https://twitter.com/hardiksingh18_" target='_blank'><i className='bx bxl-twitter' ></i></a>

                </div>
                <p data-aos="fade-left"> © Hardik Singh - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
