import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import { AppContext } from "../Usecontex"
import { useContext } from "react"

function Electronicsitems(){
    const{setelectronics}=useContext(AppContext)
   
    const[product,setproduct]=useState([])

    const Electronics=async ()=>{
        let response=await axios.get("https://fakestoreapi.com/products")
        let data=await response.data
       
        let filtereddata=data.filter((x)=>(x.category==="electronics"))

        setproduct(filtereddata)

        console.log(filtereddata)
    

    }

    useEffect(()=>{
        Electronics()
    },[])

    const{setelectronicscount}=useContext(AppContext)
    function clicked(){
        setelectronicscount((prev)=>
        {
        return(prev+1)
        }
        ) 
     }

    function addtocart(product){
        setelectronics((previousproduct)=>{
            return[...previousproduct,product]
        })
    }

    return(
        <div className="product-mrgn">

        {  
           <div className="product-list">
           {product.map((x, key) => (
               <div className="productcard" key={key}>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
                  <div style={{height:"35vh",width:"70%"}}>
                    <img style={{width:"100%",height:"100%"}} src={x.image} alt="" />
                    </div>
                    <div style={{width:"100%",textAlign:"center",fontSize:"15px",fontWeight:"bold",overflow:"hidden"}}>
                        {x.title.slice(0,25)}
                    </div>
                    <div style={{fontSize:"15px",fontWeight:"bold"}}>
                       $ {x.price}
                    </div>
                    <div style={{fontSize:"15px"}}>
                        Rating:{x.rating.rate}
                    </div>
                   
                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <button 
                    onClick={()=>{addtocart(x),clicked()}}
                    style={{ backgroundColor:"purple",border:"transparent",padding:"10px",fontSize:"15px",fontWeight:"bold",color:"white",borderRadius:"12px"}}>
                        Add to Cart
                        </button>
                        </div>
                    </div>
                  
                  
                  
               </div>
           ))}
       </div>
        }
        </div>
    )
}
export default Electronicsitems