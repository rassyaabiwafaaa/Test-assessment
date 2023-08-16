import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    telephone: "",
    profile_image: "",
    address: "",
    city: "",
    province: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "`multipart/form-data",
      },
    };

    axios.post("http://13.212.226.116:8000/api/register", input, config).then((response) => console.log(response));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Register</div>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2"></div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label htmlFor="username" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Username:
              </label>
              <div className="relative">
                <input
                  id="username"
                  type="username"
                  name="username"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Username"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, username: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                password:
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="password"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, password: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="first-name" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                First Name
              </label>
              <div className="relative">
                <input
                  id="first-name"
                  type="first-name"
                  name="first-name"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="First Name"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, first_name: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="last-name" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Last Name
              </label>
              <div className="relative">
                <input
                  id="last-name"
                  type="last-name"
                  name="last-name"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Last Name"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, last_name: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="telephone" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Telephone
              </label>
              <div className="relative">
                <input
                  id="telephone"
                  type="text"
                  name="telephone"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Telephone"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, telephone: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="profile-image" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Profile Image
              </label>
              <div className="relative">
                <input
                  id="profile-image"
                  type="file"
                  name="profile-image"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Profile Image"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, profile_image: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="address" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Address
              </label>
              <div className="relative">
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Adress"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, address: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="city" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                City
              </label>
              <div className="relative">
                <input
                  id="city"
                  type="text"
                  name="city"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="City"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, city: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="province" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Province
              </label>
              <div className="relative">
                <input
                  id="province"
                  type="text"
                  name="province"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Province"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, province: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="country" className="mb-2 text-xs sm:text-sm tracking-wide text-gray-600">
                Country
              </label>
              <div className="relative">
                <input
                  id="ountry"
                  type="text"
                  name="country"
                  className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Country"
                  onChange={(e) => setInput((prevInput) => ({ ...prevInput, country: e.target.value }))}
                />
              </div>
            </div>

            <div className="mb-4">
              <Link to={"/login"} className="text-blue-700">
                or login here
              </Link>
            </div>

            <div className="flex w-full">
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
