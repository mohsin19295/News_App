import styled from '@emotion/styled'
import { PrimaryDark, PrimaryLight, ProgressColor } from '../utitls'
import { Box, Button } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'

export const NavList = styled('nav')(() => ({
    display: 'flex',
    gap: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    position: 'fixed',
    width: '100%',
    zIndex: '999',
    padding: '1.2rem 2rem',
    '& ul': {
        display: 'flex',
        listStyleType: 'none',
        gap: '1.5rem',
        '& a': {
            color: PrimaryLight,
            textDecoration: 'none',
            padding: '0 2px 3px',
            borderRadius: '10px',
            '&:hover': {
                borderBottom: `1px solid ${ProgressColor}`,
                transition: 'border 0.5s ease-in-out'
            },
        }
    }
}))

export const ButtonBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    marginTop: '2rem'
}))

export const PostContainer = styled(Box)(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    paddingBottom: '10px',
    backgroundColor: 'whitesmoke',
    borderRadius: '5px',
    flex: 1,
    '& >*:not(img)': {
        padding: '0 10px'
    }
}))


export const ReadMore = styled('a')(() => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '20px',
    backgroundColor: '#000000de',
    color: '#ffffff',
    fontSize: '12px',
    borderRadius: '5px',
    fontWeight: '400',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const PreNextButton = styled(Button)(({ disabled }) => ({
    border: '0',
    padding: '8px 15px',
    backgroundColor: disabled ? '#d3caca' : PrimaryDark,
    color: disabled ? '#000' : PrimaryLight,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '5px',
    opacity: disabled ? 0.5 : 1,
    '&:hover': {
        backgroundColor: disabled ? '#d3caca' : '#666',
    },
}));