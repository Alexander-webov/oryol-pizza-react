import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {

    const [activeCategoriesClass, setactiveCategoriesClass] = useState(null);

    const onSelevtItem = (index) => {
        setactiveCategoriesClass(index)
    }


    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => { setactiveCategoriesClass(null) }}
                    className={activeCategoriesClass === null ? 'active' : ''}
                >Все</li>
                {
                    items && items.map((item, index) => (
                        <li
                            onClick={() => { onSelevtItem(index) }}
                            key={item}
                            className={activeCategoriesClass === index ? 'active' : ''}
                        >{item}</li>
                    )
                    )
                }

            </ul>
        </div>
    );
}

export default Categories;
