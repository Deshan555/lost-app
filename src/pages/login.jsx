import React, { useState } from 'react';
import apiConfigurations from './api/api-base';
import axios from 'axios';
import { message } from 'antd';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            let requestJson = {
                username: email,
                password: password
            };
            axios.post(apiConfigurations.BASE_URL + 'users/login', requestJson)
                .then(response => {
                    // if (response.data.status === 'success') {
                    //     // Assuming the response contains user details
                    //     const user = response.data.data;
                    //     alert(`Welcome ${user.name}!`);
                    //     // Redirect or perform further actions
                    // } else {
                    //     alert("Login failed: " + response.data.message);
                    // }
                    
                    if (response.status === 200){
                        console.log("Login response:", response.data);
                        message.success(`Welcome!`);
                        window.localStorage.setItem("user", JSON.stringify(response.data));
                        window.location.href = "/";
                    }
                })
                .catch(error => {
                    console.error("There was an error logging in!", error);
                    alert("Login failed. Please try again.");
                });
        } else {
            alert("Please enter both fields.");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="w-3/4 max-w-md">
                    <div className="mb-6">
                        <img src="/logo.svg" alt="logo" className="h-12 mb-2" />
                        <h1 className="text-2xl font-bold text-black">Login</h1>
                        <p className="text-sm text-gray-400 mb-2 mt-3">Login to access your account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                            required
                        />

                        <div className="flex justify-between items-center text-sm mt-4">
                            <label className="flex items-center space-x-2 text-gray-400">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-yellow-500 font-medium">Forgot Password</a>
                        </div>

                        <button type="submit" className="text-sm w-full bg-[#4296FE] text-white py-2 rounded-[10px] hover:bg-blue-700">
                            Login
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-400">
                        Don’t have an account?
                        <a href="#" className="text-yellow-500 font-medium ml-1">Sign up</a>
                    </p>
                </div>
            </div>

            <div className="w-1/2 bg-white text-white relative flex justify-center items-center">
                <img
                    src="/login.jpg"
                    alt="map"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                />
            </div>
        </div>
    );
}
