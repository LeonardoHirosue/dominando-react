import PlanetsScreen from "./screens/planets"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PlanetsScreen/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes