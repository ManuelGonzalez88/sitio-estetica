import React from 'react';
import { Carousel } from 'react-bootstrap';

const PromoItem = (props) => {
    const { promotion, price, imagen} =props;

    return (
        
        
        <div className="promos">;
        <img src={imagen}/>
        <h4>{promotion}</h4>
        <h3>${price}</h3>
        </div>
    );
}


export default PromoItem;



// const PromoItem = (props) => {
//     const { promotion, price, imagen,} =props;

//     return (
//         <main class="holder">
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={imagen} class="d-block w-100"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>{promotion}</h3>
//                         <p>{price}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
                
//             </Carousel>

//         </main>
//     );
// }


