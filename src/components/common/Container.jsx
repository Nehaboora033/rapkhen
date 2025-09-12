import React from 'react'

const Container = ({ children,className }) => {
    return (
        <div className={`max-w-[1076px] px-3 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container