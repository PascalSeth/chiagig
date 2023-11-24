import { Apple, Email, Facebook, Google, Twitter } from '@mui/icons-material'

export default function Home() {
  return (
      <main className='flex flex-col bg-slate-100 h-screen w-screen items-center '>
        <div className='flex h-[80vh] justify-center mt-[3vh]  rounded-md shadow-2xl max-lg:hidden'>
          <div className='sidebg w-[400px] rounded-l-lg'>
          </div>
          
          
          
          <div className='flex flex-col shadow-2xl w-[400px] rounded-r-lg p-[2vw] justify-between'>
            <div className='flex flex-col font-medium'>
            <div className='formTop'>
            <h1 className='font-bold text-[3vh] tracking-widest'>Sign in to your account</h1>
            <h1 className='text-[2vh] text-gray-500 font-medium'>Dont have an account?<span className='text-black hover:cursor-pointer hover:bg-slate-200'> Join Here</span></h1>
            
            </div>
            <div className='formMiddle space-y-3 mt-[40px] flex flex-col  items-center'>
              <div className='middleTop flex-col space-y-3 '>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[350px]'>
                  <Google/>
                  <p className='text-center w-[100%]'>
                    Continue with Google
                  </p>
                </div>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[350px]'>
                  <Email/>
                  <p className='text-center w-[100%]'>
                    Continue with email/username
                  </p>
                </div>
                <h1 className='text-center text-slate-400'>OR</h1>
                </div>
              <div className='middleBottom flex flex-col space-y-3'>
              <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[350px]'>
                 <Apple/>
                  <p className='text-center w-[100%]'>
                   Apple
                  </p>
                </div>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[350px]'>
                 <Twitter/>
                  <p className='text-center w-[100%]'>
                    Twitter
                  </p>
                </div>
            </div>
            </div>
         
          </div>
          <div className='bottomLast'>
               <div className='formFooter text-left items-center '><input type='checkbox'/> 
              By joining, you agree to the Chiagig Terms of Service and to occasionally receive emails from us. 
               Please read our Privacy Policy to learn how we use your personal data.
            </div>
          </div>
          </div>
        </div>
        

        <div className='lg:hidden flex flex-col h-screen items-center justify-between '>
        
            <div className='formMiddle space-y-3 mt-[2vh] flex flex-col  '>
              <div className='middleTop flex-col space-y-3 items-center flex'>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[90vw]'>
                  <Google/>
                  <p className='text-center w-[100%]'>
                    Continue with Google
                  </p>
                </div>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[90vw]'>
                  <Email/>
                  <p className='text-center w-[100%]'>
                    Continue with email/username
                  </p>
                </div>
                <h1 className='text-center text-slate-400'>OR</h1>
                </div>
              <div className='middleBottom flex flex-col space-y-3'>
              <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[90vw]'>
                 <Apple/>
                  <p className='text-center w-[100%]'>
                   Apple
                  </p>
                </div>
                <div className='flex hover:cursor-pointer hover:bg-slate-200 items-center border border-gray-400 p-[1vh] rounded-lg w-[90vw]'>
                 <Facebook/>
                  <p className='text-center w-[100%]'>
                    Facebook
                  </p>
                </div>
            </div>
            </div>
           <div className='bottomLast'>
               <div className='formFooter text-left'>
               By joining, you agree to the Chiagig Terms of Service and to occasionally receive emails from us. 
               Please read our Privacy Policy to learn how we use your personal data.
            </div>
          </div>
          </div>
        
        
      
        
      </main>
  )
}
