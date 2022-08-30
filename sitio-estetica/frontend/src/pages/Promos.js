import { useState, useEffect } from 'react';
import axios from 'axios';
import PromoItem from '../components/promos/PromoItem';
import { Carousel } from 'react-bootstrap';

const Promos = (props) => {
    const [loading, setLoading] = useState(false);
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        const cargarPromos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/promos');
            setPromos(response.data);
            setLoading(false);
        };
        cargarPromos();
    }, []);

    return (
        <section className='holder'>
            <h2>Promos</h2>
            
            {loading ? (
                <p>Cargando...</p>
            ) : (
                promos.map(item => <PromoItem key={item.id} promotion={item.promo} price={item.precio} imagen={item.imagen} />)
            )}
        </section>
    )
}

export default Promos;



















// import React from "react";

//

// const Promos = (props) => {
//     return (
//         <main class="holder">
//             <h2>Nuestras Promos</h2>

//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://via.placeholder.com/500x300?text=1" class="d-block w-100"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://via.placeholder.com/500x300?text=2" class="d-block w-100"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="https://via.placeholder.com/500x300?text=3" class="d-block w-100"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>

//         </main>
//     );
// }

// 