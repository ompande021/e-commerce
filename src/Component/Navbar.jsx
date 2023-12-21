import { Link } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"


const Navbar = ({setSearch , size , data, setData ,Data}) =>{

    const [cat, setCat] = useState(false);
   
    
    
    const filterResult1 = (catItem)=>{
        var newData = Data;
        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
        
    }

    const filterResult2 = (catItem)=>{
        var newData = Data;
        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult3 = (catItem)=>{
        var newData = Data;

        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult4 = (catItem)=>{
        var newData = Data;

        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }
    const filterResult5 = ()=>{
        var newData = Data;
        setData(newData)
    }


    function option(){
        var navart2=document.getElementById('navart2')
        if(!cat){
            navart2.style.visibility= 'visible';
        }
        else(
            navart2.style.visibility= 'hidden'
        )
        setCat(!cat)
    }

    return(
        <div>
            <nav className="navbar">
                <div id='option'>
                    <div><Link to='/e-commerce'><img src="https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png" alt="" /></Link></div>
                    <article className="navart1">
                        <div><Link style={{color:'white',textDecoration:'none'}} to='/e-commerce'>Home</Link></div>
                        <div><Link style={{color:'white',textDecoration:'none'}} to='/'>Products</Link></div>
                        <div><Link style={{color:'white',textDecoration:'none'}} to='/cart'>Cart🛒<sup style={{fontSize:'15px'}}>{size}</sup></Link></div>
                    </article>
                </div>
                
                <div id="categrory">
                    <div id='search'>
                        <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                        <div onClick={option}>{cat ? <p>Category🔼</p> : <p>Category🔽</p>} </div>
                    </div>
                    <article id="navart2">
                        <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
                        <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
                        <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                        <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
                        <button onClick={()=>filterResult5()}>All Products</button>
                    </article>
                </div>
            </nav>
        </div>
    )
}
export default Navbar