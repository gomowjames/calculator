import { createGlobalStyle } from 'styled-components';

import IMBplexMono from './ibmplexmono-semibold-webfont.woff';
import IMBplexMonoWoff2 from './ibmplexmono-semibold-webfont.woff2';

export default createGlobalStyle`

@font-face {
    font-family: 'ibm_plex_monosemibold';
    src: url(${IMBplexMonoWoff2}) format('woff2'),
         url(${IMBplexMono}) format('woff');
    font-weight: normal;
    font-style: normal;

}
`;

