import styled from '@emotion/styled'
import { PrimaryColor, PrimaryDark, PrimaryLight, ProgressColor, ThemeColorLight } from '../utils'
import { Box, Button } from '@mui/material'

export const Nav = styled('nav')(() => ({
    display: 'flex',
    gap: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    position: 'fixed',
    width: '100%',
    height: '50px',
    zIndex: '99',
    padding: '0 2rem',
    overflowX: 'auto',
    whiteSpace: 'nowrap',

    '@media (max-width: 599px)':{
      padding: '0 1rem',
    }
}))

export const Ul = styled('ul')(() => ({
    display: 'flex',
    listStyleType: 'none',
    gap: '0.5rem',

    '& > a': {
      position: 'relative',
      color: PrimaryLight,
      textDecoration: 'none',
      padding: '5px',
      transition: 'all 0.2s ease-in-out',
  
    '@media (min-width: 960px)': {
       '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: '0',
        transform: 'translateX(-50%)',
        width: '2.5em',
        height: '2px',
        backgroundColor: 'transparent',
        borderRadius: '1px',
        transition: 'background-color 0.3s ease',
      },
  
      '&:hover::after': {
        backgroundColor: ThemeColorLight,
      },
  
      '&.active::after': {
        backgroundColor: ThemeColorLight,
      },

      'a.logo': {
        border: '1px solid #ccc'
      }
    }
    },
  }));

export const MobileMenu = styled(Ul)(({ isOpen }) => ({
  '@media (max-width: 960px)': {
    position: 'fixed',
    top: '50px',
    right: '2rem',
    background: '#000',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'start',
    padding: '1rem',
    zIndex: 999,
    transform: isOpen ? 'translateX(0)' : 'translateX(120%)',
    transition: 'transform 0.4s ease',
    width: '180px',

    '& > a.active': {
        color: ThemeColorLight
    },
  },

  '@media (max-width: 599px)': {
    right: '1rem'
  }
}));

export const Hamburger = styled('div')({
  display: 'none',
  cursor: 'pointer',
  '@media (max-width: 960px)': {
    display: 'block',
    zIndex: 1000,
  },
  '&.is-active div:nth-of-type(1)': {
    transform: 'translateY(8px) rotate(45deg)',
  },
  '&.is-active div:nth-of-type(2)': {
    opacity: 0,
  },
  '&.is-active div:nth-of-type(3)': {
    transform: 'translateY(-8px) rotate(-45deg)',
  },
});

export const Bar = styled('div')({
  width: '25px',
  height: '3px',
  backgroundColor: '#fff',
  margin: '5px',
  transition: '0.3s ease-in-out',
});

export const PostContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  flex-direction: ${({ type }) => (type === 'latest' ? 'column' : 'row')};
  gap: ${({ type }) => (type === 'latest' ? '0' : '.8rem')};
  min-width: ${({ type }) => (type === 'latest' ? '48%' : '70%')};
  flex: ${({ type }) => (type === 'latest' ? 1 : 'initial')};
  position: ${({ type }) => (type === 'latest' ? 'relative' : 'static')};
  height: ${({ type }) => (type === 'latest' ? '38vh' : 'recent' ? '12vh' : '100%')};

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
    // overflow: 'scroll',
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

export const FooterContainer = styled('footer')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
  backgroundColor: 'black',
  color: '#c5c4c4',
  padding: '5rem 2rem',

  '&>div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',

    '& a': {
      textDecoration: 'none',
      color: '#f1f1f1',

      '&:hover': {
        color: '#c5c4c4'
      }
    },

    '& p': {
      textAlign: 'center'
    }
  },

  '&>div:first-of-type>div': {
    padding: '0 1rem',
    maxWidth:' 200px',
    height: '60px',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.7'
      }
    }
  }
}))