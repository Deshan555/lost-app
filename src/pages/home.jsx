// import React from 'react';

// const Home = () => {
//   return (
//     <div className="relative font-geist-sans flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
//       <div className="layout-container flex h-full grow flex-col">
//         <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9edf1] px-10 py-3 sticky top-0 z-50 bg-gray-50">
//           <div className="flex items-center gap-4 text-[#101419]">
//             <div className="size-4">
//               <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g clipPath="url(#clip0_6_319)">
//                   <path
//                     d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
//                     fill="currentColor"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white" /></clipPath>
//                 </defs>
//               </svg>
//             </div>
//             <h2 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em]">Find It</h2>
//           </div>
//           <div className="flex flex-1 justify-end gap-8">
//             <div className="flex items-center gap-9">
//               <a className="text-[#101419] text-sm font-medium leading-normal" href="#">How it works</a>
//               <a className="text-[#101419] text-sm font-medium leading-normal" href="#">Contact</a>
//             </div>
//             <div className="flex gap-2">
//               <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em]">
//                 <span className="truncate">Login</span>
//               </button>
//               <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em]">
//                 <span className="truncate">Sign Up</span>
//               </button>
//             </div>
//           </div>
//         </header>
//         <div className="px-40 flex flex-1 justify-center py-5">
//           <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//             <div className="@container">
//               <div className="w-full flex flex-col  bg-white rounded-lg shadow-sm">
//                 <div
//                   className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
//                   style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtbVS4i14Z9IRRwhnOrnp5AXqQlHtUwVNAO45-prPFYa1gzvQ-NV0gKBoXToZzW7fAT_gwYwJhCmRyK-HtdKuQ4kayA9qXFDUK30xZigCD2keJvlCB6__-Wu3fDW2w0hu9bd4krSmcNwXvwKcX38BIwp5aAC2vCbQc8d8V6oIXtX7EEVdvYEvYwWHTynJMulKACIGvbpNzwlekVz45-JYxncOhmNss1HEvfqttjtc3lZ1q6rbBakQgTvDIC8ySQt8_MzWU479uprs")` }}
//                 >
//                   <div className="flex flex-col gap-2 text-center">
//                     <h1 className="text-white font-geist-sans text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
//                       Find Your Lost Items or Help Others Find Theirs
//                     </h1>
//                     <h2 className="text-white text-sm font-normal font-geist-sans leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
//                       Our platform connects people who have lost items with those who have found them. Whether you've lost something or found an item, we're here to help.
//                     </h2>
//                   </div>
//                   <div className="flex-wrap gap-3 flex justify-center">
//                     <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                       <span className="truncate">Report Lost Item</span>
//                     </button>
//                     <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                       <span className="truncate">Search Found Items</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h2 className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
//               <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 items-center">
//                 <div className="text-[#101419]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                     <path
//                       d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-[#101419] text-base font-bold leading-tight">Search for Items</h2>
//               </div>
//               <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 items-center">
//                 <div className="text-[#101419]" data-icon="PencilSimple" data-size="24px" data-weight="regular">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                     <path
//                       d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-[#101419] text-base font-bold leading-tight">Report a Lost Item</h2>
//               </div>
//               <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 items-center">
//                 <div className="text-[#101419]" data-icon="Users" data-size="24px" data-weight="regular">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                     <path
//                       d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,0,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
//                     />
//                   </svg>
//                 </div>
//                 <h2 className="text-[#101419] text-base font-bold leading-tight">Connect with Finders</h2>
//               </div>
//             </div>
//             <div className="flex flex-col gap-10 px-4 py-10 @container">
//               <div className="flex flex-col gap-4">
//                 <h1 className="text-[#101419] tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//                   Why Choose Us
//                 </h1>
//                 <p className="text-[#101419] text-base font-normal leading-normal max-w-[720px]">
//                   Our platform is designed to make the process of finding lost items or returning found items as easy and efficient as possible. We prioritize security, speed, and community engagement.
//                 </p>
//               </div>
//               <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
//                 <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 flex-col">
//                   <div className="text-[#101419]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                       <path
//                         d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <h2 className="text-[#101419] text-base font-bold leading-tight">Secure and Private</h2>
//                     <p className="text-[#58728d] text-sm font-normal leading-normal">Your information is protected, and we ensure a safe and secure process.</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 flex-col">
//                   <div className="text-[#101419]" data-icon="ClockCounterClockwise" data-size="24px" data-weight="regular">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                       <path
//                         d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <h2 className="text-[#101419] text-base font-bold leading-tight">Fast and Efficient</h2>
//                     <p className="text-[#58728d] text-sm font-normal leading-normal">Quickly report lost items or search for found items with our user-friendly interface.</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-1 gap-3 rounded-lg border border-[#d3dbe4] bg-gray-50 p-4 flex-col">
//                   <div className="text-[#101419]" data-icon="UsersThree" data-size="24px" data-weight="regular">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                       <path
//                         d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <h2 className="text-[#101419] text-base font-bold leading-tight">Community Driven</h2>
//                     <p className="text-[#58728d] text-sm font-normal leading-normal">Join a community of people helping each other find their belongings.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h2 className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Built With</h2>
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
//               <div className="flex flex-col gap-3">
//                 <div
//                   className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9HT3A31bUyDu1xtpwa7tHGkz_kYN5FbKJd1W_LKPjDREVrWbTGWdX0IQnyf7a1fem8mFkwaCKducUwelyJMuQ33pzVt4WqmoiCeypKiQF7iUa8m7z2h869LNXRaOgMvk0jIgtMcMAXpLaYtKcGrK-HuKGLquC7PcUWtgPwFJ7LmnwN6zRItPgQ6eb4dGdVHzxtgZJolZcBPCge4Gs91IWvTiaMm8OWrEUvjlap8j2wYLZ_sp5ASdjBF1LzH68EUNQTywvjd6kUyk")` }}
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <div
//                   className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuARBz37QDprj4GuZX2hXrh9GqfOYPEGy3z9TM6xXFr-EFrT-F5yYWzYiqc7sTBbJVG5WRa8mGt6Rn6aaQX0sMp8xLmow-khjqRlxMhIQ6uDteyPYTnT18IQ02SVhXyWOAxVbY0LJMDDRz3BOnuUSzdPJcugggDCDoox1Fd4QyL449NJWcZNc9ywjwY6Je3S8N3rXF9AYKvEhDblN7LdIFf6yejy7og2nDK473sUBJ0UiSEy7TD_Xn7mn7CR7EZr9H1hxSwDTRQFOfM")` }}
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <div
//                   className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
//                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfMh3tWu7UYcueKPpV0m02EVZdrsypZlhmCLhjMufl2vrExoaX4H6KyrEgVwWjgTK1aANCA_IPVTIcC_gAZzofiyAwoD9M6DIXXjxhBw8UK_xUNoU_euHgFHOO6ITKqvvG1l1qSG-YOmNXbquI_gSXJAYbN1mhm7OeVXG0to7L_CkOgXdbtA1lfm-vrIaff-6NTNCA3XY1yGnXTyhIx7i5OB3nLYXg-I9RWeVlTg4T_Vtl6MAaBiVActMBhv7AQfa8WPDe-bF2WmM")` }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer className="flex justify-center">
//           <div className="flex max-w-[960px] flex-1 flex-col">
//             <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
//               <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
//                 <a className="text-[#58728d] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
//                 <a className="text-[#58728d] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
//                 <a className="text-[#58728d] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
//               </div>
//               <p className="text-[#58728d] text-base font-normal leading-normal">@2024 Find It. All rights reserved.</p>
//             </footer>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';

