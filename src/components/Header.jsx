import React from 'react'

export const Header = () => {
    return (
        <div className=" bg-[url('/public/hero-image.jpg')] bg-no-repeat bg-cover h-[420px] font-playfair relative mb-8 m-3 rounded-xl ">
            <div className="absolute top-14 right-94">
                <img src="/hero-text.png" alt="titleHeader" className="max-w-full h-auto" />
            </div>
        </div>


    )
}
