export default function Button({ text,onClick}) {
    return (
        <button 
        onClick={onClick}
        className="py-2 px-3 text-white bg-red-600 rounded hover:bg-red-700 hover:cursor-pointer transition duration-200 ease-in-out">
            {text}
        </button>
    )
}