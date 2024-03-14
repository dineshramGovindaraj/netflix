import React from 'react'

export default function FirstSection() {
    return (
        <div>
            <div className="main">
                <nav>
                    <span
                    ><img
                            width="53"
                            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                            alt=""
                        /></span>
                    <div>
                        <button className="btn btn-red-sm">Sign In</button>
                    </div>
                </nav>
                <div className="box"></div>
                <div className="hero">
                    <span>Unlimited movies, TV shows, and more</span>
                    <span>Watch anywhere. Cancel anytime.</span>
                    <span
                    >Ready to watch? Enter your email to create or restart your
                        membership.</span
                    >
                    <div className="hero-buttons">
                        <input type="email" placeholder="Email Address" />
                        <button className="btn btn-red">Get Started {'>'} </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
