
import { useContext } from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./nav.css"
import { AppContext } from "./Usecontex"

// import { useLocation } from 'react-router-dom';
function Nav() {
   
    // const{count}=useContext(AppContext)
    // const{mencount}=useContext(AppContext)
    // const{womencount}=useContext(AppContext)
    // const{jewelerycount}=useContext(AppContext)
    // const{electronicscount}=useContext(AppContext)

    // const{setcartcount}=useContext(AppContext)
   
    // const{cartcount}=useContext(AppContext)
    const {
        count,
        mencount,
        womencount,
        jewelerycount,
        electronicscount,
        setcartcount,
        cartcount,
        setcount,
        setmencount,
        setwomencount,
        setjewelerycount,
        setelectronicscount,
    } = useContext(AppContext);

  
    // let arr=count+mencount+womencount+jewelerycount+electronicscount
    // console.log(arr)
    // setcartcount(arr)


    // console.log(cartcount1)

    const [show, setshow] = useState(false)

    useEffect(() => {
        // Calculate total count
        let arr = count + mencount + womencount + jewelerycount + electronicscount;
        console.log(arr);
        setcartcount(arr);  
    }, [count, mencount, womencount, jewelerycount, electronicscount, setcartcount]);

    useEffect(() => {
        
        if (cartcount === 0) {
            setcount(0);
            setmencount(0);
            setwomencount(0);
            setjewelerycount(0);
            setelectronicscount(0);
        }
    }, [cartcount, setcount, setmencount, setwomencount, setjewelerycount, setelectronicscount]);
    
    function xyz(){
        setshow(!show)
    }
 
    return (
        <div className="nav-mrgn">

            <div className="nav-div">
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    <div style={{ width: "35%" }}>

                        <ul style={{position:"relative", listStyleType: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <li style={{ fontSize: "20px" }}>REDUX STORE</li>

                            <li>
                               
                            <Link to="/" style={{ textDecoration: "none" }}>
                                Home 
                                </Link>


                            </li>

                            <li onClick={xyz}>
                                Categories
                                {  show&&
                                    <ul className="categories-box" style={{listStyleType: "none"}}>
                                        <li>
                                        <Link to="/Jewelery" style={{ textDecoration: "none",color:"grey" }}>
                                            Jewelery
                                            </Link>
                                            </li>
                                            
                                            <li >
                                        <Link to="/Electronics" style={{ textDecoration: "none",color:"grey" }}>
                                        Electronics
                                            </Link>
                                            </li>

                                            <li>
                                        <Link to="/Men" style={{ textDecoration: "none",color:"grey" }}>
                                        Men's Clothing
                                            </Link>
                                            </li>
                                        
                                            <li>
                                        <Link to="/Woman" style={{ textDecoration: "none",color:"grey" }}>
                                        Woman's Clothing
                                            </Link>
                                            </li>
                                        
                                    </ul>
                                }
                            </li>
                            <li  style={{ width: "8%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Link to="/cart"  style={{ textDecoration: "none"}}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                                 {cartcount} 
                                </Link>
                            </li>

                        </ul>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Nav