import Image from "next/image"
import ButtonTwo from "../ButtonTwo"


export default function Header() {


    return(
        <>
        <div className={`flex flex-row justify-between gap-40 mt-5 mb-10 lg:gap-96`}>
            <Image src='/images/logo.svg' alt="logo" width={59} height={58}/>
                <ButtonTwo
                text="Sign Up"
                />
       
        </div>
        </>
    )
}