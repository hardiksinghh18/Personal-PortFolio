import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer flexcolumn">
                <h3 className='highlightHeading'>Hardik</h3>
                <div className='footerLinks'>
                    <a href='#about'>About </a>
                    <a href='#projects'>Projects </a>
                    <a href='#contact'>Contact </a>
                </div>
                <div className="socialMedia">
                    <a href="https://github.com/hardiksinghh18" target='_blank' rel='noreferrer'><i className='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/hardik-singh-391946278/" target='_blank' rel='noreferrer'><i className='bx bxl-linkedin'></i></a>
                    <a href="https://www.instagram.com/hardiksingh18_/" target='_blank' rel='noreferrer'><i className='bx bxl-instagram'></i></a>
                    <a href="#contact"><i class='bx bx-envelope'></i></a>

                </div>
                <p> © Hardik Singh - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
