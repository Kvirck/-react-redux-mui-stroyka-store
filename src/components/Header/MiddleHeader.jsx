import React from "react"
import {
  Box,
  Container,
  TextField,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import { white, yellow, dark, grey } from "theme/colors"
import logo from "icons/logo.svg"
import userIcon from "icons/user.svg"
import orderIcon from "icons/order.svg"
import basketIcon from "icons/basket.svg"
import { MenuIcon, SearchIcon } from "icons"
import { PrimaryButtonIcon } from "../Button/Button"
import { LogoIcon } from "../../assets/icons"
import { Link } from 'react-router-dom';

const stylesButton = {
  bgcolor: yellow[500],
  color: dark[500],
  borderRadius: 0,
  boxShadow: "none",
  height: 48,
  mr: 2,
  py: 1.5,
  "& path": {
    transition: "0.25s",
  },
  "&:hover": {
    bgcolor: dark[600],
    color: white,
  },
  "&:hover path": {
    color: white,
    bgcolor: white,
    stroke: white,
  },
}

const stylesInput = {
  "& > div": {
    height: 48,
    borderRadius: 0,
    width: 440,
    "&:hover:not(.Mui-disabled):before": {
      borderWidth: "2px",
    },
    "&:before": {
      borderBottomColor: grey[700],
    },
    "&:after": {
      borderBottomColor: grey[700],
    },
    "& input": {
      pt: 1.25,
      fontWeight: 500,
      fontSize: 18,
      color: dark[900],
    },
  },
}

export const MiddleHeader = () => {
  const navItems = [
    { label: "Профиль", icon: userIcon, link: '/profile' },
    { label: "Заказы", icon: orderIcon, link: '/orders' },
    { label: "Корзина", icon: basketIcon, link: '/basket' },
  ]
  return (
    <Box py={2}>
      <Container sx={{ maxWidth: "1160px" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link to="/"><LogoIcon /></Link>
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <Link style={{ textDecoration: 'none' }} to='/catalog'>
                <PrimaryButtonIcon icon={<MenuIcon />}>Каталог</PrimaryButtonIcon>
              </Link>
              <TextField
                variant="filled"
                placeholder="Поиск"
                classes={{ underline: "red" }}
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
                sx={stylesInput}
              />
            </Box>
            <Box ml={2}>
              <List sx={{ display: "flex", '& a': { textDecoration: 'none', } }}>
                {navItems.map((item) => (
                  <Link key={item.label} to={item.link}>
                    <ListItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        color: grey[900],
                        cursor: "pointer",

                        "&:last-child": {
                          pr: 0,
                        },
                        "& :hover": {
                          color: dark[600],
                        },
                      }}
                    >
                      <img src={item.icon} />
                      <Typography fontSize={15} fontWeight={500}>
                        {item.label}
                      </Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
