import React from 'react'
import chat from './components/chat'
import Helpdesk from './pages/Helpdesk'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Covid from './pages/Covid';
import Sidebar from './components/Sidebar';
import Connect from "./pages/Connect"
import Loader from "./components/Loader"
export default function Home() {
    const [menuId, setMenuId]=React.useState(0)
    const [loader, setLoader]=React.useState(true)
    setTimeout(()=>{
      setLoader(false)
    }, 2000)
    return (
        <>
         {
           loader ? <Loader/>
           :
           <div className="main-container">
            <Sidebar menuId={menuId} setMenuId={setMenuId}/>
            <div className="main-home">
               {
                 menuId == 0 &&
                 (
                   <>
                   <Helpdesk  menuId={menuId} setMenuId={setMenuId}/>
                   </>
                 )
               }
                {
                 menuId == 1 &&
                 (
                   
                   <>
                    <h1>Medicine</h1>
                   </>
                 )
               }
                {
                 menuId == 2 &&
                 (
                   <>
                   <Covid/>
                   </>
                 )
               }
                {
                 menuId == 3 &&
                 (
                   <>
                    <h1>General Check</h1>
                   </>
                 )
               }
                {
                 menuId == 4 &&
                 (
                   <>
                    <h1>Form</h1>
                   </>
                 )
               }
               {
                 menuId == 5 &&
                 (
                   <>
                    <Connect setMenuId={setMenuId}/>
                   </>
                 )
               }
            </div>
         </div>

         }
        </>
    )
}
