import { Route, Routes } from "react-router-dom"
import { HerosPage } from "../pages/heroes/heroes-page.index"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HerosPage/>}/>
            
        </Routes>
    )
}