import styled from '@emotion/styled'
import { PrimaryLight } from './utitls'

export const ParentList = styled('nav')(() => ({
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