import Image from "next/image";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Features from "@/components/Features";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import ButtonOne from "@/components/ButtonOne";
import Door from "@/components/Door";
import styles from '@/styles/Home.module.css'
import Paws from "@/components/Paws";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-white`}
    >
      <header >
        <Header/>
      </header>
      <div className={`flex flex-col justify-center items-center`}>
      <div className={`justify-center items-center lg:w-3/5 lg:h-3/5 mb-40 h-5/6`}>
                <Door/>
       </div>
        <div className={`flex flex-col justify-center items-center lg:flex-row lg:gap-40`}>
        <div className={`flex flex-col justify-center items-center rounded-full bg-red w-80 h-80 p-5`}> 
      <h1 className={`text-2xl text-white`}>Find Your Companion at Rescue Radar!</h1>
                <p className={`text-white text-sm`}>Rescue Radar helps you connect with available adoptable dogs. It's as easy as clicking a button!</p>
                </div>
            
              
        <Form/>
        </div>
        <Features />
        <Donate />
        <div className={`flex flex-col mt-16 gap-5 mb-10 lg:justify-center lg:items-center lg:flex-row`}>
        <div className={`justify-center items-center lg:w-3/5`}>
       <Paws/>
        </div>
        <div className={`flex flex-col justify-center items-center lg:w-96 lg:h-96 lg:mr-80`}>
        <p>Take the first step towards welcoming home a rescue! Rescue Radar opens that door with love and the newsletter gives you all the resources that you'll need to continue the love.</p>
        <ButtonOne
        text="Sign Up"
        />
       </div>
        </div>
       
      </div>
     
      <footer>
        <Footer/>
      </footer>
    
    </main>
  );
}
