import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--text);
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    html{
        background: var(--primary);
    }
    :root{
        --primary: #FFFFFF;
        --text: #000;
        --button: #F14F5B;
        --text-muted: #8B8B8B;
        --button-save: #3DBA68;
        
    }
`;
