import { useState } from "react"
import "./allproduct.css"
import axios from "axios"
import { useEffect } from "react"

import { useContext } from "react"
import { AppContext } from "../Usecontex"
function Allproducts(){

    const {setallproducts} =useContext(AppContext)
   
    const{setcount}=useContext(AppContext)
const[product,setproduct]=useState([])

    const getproducts= async ()=>{
        let response=await axios.get("https://fakestoreapi.com/products")
        let data=await response.data

        

        setproduct(data)

        console.log(data)

    }
    
    useEffect(()=>{
        getproducts()
    },[])
      
    function clicked(){
        setcount((prev)=>
        {
        return(prev+1)
        }
        ) 
     }

    const addToCart = (product) => {
        setallproducts((prevoiusproducts)=>{
             return[...prevoiusproducts,product]
        }); 
    };

    return(
        <div className="product-mrgn">
            <div style={{fontSize:"20px",fontWeight:"500"}}>
            Wellcome redux store
            </div>
            <div style={{fontSize:"15px",fontWeight:"500"}}>
            Products
            </div>
      
            

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
                    <button  onClick={() => {addToCart(x),clicked()}} style={{ backgroundColor:"purple",border:"transparent",padding:"10px",fontSize:"15px",fontWeight:"bold",color:"white",borderRadius:"12px"}}>
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
export default Allproducts