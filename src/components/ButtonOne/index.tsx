
const ButtonOne = ({ text }: IButtonOne) => {
    return(
        <button className={`rounded-full border-2 w-44 h-12 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-60 lg:h-12 lg:text-wh2`}>
                {text}
        </button>
    )
}

export default ButtonOne;