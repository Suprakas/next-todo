"use client";
import React from "react";
import {useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return  <div className="w-screen h-screen flex items-center justify-center">
                <div className="border p-8 rounded">

                    <input type="text" placeholder="username" className="border p-2 mb-4 w-full" onChange={e => {
                        setUsername(e.target.value);
                    }} />

                    <input type="password" placeholder="password" className="border p-2 mb-4 w-full" onChange={e => {
                        setPassword(e.target.value);
                    }} />
            
                    <button className="bg-blue-500 text-white p-2 w-full" onClick={async () => {
                        await axios.post("http://localhost:3000/api/v1/signup", {
                            username,
                            password
                        });
                        router.push("/signin");
                    }}> Sign Up</button>
                </div>

            </div>
}