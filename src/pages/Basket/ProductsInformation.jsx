import { Box, List, Typography, ListItemText, ListItem } from '@mui/material';
import { PrimaryButton } from './../../components/Button/Button';
import { grey, dark } from './../../theme/colors';
import order from "icons/order.svg"
import delivery from "icons/delivery.svg"
import info from "icons/info.svg"

const infoDelivery = [
    { label: 'Можно сделать заказ только от одного поставщика', src: info },
    { label: 'Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика', src: delivery },
    { label: 'Точная сумма доставки будет определена после после подтверждения заказа', src: order },
]
export const ProductsInformation = () => {
    return (
        <Box >
            <Box >
                <Box p={2} border={`2px solid ${grey[500]}`} >
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '18px',
                        color: dark[500],
                        mb: 1.5,
                    }}>Итого</Typography>
                    <List sx={{ p: 0 }} >
                        <ListItem sx={{ p: 0, m: 0, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{
                                p: 0,
                                mb: 1.5,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>Количество товара</Typography>
                            <Typography sx={{
                                p: 0,
                                mb: 1.5,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>3 шт.</Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0, m: 0, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{
                                p: 0,
                                mb: 1.5,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>Товаров на сумму</Typography>
                            <Typography sx={{
                                p: 0,
                                mb: 1.5,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>3 160 ₽</Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0, m: 0, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{
                                p: 0,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>Поставщик</Typography>
                            <Typography sx={{
                                p: 0,
                                fontWeight: '500',
                                fontSize: '16px',
                                color: dark[700]
                            }}>Планета Марс</Typography>
                        </ListItem>
                    </List>
                </Box >
                <Box sx={{ p: 2, border: `2px solid ${grey[500]}`, borderTop: 'none' }}>
                    <PrimaryButton sx={{
                        textTransform: 'none',
                        fontWeight: '500',
                        width: '100%',
                        fontSize: '18px',
                    }} >Оформить заказ</PrimaryButton>
                </Box>
            </Box >
            <List mt={1.5}>
                {infoDelivery.map((item) => (
                    <ListItem key={item.label} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box component='img' mr={1.5} src={item.src} />
                        <Typography sx={{
                            color: grey[900],
                            fontWeight: '500',
                            fontSize: '15px',
                        }}>{item.label}</Typography>
                    </ListItem>
                ))}

            </List>
        </Box>
    )
}
