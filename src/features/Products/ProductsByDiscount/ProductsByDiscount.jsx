import { useEffect } from 'react'
import { ProductList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsByDiscountAsync } from './../actions';

export const ProductsByDiscount = () => {
    const dispatch = useDispatch()
    const { items, isLoading } = useSelector(state => state.productsByDiscount)
    useEffect(() => {
        dispatch(setProductsByDiscountAsync())
    }, [])
    return (
        <div>
            <ProductList btnText='Все Акции' title='Акции' items={items} />
        </div>
    )
}
