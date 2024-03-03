import DogToy from "../DogToy"
import Blanket from "../Blanket"
import ButtonTwo from "../ButtonTwo"
import Bandaid from "../Bandaid"

export default function Donate() {


    return(
        <>
        <div className={`flex flex-col justify-center items-center gap-10 mt-10 lg:flex-row`}>
            <div className={`flex flex-col justify-center items-center shadow-lg rounded-lg border-blue border-4 p-2 h-96 w-80`}>
            <div className={`w-96 h-72 justify-center items-center`}>
            <DogToy/>
            </div>
                <p className={`text-lg font-bold`}>Provide Toys</p>
                <p>Donate $25 to provide a package of toys to go to the rescues.</p>
             <ButtonTwo
             text="Donate $25"
             />
            </div>
            <div className={`flex flex-col justify-center items-center shadow-lg rounded-lg border-blue border-4 p-2 h-96 w-80`}>
            <div className={`w-96 h-72 justify-center items-center`}>
                <Blanket/>
                </div>
                <p className={`text-lg font-bold`}>Provide Warmth</p>
                <p>Donate $50 to provide a package of blankets and beds to help keep the rescues warm at night.</p>
                <ButtonTwo
             text="Donate $50"
             />
            </div>
            <div className={`flex flex-col justify-center items-center shadow-lg rounded-lg border-blue border-4 p-2 h-96 w-80`}>
            <div className={`w-96 h-60 justify-center items-center`}>
                <Bandaid/>
                </div>
                <p className={`text-lg font-bold`}>Provide Medication</p>
                <p>Donate $100 to provide medical attention to the rescues</p>
                <ButtonTwo
             text="Donate $100"
             />
            </div>
        </div>
            </>
    )
}