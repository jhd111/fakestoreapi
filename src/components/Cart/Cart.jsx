

import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { AppContext } from "../Usecontex"
function Cart(){

    // const{
    //     setcount,
    //     setmencount,
    //     setwomencount,
    //     setjewelerycount,
    //     setelectronicscount,
    // }
    // =useContext(AppContext)

    // function clicked(){
    //     setjewelerycount((prev)=>{
    //         return(prev-1)
    //     }) 
    //     setcount((prev)=>{
    //         return(prev-1)
    //     })
    //     setmencount((prev)=>{
    //         return(prev-1)
    //     })
    //     setwomencount((prev)=>{
    //         return(prev-1)
    //     })
    //     setelectronicscount((prev)=>{
    //         return(prev-1)
    //     })
    //  }
   
    
    
const{allproducts}=useContext(AppContext)
const{jewelery}=useContext(AppContext)
const{electronics}=useContext(AppContext)
const{men}=useContext(AppContext)
const{women}=useContext(AppContext)
const{setwomen}=useContext(AppContext)
const{setmen}=useContext(AppContext)

const{cartcount}=useContext(AppContext)

const{setcartcount}=useContext(AppContext)
const{setcount}=useContext(AppContext)
const{setjewelerycount}=useContext(AppContext)
const{setelectronicscount}=useContext(AppContext)
const{setmencount}=useContext(AppContext)
const{setwomencount}=useContext(AppContext)

const{womencount}=useContext(AppContext)
const{jewelerycount}=useContext(AppContext)
const{electronicscount}=useContext(AppContext)

const{setallproducts}=useContext(AppContext)   
const{setjewelery}=useContext(AppContext) 
const{setelectronics}=useContext(AppContext)

 


// const [cartItems, setCartItems] = useState([...allproducts, ...jewelery, ...electronics, ...men, ...women]);

const [cartItems, setCartItems] = useState([...allproducts, ...jewelery, ...electronics, ...men, ...women]);

console.log(cartItems)




setcount(cartItems.length)

    // function removeitem(prod){
    //     let arr=cartItems.filter((item)=>item.id!==prod.id)
    //     setCartItems(arr)
    //     console.log(arr)

       
      
    // }

    function removeitem(prod) {
        // const index = cartItems.findIndex(item => item.id === prod.id);
       
        
        
        // const newArr = [...cartItems.slice(1, index), ...cartItems.slice(index + 1)];
        const newArr = cartItems.filter(item => item.id !== prod.id);

        console.log(newArr)

        if(newArr.length>=1){
            setCartItems(newArr)
            setcartcount(cartcount-1)

        }
        else{
            // if(prod.category==="men's clothing")
            

            setcartcount()

            setallproducts([])
            setjewelery([])
            setelectronics([])
           
           
             setmen([])
             setCartItems([])
            
            setwomen([])

        }

        //     if(cartcount==0){
        //         setCartItems([])
        //         setcartcount(cartcount)
        //     }
       
        //  else{
        //     setCartItems(newArr);
        //     setcartcount(cartcount-1)
        //  }
        
            // console.log(newArr);
        
           
            // setcartcount(cartcount-1)
                
            console.log("cartcount"+cartcount)

           

     }


    // function removeitem(prod) {
    //     const index = cartItems.findIndex(item => item.id === prod.id);
    //     const newArr = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
        
    //     if (newArr.length === 0) {
    //         // Reset all relevant state variables when cart is empty
    //         setCartItems([]);
    //         setcartcount(0); // Reset cart count to 0
    //         // Reset other counts or state variables as needed
    //         setcount(0);
    //         setmen([]);
    //         setwomen([]);
    //         setjewelerycount([]);
    //         setelectronicscount([]);
    //     } else {
    //         setCartItems(newArr);
    //         setcartcount(cartcount - 1); // Decrease cart count
    //         // Adjust other counts if needed
    //     }
    // }
    
  
    
    
    

    
    return(
        <div className="product-mrgn">

{  
           <div className="product-list">
           {cartItems.map((x, key) => (
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
                   onClick={()=>{removeitem(x)}}
                    style={{ backgroundColor:"purple",border:"transparent",padding:"10px",fontSize:"15px",fontWeight:"bold",color:"white",borderRadius:"12px"}}>
                        Remove
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
export default Cart

// function Cart(){
//     return(
//         <>
//         tfth
//         </>
//     )
// }

// export default Cart








