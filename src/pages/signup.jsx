import React, { useState } from 'react';
import apiConfigurations from './api/api-base';
import axios from 'axios';
import { message } from 'antd';

import LocationData from './data/locations.json';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //     {
    //   "username": "johndoe",
    //   "first_name": "John",
    //   "last_name": "Doe",
    //   "location": "Nairobi",
    //   "userType": "admin",
    //   "mobileNumber": "0712345678",
    //   "nationalId": "12345678",
    //   "email": "johndoe@example.com",
    //   "password": "password",
    //   "is_active": true,
    //   "police_station_id": 0
    // }

    const [signUpJson, setSignUpJson] = useState({
        username: '',
        first_name: '',
        last_name: '',
        location: '',
        userType: 'normal_user',
        mobileNumber: '',
        nationalId: '',
        email: '',
        password: '',
        is_active: true,
        police_station_id: 0
    });

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

                    if (response.status === 200) {
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
                    <div className="mb-6 flex flex-col items-center justify-center">
                        <img src="/logo.svg" alt="logo" className="h-12 mb-2" />
                        <h1 className="text-2xl font-bold text-black">Sign Up</h1>
                        <p className="text-sm text-gray-400 mb-2 mt-3">Create a new find it account</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={signUpJson.first_name}
                                onChange={(e) => setSignUpJson({ ...signUpJson, first_name: e.target.value })}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={signUpJson.last_name}
                                onChange={(e) => setSignUpJson({ ...signUpJson, last_name: e.target.value })}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="User Name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required

                            />
                            <select
                                value={signUpJson.location}
                                onChange={(e) => setSignUpJson({ ...signUpJson, location: e.target.value })}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 text-xs text-gray-400"
                                required
                            >
                                <option value="" disabled hidden className="text-xs text-gray-400">Select Location</option>
                                {
                                    LocationData.map((location, index) => (
                                        <option key={index} value={location.city} className="text-xs">
                                            {location.city}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={signUpJson.email}
                            onChange={(e) => setSignUpJson({ ...signUpJson, email: e.target.value })}
                            className="w-full p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                            required
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={signUpJson.phone}
                                onChange={(e) => setSignUpJson({ ...signUpJson, phone: e.target.value })}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                            <input
                                type="text"
                                placeholder="National ID"
                                value={signUpJson.nationalId}
                                onChange={(e) => setSignUpJson({ ...signUpJson, nationalId: e.target.value })}
                                className="w-1/2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                        </div>

                        <div className="flex space-x-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-1/2 mt-2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={signUpJson.password}
                                onChange={(e) => setSignUpJson({ ...signUpJson, password: e.target.value })}
                                className="w-1/2 mt-2 p-3 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 placeholder-gray-400 placeholder:text-xs text-gray-400 text-sm"
                                required
                            />
                        </div>
                        <button type="submit" className="mt-3 text-sm w-full bg-[#4296FE] text-white py-2 rounded-[10px] hover:bg-blue-700">
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-400">
                        Already have an account?
                        <a href="/login" className="text-yellow-500 font-medium ml-1"> Sign in</a>
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
