import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'


import Card from './Card'
const Home = ({search , handleClick , data}) =>{
    console.log(search);
    return(

        <div>
            <div id="poster">
                <div className="img" id="img1"><img  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-18122023-Z1-MainBanner-Winterfest-4080%20(1)%201.gif"  alt="" /></div>
                <div className="img"><img  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21122023-MAINBANNER-Z1-TravelCarnival-4080.jpg" alt="" /></div>
                <div className="img"><img  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21122023-MAINBANNER-Z1-SNH-4070.jpg" alt="" /></div>
                <div className="img"><img  src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-211223-DailyBanner-Z7-P5-Styli-USPA-MIN50.jpg" alt="" /></div>
                <div className="img"><img  src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-21122023-MainBannerDailyChanging-Z1-P5-AdidasOriginals-Crocs-min30.jpg" alt="" /></div>
            </div>
            <hr />
            <Carousel className="carousel">
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <header key={item.id} style={{height:'600px',width:'80%',margin:'auto'}}>
                            <div>
                                <img src={item.image} />
                                <p className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p style={{fontSize:'18px'}}>${item.price}</p>
                                    <p>{item.rating.rate}⭐</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                </p>
                            </div>
                        </header>
                    )
                })}
            </Carousel>
        <hr />
        <h1>Product List⬇️</h1>
        <section className="sec">
            {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <Card key={item.id} item={item} handleClick={handleClick}/>
                )
            })}
        </section>

        </div>
    )
}
export default Home