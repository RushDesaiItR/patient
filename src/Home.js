import React from 'react'
import chat from './components/chat'
import Helpdesk from './pages/Helpdesk'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Covid from './pages/Covid';
import Sidebar from './components/Sidebar';
import Connect from "./pages/Connect"
import Loader from "./components/Loader"
import GenralCheck from "./pages/GenralCheck"
import Form from"./pages/Form"
import User from"./pages/User"
import Medicine from"./pages/Medicine"
import Feedback from"./components/Feedback"
export default function Home() {
    const [menuId, setMenuId]=React.useState(0)
    const [loader, setLoader]=React.useState(true)
    const [childData, setChildData]=React.useState([])
    const [loggedIn, setLoggedIn]=React.useState(false)
    const [feedback, setFeedback]=React.useState(false)
    const [link, setLink]=React.useState()
    const sendDataForm=(data)=>{
      setChildData(data)
      setMenuId(4)
    }
   React.useEffect(()=>{
    const token =  localStorage.getItem("link");
    
    const time=localStorage.getItem("time");
    const date=localStorage.getItem("date");
    if (token) {
      setLink(token)
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false)
    }
   })
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
                   <Helpdesk sendDataForm={sendDataForm}  menuId={menuId} setMenuId={setMenuId}/>
                   </>
                 )
               }
                {
                 menuId == 1 &&
                 (
                   
                   <>
                    <Medicine/>
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
                    <GenralCheck/>
                   </>
                 )
               }
                {
                 menuId == 4 &&
                 (
                   <>
                    <Form childData={childData}/>
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
                {
                 menuId == 6 &&
                 (
                   <>
                     <User setMenuId={setMenuId}/>
                   </>
                 )
               }
            </div>
            {
            
              loggedIn && <div className={"oppintment-card"}>
                 <div className="oppintment-card-inner">
                 <i class="fa fa-video-camera" aria-hidden="true"></i>
                    <div>
                       <h3>Your Appointment</h3>
                       {/* <form action="http://localhost:7000/">
                         <input type="text" value={link}/>
                          <button type="submit">Start</button>
                       </form> */}
                      <a class="oppintment-card-button" href={`https://webinar-webrtc-siom-network.herokuapp.com/?name=${link}`}>Connect</a>
                    </div>
                 </div>
              </div>
              
             
            }
            <>
               <div class="feedback-btn" onClick={()=>{setFeedback(!feedback)}}>
                  <i class="fa fa-comments" aria-hidden="true"></i>
              </div>  
               {
                 feedback && (
                 
                  <div class="feedback-form">
                      
                       <Feedback/>
                 </div> 
                 )
               }
             </>  
        
         </div>
       

         }
        </>
    )
}
