import React from 'react'
import { Container } from "@mui/material"
import { Header, SliderHomePage, Footer, ProductList } from 'components';
import { ProductsByDiscount } from './../../features/Products/ProductsByDiscount/ProductsByDiscount';

export const Home = () => {
    return (
        <>
            <SliderHomePage />
            <Container sx={{ maxWidth: "1160px" }}>
                <ProductsByDiscount />
            </Container>
        </>
    )
}
