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
        <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            {title}
        </button>
    )
}

export default SimpleButton
