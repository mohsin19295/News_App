import styled from '@emotion/styled'
import { PrimaryColor, PrimaryDark, PrimaryLight, ProgressColor } from '../utitls'
import { Box, Button } from '@mui/material'

export const Nav = styled('nav')(() => ({
    display: 'flex',
    gap: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    position: 'fixed',
    width: '100%',
    zIndex: '999',
    padding: '1rem 2rem',
}))

export const Ul = styled('ul')(() => ({
    display: 'flex',
    listStyleType: 'none',
    gap: '0.5rem',
    '&>*': {
        color: PrimaryLight,
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: '10px',
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px 0px, rgba(0, 0, 0, 0.55) 0px 2px 16px 0px',
            // boxShadow: 'rgba(255, 255, 255, 0.4) 0px 2px 4px 0px, rgba(255, 255, 255, 0.55) 0px 2px 16px 0px',
            transition: 'box-shadow 0.2s ease-in-out',
        },
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