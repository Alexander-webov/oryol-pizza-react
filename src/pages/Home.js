import React, { useCallback } from 'react';
import Categories from '../components/Categories';
import Pizzablock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items);
    const onSelectCategory = useCallback(index => dispatch(setCategory(index)))

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(pizza => {
                        return (
                            <Pizzablock
                                key={pizza.id}
                                {...pizza}

                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
