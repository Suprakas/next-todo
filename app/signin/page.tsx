"use client";
export default function Signup() {

    return <div className="w-screen h-screen flex items-center justify-center">
                <div className="border p-8 rounded">
                    <input type="text" placeholder="username" className="border p-2 mb-4 w-full" />
                    <input type="password" placeholder="password" className="border p-2 mb-4 w-full" />
            
                    <button className="bg-blue-500 text-white p-2 w-full" onClick={()=>
                        console.log("Sign Up Clicked")
                    }>Sign In</button>
                </div>

            </div>
}