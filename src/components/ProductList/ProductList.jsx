import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { SecondaryButtonIcon, PrimaryButton } from "../Button/Button"
import { RightIcon } from "icons"
import { grey, white, dark } from "../../theme/colors"

export const ProductList = ({ items, title, onClick, btnText }) => {
  return (
    <Box component="section" py={10}>
      <Box display="flex" justifyContent="space-between" mb="18px">
        <Typography fontSize={34} fontWeight={600}>
          {title}
        </Typography>
        <SecondaryButtonIcon onClick={onClick} icon={<RightIcon />}>
          Все акции
        </SecondaryButtonIcon>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {items?.map((item) => (
            <Grid key={item.id} item xs={6}>
              <Box display="flex" sx={{ border: "1px solid #E8E9EA" }}>
                <Box
                  position="relative"
                  width="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt="Sonara"
                    height={200}
                    maxWidth='100%'
                    sx={{ objectFit: 'cover' }}
                  />
                  <Typography
                    position="absolute"
                    left={16}
                    top={16}
                    border="2px solid #FBE303"
                    py={0.5}
                    px={1}
                    bgcolor={white}
                    fontSize={15}
                    fontWeight={500}
                    lineHeight={1}
                  >
                    -{item.discountValue}%
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  width="50%"
                  sx={{ borderLeft: "1px solid #E8E9EA" }}
                  p={2}
                >
                  <Typography fontSize={16} color={dark[600]} fontWeight={500}>
                    {item.name}
                  </Typography>
                  <Box>
                    <Box display="flex" alignItems="center">
                      <Typography
                        fontSize={20}
                        fontWeight={700}
                        color={dark[500]}
                      >
                        {item.price} ₽
                      </Typography>
                      <Typography
                        ml={1}
                        fontSize={16}
                        fontWeight={500}
                        color={grey[600]}
                        sx={{ textDecoration: "line-through" }}
                      >
                        {item.oldPrice} ₽
                      </Typography>
                    </Box>
                    <PrimaryButton
                      sx={{
                        width: "100%",
                        mt: 1,
                        color: dark[600],
                        fontWeight: 600,
                      }}
                    >
                      В корзину
                    </PrimaryButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
