import React from 'react';
import StoreType from './StoreType';
import './Stores.css';

function Stores() {
    return (
        <div className="stores">
            <h3>CONSIGUE LO QUE NECESITAS</h3>
            <h1>Nuestras tiendas</h1>
            <div className="store__type">
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/restaurant-1597276359.png?d=200x200&e=webp"
                    name="Restaurantes"
                 />
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/market-1598710455.png?d=200x200&e=webp"
                    name="Supermercados"
                 />
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/express_big-1598710478.png?d=200x200&e=webp"
                    name="Express"
                 />
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/farmacia-1598710542.png?d=200x200&e=webp"
                    name="Farmacia"
                 />
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/listo_boton-1570827115.png?d=200x200&e=webp"
                    name="Listo!"
                 />
                <StoreType 
                    imageUrl="https://images.rappi.pe/store_type/tecnologia-1598925832.png?d=200x200&e=webp"
                    name="Ver más"
                 />
            </div>
        </div>
    )
}

export default Stores
