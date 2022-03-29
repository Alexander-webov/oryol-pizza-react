import React, { useCallback, useEffect } from 'react';
import Categories from '../components/Categories';
import Pizzablock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import Pizzaloadingblock from '../components/PizzaLoadingBlock';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items);

    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy]);


    const onSelectCategory = useCallback(index => dispatch(setCategory(index)))
    const onSelectSortType = useCallback(type => dispatch(setSortBy(type)))

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup onClikSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ?
                    items.map(pizza => <Pizzablock key={pizza.id} {...pizza} isLoading={true} />)
                    :
                    Array(12).fill(<Pizzaloadingblock />)
                }

            </div>
        </div>
    );
}

export default Home;
