import ForwardRefPattern from "./component/ForwardRefPattern"
import { MenuItem, MenuList } from "./component/Menu"
import Select from "./component/Select"
import UsersContainer from "./component/UsersContainer"
import { useTheme } from "./context/ThemeProvider"


function App() {
const{dark, setDark}= useTheme()
console.log(dark)

  return (
    <>
     <ForwardRefPattern/>
     <h3 className="font-bold text-xl mt-10">Global Provider pattern</h3>
    <div className={`${dark ? 'bg-black' :''} mt-2 `}>
    <button className=' btn btn-secondary mb-4' onClick={()=>setDark(!dark)}>Toggle</button>
    <MenuList>
      <MenuItem></MenuItem>
    </MenuList>
    <UsersContainer/>
    <Select>
      <Select.SelectOption value="option 1">Option 1</Select.SelectOption>
      <Select.SelectOption value="option 2">Option 2</Select.SelectOption>
      <Select.SelectOption value="option 3">Option 3</Select.SelectOption>
      <Select.SelectOption value="option 4">Option 4</Select.SelectOption>
    </Select>
    </div>
    </>
  )
}

export default App
