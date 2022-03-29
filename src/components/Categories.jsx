import React, { memo, useState } from 'react';

const Categories = memo(({ items, onClick, activeCategory, onClickCategory }) => {


    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => { onClickCategory(null) }}
                    className={activeCategory === null ? 'active' : ''}
                >Все</li>
                {
                    items && items.map((item, index) => (
                        <li
                            onClick={() => { onClickCategory(index) }}
                            key={item}
                            className={activeCategory === index ? 'active' : ''}
                        >{item}</li>
                    )
                    )
                }

            </ul>
        </div>
    );
})

export default Categories;
