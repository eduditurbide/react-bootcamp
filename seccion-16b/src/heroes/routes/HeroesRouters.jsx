import { Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRouters = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    )
}
