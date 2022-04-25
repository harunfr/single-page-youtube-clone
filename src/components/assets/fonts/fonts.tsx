import { createGlobalStyle } from 'styled-components';

import kenyc from './kenyc.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'YT Sans Serif';
        src: local('YT Sans Serif'),
        url(${kenyc}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
