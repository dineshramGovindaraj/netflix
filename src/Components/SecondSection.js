import React from 'react'

export default function SecondSection() {
    return (
        <div>
            <section className="first">
                <div>
                    <span>Enjoy on your TV</span>
                    <span
                    >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                        players and more.</span
                    >
                </div>

                <div className="secImg">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        alt=""
                    />
                    <video
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>
            </section>
        </div>
    )
}
