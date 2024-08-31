"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ScrollDown = () => {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <FontAwesomeIcon icon={faChevronDown} className="absolute bottom-4 m-auto left-0 right-0 color-white h-8 cursor-pointer animate-bounce" onClick={handleScroll}/>
    )
}

export default ScrollDown;