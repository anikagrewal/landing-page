import ButtonOne from "../ButtonOne"

export default function Form() {
    return(
        <>
        <div className={`flex flex-col justify-center items-center w-96 mt-4 mb-10 lg:items-left`}>
            <h1 className={`text-2xl`}>Be the First to Know!</h1>
            <p className={`w-72 items-center`}>Know exactly what's upcoming at Rescue Radar with the newsletter!</p>
            <form className={`flex flex-col justify-center items-center gap-5`}>
                <input
                className={`rounded-lg border border-slate-400 w-72 h-9 p-2`}
                type="text"
                placeholder="First Name"
               />
                 <input
                  className={`rounded-lg border border-slate-400 w-72 h-9 p-2`}
                type="text"
                placeholder="Last Name"
               />
                 <input
                  className={`rounded-lg border border-slate-400 w-72 h-9 p-2`}
                type="text"
                placeholder="Email Address"
               />
            </form>
            <div className={`flex flex-row justify-center items-center gap-3 mt-4 mb-5`}>
            <input
                type="checkbox"
               />
              <p className={`text-sm`}>I agree to receiving emails from Rescue Radar</p>
              </div>
              <ButtonOne
              text="Notify Me"
              />
        </div>
        
        </>
    )
}