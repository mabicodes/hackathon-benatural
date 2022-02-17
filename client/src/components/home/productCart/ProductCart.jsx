import react from "react"
import "./ProductCart.css"
import card from "../../../assets/img/imagecard.png"
import star from "../../../assets/img/star-solid.svg"
import halfstar from "../../../assets/img/star-half-stroke-solid.svg"


export const ProductCard = () =>  {
    return (
        <div className="cards_product"> 
            <div className="card">
               <img src={card} id="icard"/>
                <div className="card-body">
                    <div id="boder">
                     <h3 className="card-title"> Facial Oil Recovery Serum </h3>
                     <div id="star">
                        <img src={star} alt=""/>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt=""/>
                     </div>
                     
                    </div>
                     <h5 id="price">20 usd</h5>
                    <button id="botonplan">Join Now</button>
               </div>
           </div>
       </div>
           
        
    )
}