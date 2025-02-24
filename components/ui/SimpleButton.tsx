import React from 'react'

const SimpleButton = ({
    title, 
    icon, 
    position, 
    handleClick, 
    otherClasses = ""
}: {
    title: string; 
    icon: React.ReactNode; 
    position: string; 
    handleClick?: () => void; 
    otherClasses?: string
}) => {
    return (
        <button 
            onClick={handleClick}
            className={`px-5 py-3 rounded-md border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white text-sm font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200 flex items-center ${position === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-2 ${otherClasses}`}
        >
            {icon && <span className={position === 'left' ? 'mr-1' : 'ml-1'}>{icon}</span>}
            <span>{title}</span>
        </button>
    )
}

export default SimpleButton
