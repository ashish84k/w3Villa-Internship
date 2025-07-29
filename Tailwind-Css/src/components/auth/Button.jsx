import React from 'react';

const Button = ({className , value='Submit' , type}) => {
    return (
        <>
        
         <button type={type} className={`${className} bg-green-500 m-2 p-3 pl-5 pr-5 rounded-2xl hover:bg-green-400 hover:cursor-pointer text-white font-bold active:scale-95`}>{value}</button>
        </>
    );
}

export default Button;
