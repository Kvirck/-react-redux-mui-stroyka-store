import { Box, Container, List, Typography, ListItem, Divider } from '@mui/material'
import { dark, grey } from './../../theme/colors';
import { Link } from 'react-router-dom';
import map from "icons/map-footer.svg"
import visaImg from "icons/visa-img.svg"
import { LogoIcon, MailIcon, ArrowRight16Icon } from './../../assets/icons/index';


const userLinks = ['Личный кабинет', 'Заказы', 'Избранное', 'Корзина']
const section = ['Каталог', 'Акции', 'Бренды', 'Контакты']
const sellersLinks = ['Стать продавцом', 'Доставка', 'Возврат', 'Документация']


export const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: dark[600], boxShadow: "none", position: "static", p: '40px 0 25px' }}>
            <Container sx={{ maxWidth: "1160px" }}>
                <Box mr={4} color='#E8E9EA' fontSize={16} fontWeight={500} display='flex' justifyContent='space-between'>
                    <Box >
                        <Link to="/">
                            <LogoIcon textColor='#FFFFFF' />
                        </Link>
                        <List sx={{ mt: 3, p: 0 }}>
                            <ListItem sx={{ p: 0, mb: 2, cursor: 'pointer' }} >
                                <MailIcon textColor='#E8E9EA' />
                                <Typography ml={1.1}>info@stroykastore.ru</Typography>
                            </ListItem>
                            <ListItem sx={{ p: 0, cursor: 'pointer' }}>
                                <Box component='img' src={map} />
                                <Typography ml={1.1}>Москва, ул. Камушкина 10</Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <List >
                        {userLinks.map((link) => (
                            <ListItem sx={{
                                p: 0, mb: 1.5,
                                cursor: 'pointer',
                                width: '150px',
                                '&:hover svg': {
                                    display: 'block'
                                }
                            }} key={link}  >
                                <Box sx={{ '& svg': { display: 'none' } }} >
                                    <ArrowRight16Icon textColor='#E8E9EA' />
                                </Box>
                                <Typography ml={0.5}>{link}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {section.map((link) => (
                            <ListItem sx={{
                                p: 0, mb: 1.5,
                                cursor: 'pointer',
                                width: '120px',
                                '&:hover svg': {
                                    display: 'block'
                                }
                            }} key={link}  >
                                <Box sx={{ '& svg': { display: 'none' } }} >
                                    <ArrowRight16Icon textColor='#E8E9EA' />
                                </Box>
                                <Typography ml={0.5}>{link}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <List >
                        {sellersLinks.map((link) => (
                            <ListItem sx={{
                                p: 0, mb: 1.5,
                                cursor: 'pointer',
                                width: '180px',
                                '&:hover svg': {
                                    display: 'block'
                                }
                            }} key={link}  >
                                <Box sx={{ '& svg': { display: 'none' } }} >
                                    <ArrowRight16Icon textColor='#E8E9EA' />
                                </Box>
                                <Typography ml={0.5}>{link}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider sx={{ background: grey[800] }} />
                <Box mt={3} fontSize={16} fontWeight={500} color={grey[700]} display='flex' justifyContent='space-between'>
                    <Typography>© СтройкаСтор</Typography>
                    <Box component='img' src={visaImg} />
                    <Typography>Cделано в KRUGLOV STUDIO</Typography>
                </Box>
            </Container >
        </Box >
    )
}
