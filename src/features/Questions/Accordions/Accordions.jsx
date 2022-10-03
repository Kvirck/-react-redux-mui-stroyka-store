import { Box, CircularProgress, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowDownIcon } from "icons"
import { grey, dark } from 'theme/colors';
import { useEffect } from 'react';
import { setQuestionsAsync } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const questionsAndAnswers = [
    { question: 'Водитель уведомит меня о начале доставки доставки?', answers: 'Есть товары, которые можно купить сразу на сервисе, и товары, для покупки которых нужно перейти на сайт магазина. Условия их получения отличаются.    В этом разделе описаны условия для товаров, которые можно купить. Также некоторые товары, которые продаются на Маркете, доставляются непосредственно продавцами и имеют пометку об этом. Для таких товаров могут быть доступны не все возможности, описанные ниже.' },
    { question: 'Мне нужна помощь в разгрузке товара (дополнительная услуга), что делать?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
    { question: 'Заказ доставили, что то от меня требуется?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
    { question: 'Что делать если товар не тот, или ненадлежащего качества?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
    { question: 'У меня крупный заказ (5 и более тонн груза), у вас есть доставка и разгрузка манипулятором?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
    { question: 'Сколько времени дается на самостоятельную разгрузку товара?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
    { question: 'Ваша доставка опоздала, как можно помочь вам улучшить свой уровень сервиса?', answers: 'Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,Ответ,' },
]

export const Accordions = () => {
    const dispatch = useDispatch()
    const { items, isLoading } = useSelector(state => state.questions)
    useEffect(() => {
        dispatch(setQuestionsAsync())
    }, [])
    return (
        <Box sx={{
            border: `1px solid ${grey[700]}`,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            my: 10,
            minHeight: 500,
            alignItems: 'center'
        }}>
            {isLoading ? (
                <CircularProgress size={80} />
            ) :
                (<Box sx={{ my: 10 }}>
                    <Typography sx={{ color: dark[600], fontWeight: 600, fontSize: 34, mb: 2.5, }}>Часто задаваемые вопросы</Typography>
                    {items.map((item) => (
                        <Accordion key={item.question} sx={{ maxWidth: 760, mb: 1.5, boxShadow: 'none', border: 'none', '&::before': { display: 'none' } }}>
                            <AccordionSummary sx={{ background: grey[500] }}
                                expandIcon={<ArrowDownIcon />}
                            >
                                <Typography sx={{ fontWeight: 500, fontSize: 18, color: dark[600], }}>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ background: grey[500] }}>
                                <Typography sx={{ fontWeight: 400, fontSize: 16, color: dark[600], }}>
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                </Box>)
            }
        </Box >
    )
}
