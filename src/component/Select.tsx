import { ReactNode, createContext, useContext, useState } from "react"
type SelectProviderProps={
    children:ReactNode
}
// type SelectContextProps={
//     selectedOption:string,
//     setSelectedOption:React.Dispatch<React.SetStateAction<string>>
// }
const SelectConext=createContext(null)
const Select=({children}:SelectProviderProps)=>{
    const [selectedOption, setSelectedOption]=useState('')
    console.log(selectedOption)
  return(
    <SelectConext.Provider value={{selectedOption, setSelectedOption}}>
    <select onChange={(e)=>setSelectedOption(e.target.value)}>
        {children}
        </select>
 </SelectConext.Provider>
  )
  
}

const SelectOption=({value, children})=>{
    const {selectedOption, setSelectedOption}=useSelectContext();
    const isActive= selectedOption===value
    return <option className={`${isActive ? 'bg-purple-300':'bg-white'}`} value={value}>{children}</option>
}
Select.SelectOption=SelectOption;
export default Select;

const useSelectContext=()=>{
    const context= useContext(SelectConext);
    if(!context){
        throw new Error('Context not found')
    }
    return context;
}