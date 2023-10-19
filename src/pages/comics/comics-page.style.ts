import styled from "styled-components";

export const ComicsPageStyle = styled.main`
    padding-top: 75px;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const SearchForComic = styled.section`
    width: 100vw;

    #search-bar{
        position: sticky;
        top: 74px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: .5rem;
        background-color: black;
        color: white;

        h1{
            font-family: var(--font-marvel);
            font-size: 1.5rem;
        }

        input{
            border-radius: 8px;
            padding: 8px;
        }
        #search-results{
            font-size: .7rem;
            >span{
                
            color: var(--marvel-red);
            }
        }
    }
`

export const NewestComicsStyle = styled.section`
    width: 100vw;
    padding: 1rem;
    h1{
        font-family: var(--font-marvel);
        font-size: 32px;
        text-align: center;
    }

`