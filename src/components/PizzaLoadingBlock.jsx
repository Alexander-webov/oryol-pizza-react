import React from 'react';
import ContentLoader from "react-content-loader"
const Pizzaloadingblock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="139" cy="123" r="121" />
            <rect x="-3" y="253" rx="0" ry="0" width="291" height="46" />
            <rect x="151" y="320" rx="0" ry="0" width="124" height="31" />
            <rect x="-1" y="318" rx="0" ry="0" width="130" height="32" />
            <rect x="1" y="419" rx="0" ry="0" width="109" height="30" />
            <rect x="121" y="419" rx="0" ry="0" width="171" height="32" />
            <rect x="5" y="363" rx="0" ry="0" width="66" height="31" />
            <rect x="89" y="363" rx="0" ry="0" width="88" height="29" />
            <rect x="195" y="363" rx="0" ry="0" width="81" height="32" />
        </ContentLoader>
    );
}

export default Pizzaloadingblock;
