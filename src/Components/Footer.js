import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="questions">Questions? Contact Us</div>
                <div className="footer">
                    <div className="footer-item">
                        <a target='blank' href="1">MSR</a>
                        <a target='blank' href="1">Dinesh Ram</a>
                        <a target='blank' href="1">Privacy</a>
                        <a target='blank' href="1">Speed Test</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank' href="1">Help Centre</a>
                        <a target='blank' href="1">Jobs</a>
                        <a target='blank' href="1">cookie prefrences</a>
                        <a target='blank' href="1">Legal Notices</a>
                    </div>
                    <div className="footer-item">
                        <a target='blank' href="1">Account</a>
                        <a target='blank' href="1">Ways to Watch</a>
                        <a target='blank' href="1">Corporate Information</a>
                        <a target='blank' href="1">Only on Netflix</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank' href="1">Media center</a>
                        <a target='blank' href="1">Term of Use</a>
                        <a target='blank' href="1">Contact Us</a>
                    </div>
                    <div className="footer-item">
                        <button className="footer-btn">
                            English &nbsp;&nbsp;&nbsp;&nbsp;<i
                                className="fa-solid fa-caret-down"
                            ></i>
                        </button>
                        <div>Netflix India </div>
                        <div>Made By  </div>
                        <div>Dinesh Ram </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
