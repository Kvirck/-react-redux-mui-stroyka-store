import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BasketProduct } from './BasketProduct'
import { ProductsInformation } from './ProductsInformation'
import { Intro } from './../../components/Intro/Intro';
import basketIntro from "img/basket-intro.png"


export const Basket = () => {
    return (
        <>
            <Intro
                props={{
                    imgUrl: basketIntro,
                    title: "Корзина",
                    caption: "",
                    path: [
                        {
                            point: "/",
                            name: "Главная",
                        },
                        {
                            point: "/basket",
                            name: "Корзина",
                        },
                    ],
                }}
                sx={{ my: '40px' }}
            />
            <Container sx={{
                maxWidth: "1160px",
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
                gridTemplateRows: '1fr',
                gridColumnGap: '16px',
            }}>
                <ProductsInformation />
                <Box >
                    <BasketProduct />
                    <BasketProduct />
                    <BasketProduct />
                </Box>
            </Container >
        </>

    )
}
