import React from 'react';

const PromoItem = (props) => {
    const { promotion, price, imagen, body} =props;

    return (
        <div className="promos">;
        <h1>{promotion}</h1>
        <h2>{price}</h2>
        <img src={imagen}/>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr/>
        </div>
    );
}

export default PromoItem;