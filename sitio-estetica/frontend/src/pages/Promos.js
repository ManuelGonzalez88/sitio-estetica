import { useState, useEffect } from 'react';
import axios from 'axios';
import PromoItem from '../components/promos/PromoItem';

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