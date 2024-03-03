import styles from '@/styles/Home.module.css'


export default function Footer() {


    return(
        <>
        <div className={`flex flex-row justify-between justify-center items-center bg-red text-white w-fowd p-5 lg:w-fowdlg md:w-fowdmd h-14`}>
           
            <p>©Anika Grewal</p>
            <a href="https://rescue-radar-tawny.vercel.app/" style={{ textDecoration: 'none'}} className={`cursor-pointer`}>Rescue Radar</a>
     
            
        </div>
        </>
    )
}