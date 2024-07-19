
import { createContext, useState } from "react";
const AppContext=createContext()

const Appprovider=({children})=>{
    const[allproducts,setallproducts]=useState([])

    const[jewelery,setjewelery]=useState([])

    const[electronics,setelectronics]=useState([])

    const[men,setmen]=useState([])

    const[women,setwomen]=useState([])

    const[count,setcount]=useState(0)
    const[mencount,setmencount]=useState(0)
    const[womencount,setwomencount]=useState(0)
    const[jewelerycount,setjewelerycount]=useState(0)
    const[electronicscount,setelectronicscount]=useState(0)

    const[cartcount,setcartcount]=useState(0)

    const[cartcount1,setcartcount1]=useState(0)

    return(
        
        <AppContext.Provider value={{allproducts,setallproducts,jewelery,setjewelery,electronics,setelectronics,men,setmen,women,setwomen,count,setcount,mencount,setmencount,womencount,setwomencount,jewelerycount,setjewelerycount,electronicscount,setelectronicscount,cartcount,setcartcount,cartcount1,setcartcount1}}>{children}</AppContext.Provider>
        
    )
}
export {AppContext,Appprovider}