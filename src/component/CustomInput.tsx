import { forwardRef } from "react";

 type TcustomeInput={
    className:string
 }
const CustomInput = forwardRef<HTMLInputElement, TcustomeInput>(({className}, inputRef) => {
    return (
        <>
             <input 
             ref={inputRef}
            className={className}
            type="text"
             name="name" 
             placeholder="Name" />
        </>
    );
});

export default CustomInput;