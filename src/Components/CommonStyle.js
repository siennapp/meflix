import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const CommonStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none; 
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', 'Open Sans', sans-serif;
        padding-top: 60px;
        background: #0D0D0D;
        color: #F2F2F2;
    }
`

export default CommonStyle; 