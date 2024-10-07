import styled from '@emotion/styled'
import { PrimaryColor, PrimaryDark, PrimaryLight, ProgressColor } from '../utils'
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
    padding: '.5rem 2rem',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    '@media (max-width: 767px)': {
        padding: '.5rem 1rem',
        gap: '2%',
        fontSize: '14px'
    }
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
    padding: '0 8rem 2rem',
    '@media (max-width: 767px)': {
        padding: '0 2rem 2rem'
    }
}))

export const PostContainer = styled(Box)`
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ type }) => (type === 'latest' ? 'column' : 'row')};
  gap: ${({ type }) => (type === 'latest' ? '0' : '.8rem')};
  min-width: ${({ type }) => (type === 'latest' ? '48%' : '70%')};
  flex: ${({ type }) => (type === 'latest' ? 1 : 'initial')};
  position: ${({ type }) => (type === 'latest' ? 'relative' : 'static')};
  height: ${({ type }) => (type === 'latest' ? '37.5vh' : 'recent' ? '12vh' : '100%')};

  @media (max-width: 1024px){
    height: ${({ type }) => (type === 'latest' ? '28vh' : 'recent' ? '10vh' : '100%')};
  }
  @media (max-width: 320px){
    height: ${({ type }) => (type === 'latest' ? '40vh' : 'recent' ? '15vh' : '100%')};
  }
`;


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
    overflow: 'scroll',
    display: 'flex',
    flexWrap: 'wrap',
    gap: gap || '1rem',
    justifyContent: 'space-between',
    '@media (max-width: 1024px)': {
        height: '62vh'
    },
}))

export const SectionContainer = styled(Box)`
width: ${({ type }) => (type === 'latest' ? '70%' : type === 'recent' ? '30%' : '100%')};
border: '1px solid red';
  @media (max-width: 1024px) {
    width: 100%;
  }
`;