const Home = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 overflow-x-hidden font-geist-sans">
      <div className="layout-container flex h-full grow flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9edf1] px-10 py-3 bg-white">
          <div className="flex items-center gap-4 text-[#101419]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em]">Find It</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#101419] text-sm font-medium leading-normal" href="#">How it works</a>
              <a className="text-[#101419] text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Login</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
        </header>

        {/* Full-Width Hero Section with Animation */}
        <div className="flex flex-1 justify-center py-5 animate-fade-in">
          <div className="layout-content-container flex flex-col w-full">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtbVS4i14Z9IRRwhnOrnp5AXqQlHtUwVNAO45-prPFYa1gzvQ-NV0gKBoXToZzW7fAT_gwYwJhCmRyK-HtdKuQ4kayA9qXFDUK30xZigCD2keJvlCB6__-Wu3fDW2w0hu9bd4krSmcNwXvwKcX38BIwp5aAC2vCbQc8d8V6oIXtX7EEVdvYEvYwWHTynJMulKACIGvbpNzwlekVz45-JYxncOhmNss1HEvfqttjtc3lZ1q6rbBakQgTvDIC8ySQt8_MzWU479uprs")` }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Find Your Lost Items or Help Others Find Theirs
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our platform connects people who have lost items with those who have found them.
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Report Lost Item</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Search Found Items</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Built With Section with Technology Icons */}
            <h2 className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Built With</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-square flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.376 0 9.75 4.374 9.75 9.75s-4.374 9.75-9.75 9.75-9.75-4.374-9.75-9.75S6.624 2.25 12 2.25zm0 3.375a6.375 6.375 0 100 12.75 6.375 6.375 0 000-12.75zm0 2.25a4.125 4.125 0 110 8.25 4.125 4.125 0 010-8.25z"/>
                  </svg>
                </div>
                <p className="text-center text-[#101419] text-sm font-medium">React</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-square flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#38B2AC]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6h3v12h-3z"/>
                  </svg>
                </div>
                <p className="text-center text-[#101419] text-sm font-medium">Tailwind CSS</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full aspect-square flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#68A063]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9zm0 3c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                  </svg>
                </div>
                <p className="text-center text-[#101419] text-sm font-medium">Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with Social Media Icons */}
      <footer className="flex justify-center bg-gray-100 py-6">
        <div className="flex max-w-[960px] flex-1 flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="text-[#58728d] text-base font-normal leading-normal" href="#">Terms of Service</a>
            <a className="text-[#58728d] text-base font-normal leading-normal" href="#">Privacy Policy</a>
            <a className="text-[#58728d] text-base font-normal leading-normal" href="#">Contact Us</a>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com" className="text-[#58728d] hover:text-[#101419]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10S6.486 2 12 2zm0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm5 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="text-[#58728d] hover:text-[#101419]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10 0 5.136-3.842 9.39-8.812 9.945v-7.032h2.469l.469-3.093h-2.938v-2.01c0-.845.422-1.672 1.781-1.672h1.375v-2.625s-1.25-.219-2.438-.219c-2.484 0-4.094 1.5-4.094 4.219v2.307H7.563v3.093H10V22C5.045 21.39 2 17.136 2 12c0-5.514 4.486-10 10-10z"/>
              </svg>
            </a>
            <a href="https://github.com" className="text-[#58728d] hover:text-[#101419]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10 0 4.411-2.865 8.14-6.839 9.458-.5.092-.683-.217-.683-.483 0-.336.009-1.452.009-2.85 0-.616-.207-1.033-.477-1.233 1.35.135 2.467-.616 2.467-1.117 0-.283-.1-1.033-.383-1.4 1.25-.15 2.567-.633 2.567-.633.417 1.05-.25 1.817-.617 2.217-.567.267-1.15.1-1.15-.25 0-.35.25-1.117 1.15-1.95-1.15-.133-2.35-1.167-2.35-2.317 0-.517.183-1.033.567-1.4-.067-.167-.25-.817.05-1.683 0 0 .533-.167 1.75.633.5-.15 1.033-.233 1.567-.233s1.067.083 1.567.233c1.217-.8 1.75-.633 1.75-.633.3.866.117 1.516.05 1.683.383.367.567.883.567 1.4 0 1.15-1.2 2.183-2.35 2.317.917.833 1.167 1.617 1.167 1.95 0 .35-.583.517-1.15.25 0 .35-.583 1.617-1.15 2.217-.367-.4-1.033-1.167-.617-2.217 0 0 1.317.483 2.567.633-.283.367-.383 1.117-.383 1.4 0 .5 1.117 1.25 2.467 1.117 0 .616-.009 1.452-.009 2.85 0 .266-.183.575-.683.483C14.865 20.14 12 16.411 12 12c0-5.514 4.486-10 10-10z"/>
              </svg>
            </a>
          </div>
          <p className="text-[#58728d] text-base font-normal leading-normal">@2024 Find It. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;