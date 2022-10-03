import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { dark } from 'theme/colors';
import { DecrementButton, IncrementButton } from './../../components/Button/Button';

export const BasketProduct = () => {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '1fr',
            border: '1px solid #E8E9EA',
            mb: 2,
            position: 'relative'
        }}>
            <Box p={2}>
                <Box
                    height={200}
                    sx={{ objectFit: 'cover' }}
                    component='img'
                    maxWidth='100%'
                    src='data:image/jpeg;base64,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' />

            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: "1px solid #E8E9EA"
            }}
                p={2}>
                <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </Typography>
                <Typography
                    fontSize={20}
                    fontWeight={700}
                    color={dark[500]}
                >
                    449 ₽
                </Typography>
                <Box display='flex'>
                    <IncrementButton />
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: '1px solid #D1D1D3',
                        borderBottom: '1px solid #D1D1D3',
                        px: 9,
                        fontSize: 18,
                        color: dark[500],
                        fontWeight: 500
                    }}>
                        99
                    </Typography>
                    <DecrementButton />
                </Box>
            </Box>
            <Box p={2} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}  >
                <Box>
                    <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                        Код товара:
                    </Typography>
                    <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                        34078988-0047
                    </Typography>
                </Box>
                <Button sx={{
                    fontSize: 18,
                    color: dark[500],
                    textTransform: 'none',
                    fontWeight: 500,
                    border: '1px solid #D1D1D3',
                    borderRadius: 0
                }} variant="outlined">
                    Удалить товар
                </Button>
            </Box>
        </Box >
    )
}
