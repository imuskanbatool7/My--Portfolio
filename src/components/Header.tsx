"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";


export default  function Header() {
    const [open, setOpen] = useState(false);
    return (
        // nav section
  <div>
        <nav className="bg-gradient-to-t to-white from-sky-200 via-purple-100 text-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* imge logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/IMAGES/muskan.png"
                        alt="My Profile Picture"
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-purple-500"
                    />
                    <span className="text-black font-serif font-extrabold">Muskan</span>
                </div>

                {/* menu */}
                <ul className="hidden md:flex space-x-6 text-lg text-black font-bold font-serif">
            <li className="hover:text-purple-400 transition">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-400 transition">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-400 transition">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-purple-400 transition">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            className="md:hidden text-purple-400 text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-purple-200 py-4">
            <ul className="flex flex-col items-center space-y-4 text-lg text-black font-bold font-serif">
              <li className="hover:text-purple-400 transition">
                <a href="#home" onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>
              <li className="hover:text-purple-400 transition">
                <a href="#about" onClick={() => setOpen(false)}>
                  About
                </a>
              </li>
              <li className="hover:text-purple-400 transition">
                <a href="#projects" onClick={() => setOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="hover:text-purple-400 transition">
                <a href="#contact">Contact</a>
              </li>
            </ul>
                </div>
            )}
        </nav>
        {/* home */}
        <section className=' bg-sky-200 text-white min-h-screen flex items-center'>
                    <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Hi <span className=' text-sky-400'>&apos;</span> <br /> <b>I&apos;M MUSKAN BATOOL</b></h1>
                            <p className="mt-4 text-lg text-gray-800 font-serif">  I am a Biotechnologist to be & I am passionate about  technology with a <br /> strong background in both development and laboratory work.
                            </p>
                        </div>
        
                        <div className="md:w-1/2  flex justify-center">
                            <Image
                                src="/IMAGES/muskan.png"
                                alt="My Profile Picture"
                                width={300}
                                height={300}
                                className="rounded-full border-4 border-sky-500 shadow-lg"
                            />
                        </div>
        
                    </div>
        
                </section>

                {/* about */}

                <section className='p=10 px-5 bg-gradient-to-t to-sky-100 from-sky-100 via-white  flex justify-center ' >
    <div className="max-w-7xl mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
    <div className=" mb-6 flex flex-col justify-center items-center ">
    <h1 className="text-center text-3xl font-bold mb-6 font-serif">About MySelf</h1>
    <p className="text-center text-lg mb-8 font-serif">Here&apos;s a bit more about myself, what I do, i &apos;am
    Biotechnology student <br/> with a passion for coding and web development, blending science and technology.</p>
    <h1 className="text-2xl font-semibold mb-4 text-center font-serif">Find out more about me</h1>
    <p className="text-base mb-4 text-center font-serif">
          I am a biotechnology student with hands-on experience in lab work and a good foundation in HTML and CSS. Currently, I am learning Next.js and working on various web development projects to enhance my coding skills.
        </p>
        <p className="text-base mb-4 text-center font-serif">
          I am passionate about combining my scientific knowledge with technology to create innovative solutions.
        </p>
        <p className="text-base italic text-center font-serif">
          <i>Feel free to connect with me on LinkedIn—I&apos;m always open to new opportunities and collaborations!</i>
        </p>
    
    </div>
    

    
    {/* bottom-parent div */}
    </div>
    
    {/* about-us div */}
    </div>
    
    </section>


    {/* project */}

    <section className='py-10 px-5 bg-gradient-to-t to-sky-50 from-sky-200 via-white '>

<div className="max-w-7xl mx-auto">
    <h1 className="text-center text-3xl font-bold mb-4 text-black">PROJECTS</h1>
    <p className="text-center text-lg mb-8 text-gray-700">Here you will find some of the personal  projects that I created.</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="projects-bottom-left-side flex flex-col justify-center items-center">
<h1 className="text-2xl font-semibold text-slate-800 mb-4">Static Resume Builder</h1>
<p className="text-base text-slate-600 mb-6">Created a static interactive resume project featuring structured sections for personal details, education, and skills. Demonstrated proficiency in HTML, CSS, and design to build an appealing, user-friendly layout.
</p>
 <div className="button-container">
    <Link href="https://static-resume-by-muskan-batool.vercel.app/" target="_blank"><button className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-cyan-500 transition duration-200">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side flext justify-center items-center">
<Image
        src="/IMAGES/project1.png" 
        alt="Resume"
        width={500}                
        height={500}  
        className="rounded-lg shadow-lg"             
      />
   {/* right-side div */}
</div>

{/* bottom-parent div */}
</div>

{/* next section */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="projects-bottom-left-side flex flex-col justify-center items-center">
<h1 className="text-2xl font-semibold text-slate-800 mb-4">Next.js-based website</h1>
<p className="text-base text-slate-600 mb-6">I have developed a multi-page website using Next.js, incorporating dynamic routing and responsive design. This project showcases my skills in modern web development, including efficient navigation, optimized performance, and seamless user experience.</p>
 <div className="button-container">
    <Link href="https://multi-page-lime.vercel.app/" target="_blank">
    <button className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-cyan-500 transition duration-200">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/IMAGES/project2.png" 
        alt="website"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>
{/* bottom-parent div */}
</div>

{/* next section */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="projects-bottom-left-side flex flex-col justify-center items-center">
<h1 className="text-2xl font-semibold text-slate-800 mb-4">Dynamic-blog</h1>
<p className="text-base text-slate-600 mb-6">I have developed a dynamic blog website using Next.js, featuring seamless navigation, dynamic routing, and a responsive design. This project demonstrates my ability to fetch and display content dynamically, optimize performance, and create an engaging user experience with modern web technologies</p>
 <div className="button-container">
    <Link href="https://milestone-blog-dynamic.vercel.app/" target="_blank">
    <button className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-cyan-500 transition duration-200">Live Link</button></Link>
 </div>
</div>
<div className="projects-right-side">
<Image
        src="/IMAGES/project3.png" 
        alt="website"
        width={500}                
        height={500}  
        className="project-image"             
      />
   {/* right-side div */}
</div>
{/* bottom-parent div */}
</div>



{/* bottom-parent div */}
</div>
</section>

{/* contact */}

{/* footer */}
<footer className="p-6 bg-blue-950 text-white text-center">

            <h2 className="text-xl font-bold font-serif"> Muskan batool</h2>
            <p className="mt-2 font-serif" > Thank you for visiting my portfolio!</p>

            {/* media */}
            <div className="">

                <div className="flex space-x-4 mt-4 md:mt-0 ">
                    <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
                    <Link href="https://www.linkedin.com/in/muskan-batool-15584b277" target="_blank">
                        <FaLinkedin className="text-blue-500 text-3xl cursor-pointer" />
                    </Link>
                    <FaTwitter className="text-blue-400 text-3xl cursor-pointer" />
                    <Link href="https://github.com/imuskanbatool7" target="_blank">
                        <FaGithub className="text-gray-300 text-3xl cursor-pointer" />
                    </Link>
                </div>
            </div>
            <p className="mt-4">© Copyright {new Date().getFullYear()}.Made by Muskan batool</p>
        </footer>
</div>
    )
};


