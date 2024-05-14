import React from 'react'


const Contact = () => {
    return (
        <div className='contact flexcolumn' id='contact'>
           <div className='headingPosition'>
            <h1 className='flexrow heading ' >&lt;Contact /&gt;</h1>
            <h1 className='flexrow headingBottom  ' >Say Hello 👋</h1>

            </div> 

             <div>
                <div className="login-box" data-aos="fade-right">

                    <form className='contactForm' action="https://formspree.io/f/xeqbkkvr" method='POST'>
                        <div className="user-box">
                            <input type="text" name="yourname" required />
                            <label>Your Name</label>
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
