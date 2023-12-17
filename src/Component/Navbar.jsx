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
        console.log(result);
        setData(result)
        
        console.log(newData);
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
                <article className="navart1">
                    <div style={{fontSize:"22px"}}><Link style={{color:'white',textDecoration:'none'}} to='/'>Home</Link></div>
                    <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                    <div style={{fontSize:'25px'}}><Link style={{color:'white',textDecoration:'none'}} to='/cart'>🛒<sup style={{fontSize:'15px'}}>{size}</sup></Link></div>
                </article>
                
                <div id="categrory">
                    <div onClick={option}>{cat ? <p>Category🔼</p> : <p>Category🔽</p>} </div>
                    <article id="navart2">
                        <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
                        <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
                        <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                        <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
                    </article>
                </div>
            </nav>
        </div>
    )
}
export default Navbar