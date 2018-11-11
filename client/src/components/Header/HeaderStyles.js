import styled from 'styled-components';
import theme from '../../styles/theme';
import media from '../../styles/media';

export const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem;
        background: ${theme.lightorange};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    ${media.tablet`
        margin: 0;
        text-align: center;
    `}
`;

export const HeaderStyle = styled.header`
    .bar {
        border-bottom: 10px solid ${theme.salmon};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-around;
        align-items: stretch;
        ${media.tablet`
            grid-template-columns: 1fr;
            justify-content: center;
        `};
    }
`;