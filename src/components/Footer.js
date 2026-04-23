import React from 'react'

const Footer = () => {
    return (
        <>
        <footer className="footer-modern">
            <div className="footer-content">
                <p className="footer-credits">
                    Designed & Developed By <span className="footer-name">Hardik Singh</span>
                </p>
                <p className="footer-copy">{new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>

        </>
    )
}

export default Footer
