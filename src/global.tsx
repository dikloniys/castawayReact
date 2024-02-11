import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        line-height: 27px;
        font-family: 'DMSans';
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(255, 255, 255, 1);
    }
    a {
        text-decoration: none; 
      }
      ul{
        list-style-type: none;
      }
`