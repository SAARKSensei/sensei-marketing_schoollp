"use client"

import React from 'react'

const Button = ({ text, color }) => {

    let bgcolor;

    if (color) {
        bgcolor = `bg-[#fff]`
    } else {
        bgcolor = "bg-[#F8BF3B]"
    }

    return (
        <button className={`font-Nunito rounded-[40px] px-8 py-4 text-lg  ${bgcolor} text-[#2C3D68] font-bold`}>{text}</button>
    )
}

export default Button