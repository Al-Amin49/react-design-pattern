import { useEffect, useRef } from "react";
import CustomInput from "./CustomInput";


const ForwardRefPattern = () => {
    const myRef=useRef<HTMLInputElement | null>(null);
    const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    }
    useEffect(()=>{
        myRef.current?.focus()
    },[])
    return (
        <div>
            <h3>ForwardRefPattern

            </h3>
            <form onSubmit={handleSubmit}>
            <CustomInput ref={myRef} 
            className='border border-red-400' 
            />
             <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ForwardRefPattern;