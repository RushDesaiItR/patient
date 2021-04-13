import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Doctors from "../components/Doctors"

export default function Helpdesk({setMenuId}) {
   const [tab, setTab]=React.useState(0)
    return (
        <div className="helpdesk">
      
           <div className="helpdesk-banner2 normal">
           <h3>Sehat Apki 
                   <br/>
                   <span style={{fontSize: "70px"}}>
                     Sath Hamara
                   </span>
               </h3>
               <a href="https://webinar-webrtc-siom-network.herokuapp.com?id=1234">Go</a>
               <form action="https://webinar-webrtc-siom-network.herokuapp.com">
                <input type="hidden" name="id" value="3644"/>
                <button  type="submit">
                Connect
               </button>
              </form>
           <div className="helpdesk-banner">
             <div>
              

               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-user-md" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>Certified Patner Doctors</span>
                       <span>You Can Trust</span>
                   </div>
               </div>
               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-flask" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>Home Delivery Of</span>
                       <span>Medicines</span>
                   </div>
               </div>
               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-ambulance" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>24 * 7</span>
                       <span>Ambulance Service</span>
                   </div>
               </div>
             </div>
             
               <img src="https://www.freevector.com/uploads/vector/preview/30913/doctor_man_Mesa_de_trabajo_1.jpg"/>
            
           </div>
           </div>

         <br/><br/>

           <div className="helpdesk-banner2 normal">
               <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                 <span style={{fontSize:"30px", fontWeight:"bolder"}}>Doctors</span> 
                 <div className="doctor-search-bar" >
                   <input placeholder="Search Doctor" type="text"/>
                   <i class="fa fa-search" aria-hidden="true"></i>
                 </div>
               </div>
               <div className="catagory-tabs">
                   <button className={tab == 0 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(0)}>All</button>
                   <button className={tab == 1 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(1)}>Pediatricians</button>
                   <button className={tab == 2 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(2)}>General Surgeon</button>
                   <button className={tab == 3 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(3)}>Cardiologist:</button>
                   <button className={tab == 4 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(4)}>Dentist</button>
                   <button className={tab == 5 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(5)}>Gynecologist</button>
                   <button className={tab == 6 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(6)}>Cardiologist:</button>
                   <button className={tab == 7 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(7)}>Dentist</button>
                   <button className={tab == 8 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(8)}>Gynecologist</button>
                   <button className={tab == 9 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(9)}>Gynecologist</button>
               </div>
               {
                  tab==0 &&  <Doctors setMenuId={setMenuId}/>
               }
                {
                  tab==1 && 
                  <center>
                     <img style={{width:"300px"}} src="https://banner2.cleanpng.com/20180222/ude/kisspng-physician-dentist-patient-vector-cartoon-doctor-to-the-patient-to-see-the-te-5a8ebd4e920f87.5892211215193040145983.jpg"/>
                     <h6>No Doctors Yet</h6>
                  </center>
               }
               {
                  tab==2 &&  <h1>jjj</h1>
               }
                {
                  tab==3 &&   <h1>jjj</h1>
               }
                {
                  tab==4 &&   <h1>jjj</h1>
               }
               {
                  tab==5 &&   <h1>jjj</h1>
               }
           </div>
        </div>
    )
}