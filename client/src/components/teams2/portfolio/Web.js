import React, { useState, useRef } from 'react'
import Template from './Template'
import Department from './Department';

const Web = () => {

  const [val, setVal] = useState(true);
  const btnRef1 = useRef()
  const btnRef2 = useRef()

  const handlePresentClick = () => {
    setVal(true);
    btnRef1.current.style.backgroundColor = "#153462";
    btnRef1.current.style.color = "white";
    btnRef2.current.style.backgroundColor = "white";
    btnRef2.current.style.color = "black";
  };

  const handleAlumniClick = () => {
    setVal(false);
    btnRef1.current.style.backgroundColor = "white";
    btnRef1.current.style.color = "black";
    btnRef2.current.style.backgroundColor = "#153462";
    btnRef2.current.style.color = "white";
  };


  return (
    <div>
      <Department tag="WEB TEAM" />
      <div className="btn">
        <div className='flex mt-6  justify-end'>

          <button ref={btnRef1} className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  tracking-wider cursor-pointer border border-solid hover:shadow-2xl hover:bg-[#BAD1C2] hover:border-2  border-black p-4 text-white bg-[#153462] hover:text-black " onClick={() => handlePresentClick()}>Present</button>
          <button ref={btnRef2} className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  border border-solid border-black p-4 tracking-wider cursor-pointer hover:border-2 hover:shadow-2xl hover:bg-[#BAD1C2] hover:text-black" onClick={() => handleAlumniClick()} >Alumni</button>

        </div>
      </div>

      {(val === true) ? (
        <Template name={["Shruti Mayank","Himanshu Tripathi", "Shaurya Raj Srivastava","Aniket Shah"]} yr={["2024", "2024", "2024", "2024", "2024"]} url={["/", "/", "/", "/", "/"]} />
      ) : (
        <Template name={["Gawtham Vellore", "Adya Sharma", "Himanshu Tripathi", "Shruti Mayank"]} yr={["2019", "2021", "2009", "2022"]} url={["/", "/", "/", "/", "/"]}/>
      )}
    </div>
  )
}

export default Web
