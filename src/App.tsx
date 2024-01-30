import ForwardRefPattern from "./component/ForwardRefPattern"
import { MenuItem, MenuList } from "./component/Menu"
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
    </div>
    </>
  )
}

export default App
