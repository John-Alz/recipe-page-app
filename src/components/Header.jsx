import React from 'react'

export const Header = () => {
    return (
        <div className=" bg-[url('/public/hero-image.jpg')] bg-cover bg-top bg-no-repeat rounded-2xl m-4 flex items-center justify-between px-8 h-auto ">
            <div className="w-1/2">
                {/* Contenido del lado izquierdo */}
            </div>
            <div className="w-1/2 flex justify-center">
                <img src="/hero-text.png" alt="titleHeader" className="max-w-full h-auto" />
            </div>
        </div>


    )
}
