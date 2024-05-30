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
    height: '8vh',
    padding: '0 2rem'
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

export const PostContainer = styled(Box)(({ latest }) => ({
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: latest ? 'column' : 'row',
    gap: latest ? '' : '.8rem',
    minWidth: latest ? '48%' : '',
    flex: latest ? 1 : '',
    position: latest ? 'relative' : '',
    // border: '1px solid green',
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

export const Flex = styled(Box)(({ gap }) => ({
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    gap: gap || '1rem',
    justifyContent: 'space-between'
}))
