import styled from '@emotion/styled'
import { PrimaryDark, PrimaryLight } from './utitls'
import { Box, Button } from '@mui/material'

export const NavList = styled('nav')(() => ({
    display: 'flex',
    gap: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    position: 'fixed',
    width: '100%',
    zIndex: '999',
    padding: '1rem 3rem',
    '& ul': {
        display: 'flex',
        listStyleType: 'none',
        gap: '2rem',
        '& a': {
            color: PrimaryLight,
            textDecoration: 'none',
        }
    }
}))

export const ContainerBox = styled(Box)(() => ({
    padding: '6rem 3rem 0',
}))

export const PostContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    paddingBottom: '10px',
    '& >*:not(img)': {
        padding: '0 10px'
    }
}))

export const ButtonBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
}))

export const CustomButton = styled(Button)(() => ({
    border: '0',
    padding: '8px 15px',
    backgroundColor: PrimaryDark,
    color: PrimaryLight,
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '5px'
}))