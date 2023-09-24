import React from 'react'

const Contact = () => {
    return (
        <div className='contact flexcolumn' id='contact'>
            <h2 className='highlightHeading'>Contact Me</h2>
            <div>
                <div className="login-box" data-aos="fade-right">

                    <form className='contactForm' action="https://formspree.io/f/xeqbkkvr" method='POST'>
                        <div className="user-box">
                            <input type="text" name="username" required />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" required />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <textarea type="text" name="message" required />
                            <label>Your Message</label>
                        </div>
                        <div className='submitOutline' >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        
                            <input className='submitForm' type="submit" value="Submit "  data-aos="fade-left"/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
