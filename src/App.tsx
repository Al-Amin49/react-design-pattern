import ForwardRefPattern from "./component/ForwardRefPattern"
import { useTheme } from "./context/ThemeProvider"


function App() {
const{dark, setDark}= useTheme()
console.log(dark)

  return (
    <>
     <ForwardRefPattern/>
    <div className={`${dark ? 'bg-black' :''} mt-10 `}>
    <button className=' btn btn-secondary' onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
    </>
  )
}

export default App
