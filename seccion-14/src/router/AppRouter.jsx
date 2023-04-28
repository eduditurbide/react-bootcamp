import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRouters } from '../heroes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRouters />}/>
      </Routes>
    </>
  )
}
