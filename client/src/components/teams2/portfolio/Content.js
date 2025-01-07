import React, { useState, useRef } from 'react'
import Template from './Template'
import Department from './Department';

const Content = () => {
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
      <Department tag="CONTENT TEAM" />
      <div className="btn">
        <div className='flex mt-6  justify-end'>

          <button ref={btnRef1} className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  tracking-wider cursor-pointer border border-solid border-black p-4 text-white bg-[#153462] hover:border-2 hover:shadow-2xl hover:bg-[#BAD1C2] hover:text-black " onClick={() => handlePresentClick()}>Present</button>
          <button ref={btnRef2} className=" py-2 px-3 m-2 mr-4 flex rounded-xl font-bold  border border-solid border-black p-4 tracking-wider cursor-pointer  hover:border-2 hover:shadow-2xl hover:bg-[#BAD1C2] hover:text-black" onClick={() => handleAlumniClick()} >Alumni</button>

        </div>
      </div>

      {(val === true) ? (
        <Template name={["Shruti Mayank", "Adya Sharma", "Ayush Aman", "Himanshu Tripathi", "Gawtham Vellore"]} pos={["head", "Member", "Member", "head", "member"]} yr={["2019", "2021", "2034", "2022", "2043"]} />
      ) : (
        <Template name={["Gawtham Vellore", "Adya Sharma", "Himanshu Tripathi", "Shruti Mayank"]} pos={["alumni1", "alumni2", "alumni", "head"]} yr={["2019", "2021", "2009", "2022"]} />
      )}
    </div>
  )
}

export default Content
