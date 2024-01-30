import { ReactNode, createContext, useContext } from "react"

type MenuContextProps={
    theme:string
}
type MenuProviderProps={
    children:ReactNode
}
const MenuContext= createContext<MenuContextProps | null>(null)
export const MenuList=({children}:MenuProviderProps)=>{
    return(
        <MenuContext.Provider value={{theme:'dark'}}>
            <h2 className="text-xl font-bold">Component based provider pattern</h2>
            <ul>
                {children}
            </ul>
        </MenuContext.Provider>
    )
}

export const MenuItem=()=>{
    const {theme}= useContext(MenuContext)|| { theme: 'default' };
    console.log('menuItem',theme)
    return(
        <>
        <h3>Menu Items</h3>
        </>
    )
}