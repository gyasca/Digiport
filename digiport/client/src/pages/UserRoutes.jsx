import { useContext, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './errors/NotFound'
import Home from './Home'
import Resume from './resume/Resume'
import PortfolioExample1 from '../components/exampleComponents/PortfolioExample1'
// import { UserContext } from '..'


function UserRoutes() {
    // Routes for admin pages. To add authenication so that only admins can access these pages, add a check for the user's role in the UserContext
    // const { setIsAdminPage } = useContext(UserContext);
    // const { user } = useContext(UserContext);

    // useEffect(() => {
    //     setIsAdminPage(false)
    // }, [])
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/portfolio-example-1" element={<PortfolioExample1 />} />
            {/* <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to={"/"} />} /> */}
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}

export default UserRoutes