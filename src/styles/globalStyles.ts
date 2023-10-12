import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --grey--scale--grey-0: rgba(11, 13, 13, 1);
        --grey--scale--grey-1: rgba(33, 37, 41, 1);
        --grey--scale--grey-2: rgba(73, 80, 87, 1);
        --grey--scale--grey-3: rgba(134, 142, 150, 1);
        --grey--scale--grey-4: rgba(173, 181, 189, 1);
        --grey--scale--grey-5: rgba(206, 212, 218, 1);
        --grey--scale--grey-6: rgba(222, 226, 230, 1);
        --grey--scale--grey-7: rgba(233, 236, 239, 1);
        --grey--scale--grey-8: rgba(241, 243, 245, 1);
        --grey--scale--grey-9: rgba(248, 249, 250, 1);
        --grey--scale--grey-10: rgba(253, 253, 253, 1);
        
        --marvel-red: #ED1D24;

        
        --colors--fixed--white-fixed: rgba(255, 255, 255, 1);
        /* Text-size styles */
        --heading---heading-1-700: 44px;
        --heading---heading-2-600: 36px;
        --heading---heading-3-500: 32px;
        --heading---heading-3-600: 32px;
        --heading---heading-4-600: 28px;
        --heading---heading-4-500: 28px;
        --heading---heading-5-500: 24px;
        --heading---heading-5-600: 24px;
        --heading---heading-6-500: 20px;
        --heading---heading-6-600: 20px;
        --heading---heading-7-500: 16px;
        --heading---heading-7-600: 16px;

        --inputs--buttons--input-label: 14px;
        --inputs--buttons--input-placeholder: 16px;
        --inputs--buttons--button-big-text: 16px;
        
        --text--body-1-400: 16px;
        --text--body-1-600: 16px;
        --text--body-2-400: 14px;
        --text--body-2-500: 14px;

        --padding-1: 1rem;
        --padding-2: 2rem;

        --border-1: 8px;
        
        & ::-webkit-scrollbar{
            display: none;
        }

    }


`;
