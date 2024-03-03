
const ButtonTwo = ({ text }: IButtonTwo) => {
    return(
        <button className={`rounded-full border-2 w-32 h-10 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-40 lg:h-12 lg:text-wh2`}>
                {text}
        </button>
    )
}

export default ButtonTwo;