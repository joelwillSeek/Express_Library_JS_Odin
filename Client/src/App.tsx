import { Route, Routes } from 'react-router-dom'
import HomePage from './views/home_page/HomePage'
import SideBarPage from './views/sidebar_page/SideBarPage'
import style from "./app.module.css";

function App() {
 
 
  return (
    <>
    <div className={style.container}>
    <SideBarPage/>
     <Routes>
        <Route path="/" element={<HomePage />} />
     </Routes>

     </div>
    </>
  )
}

export default App
