import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        color:${props => (props.darkMode ? 'white' : 'black')};
    }
    @media screen and (max-width: 320px) {
        font-size: 14px;
`