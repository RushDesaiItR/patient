import React from "react"
import io from "socket.io-client"
import axios from "axios"
import Loader from "../components/Loader";
let socket;

const  User=()=>{
    const [userData, setUserData]=React.useState([])
    const [loader, setLoader]=React.useState(true)
    const [setApt,  setAptData]=React.useState([])
    const[aptLoader,setAptLoader]=React.useState(true)
    const[btnLoader,setBtnLoader]=React.useState(false)
    // socket = io("localhost:7000")
    // const sendMsg = ()=>{
    //     let msg ={
    //         name:"Rushikesh",
    //         message:"value",
    //       }
    //      //  appendMsg(msg, "outgoing")
    //        socket.emit("messagemy", msg) 
    // }
    React.useEffect(()=>{
        let token = localStorage.getItem("projectToken")
        let firstName = localStorage.getItem("firstName")
        let lastName = localStorage.getItem("lastName")
        getData(token, firstName, lastName)
    },2000)
    const getData=async(token,firstName, lastName)=>{
     
        const res = await axios({
            method: 'post',
            url: 'https://shrouded-scrubland-67974.herokuapp.com/user-data-patient',
            data:{
                firstName:firstName,
                lastName:lastName
                }
          })
          
          setUserData(res.data[0])
         if(userData){
            setLoader(false)
         }
         const resApt = await axios({
              method: 'post',
              url: 'https://shrouded-scrubland-67974.herokuapp.com/userby-opt',
              data:{
                     fullName:token
                  }
            })
           
            setAptData(resApt.data[0])
            
            // if(setApt){
            //     setAptLoader(false)
            //  }

    }
    const deleteApt = async() =>{
        let firstName = localStorage.getItem("firstName")
        let lastName = localStorage.getItem("lastName")
        setBtnLoader(true)
        const resApt = await axios({
            method: 'delete',
            url: `https://shrouded-scrubland-67974.herokuapp.com/user-data-patient/${firstName+" "+lastName }`,
           
          })
          setBtnLoader(false)
          setAptData(null)
    }
    if(loader){
       return ( <Loader/> )
    }
    else
    {
        return (
            <>
          
               <div className="normal">
               <h1>User Info</h1>
              
               <div className="row user-profile">
                     
                       <div>
                           <img src={userData.pic}/>
                           <h3>{ userData.firstName +" "+ userData.lastName }</h3>
                           <h4>Contact: {  userData.contact }</h4>
                           <h4>Email : { userData.email }</h4>
                           <h4>Address :{ userData.city }</h4>
                       </div>
                    
                   {
                       setApt == null ? (
                           <h2 style={{marginTop:"20px"}}>Not Appointment</h2>
                       )
                       :
                       <>
                        <div style={{alignSelf:"flex-end"}}>
                           <h2>Your appointment</h2>
                           <h3>Doctor Name:- Rushikesh Desai</h3>
                            <h4>Date:{setApt.Date}</h4>
                            <h4>Time :{setApt.Time}</h4>
                            {
                                btnLoader ?
                                <button className="btndanger" disabled>
                                   Removing.......
                                </button>
                                :
                                <button className="btndanger" onClick={()=>deleteApt()}>
                                <i class="fa fa-trash" aria-hidden="true"></i> Appointment
                                </button>
                            }

                        </div>
                       </>
                      
   
                   }
                  
               </div>
                
               </div>
           
            </>
          
        )
    }
 } 
 export default User;