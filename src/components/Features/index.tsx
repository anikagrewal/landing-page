


export default function Features() {


    return(
        <>
        <div className={`flex flex-col justify-center align-center gap-10 lg:flex-row`}>
            <div className={`flex justify-center items-center bg-red w-96 h-96 rounded-lg`}>
                <div className={`flex flex-col justify-center items-center rounded-full bg-white w-80 h-80`}>
                <p className={`text-lg font-bold`}>Best Breed Quiz</p>
                <p>Take a short quiz to be able to see what breed is the match to you.</p>
                </div>
              
            </div>
            <div className={`flex justify-center items-center bg-red w-96 h-96 rounded-lg`}>
                <div className={`flex flex-col justify-center items-center rounded-full bg-white w-80 h-80`}>
                <p className={`text-lg font-bold`}>Adoptable Dogs</p>
                <p>Be able to view all adoptable dogs, including their breed, name, weight, and description.</p>
                </div>
              
            </div>
            <div className={`flex flex-col justify-center items-center bg-red w-96 h-96 rounded-lg`}>
                <div className={`flex flex-col justify-center items-center rounded-full bg-white w-80 h-80`}>
                <p className={`text-lg font-bold`}>Learn about Rescues</p>
                <p>Learn more about the benefits of dog ownership and why you should rescue.</p>
                </div>
              
            </div>
           
            </div>
            </>
    )
}