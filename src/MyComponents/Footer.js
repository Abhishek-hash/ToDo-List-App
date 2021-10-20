import React from 'react'

export const Footer = () => {

    let footerStyle = {
        position: "relative",
        width: "100%",
        top: "10vh",
        
    }
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            copyright &copy; MyTodosList.com
            </p>
        </div>
    )
}
