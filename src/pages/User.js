import React from "react"
import io from "socket.io-client"
import axios from "axios"
import Loader from "../components/Loader";
let socket;

const  User=()=>{
    const [userData, setUserData]=React.useState([])
    const [loader, setLoader]=React.useState(true)
    const [setApt,  setAptData]=React.useState([])
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
            setAptData(resApt)
        

    }
    if(loader){
       return ( <h2>Loading.....</h2> )
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
                       setApt.length == 0 ? (
                           <h2>Not Appointment</h2>
                       )
                       :
                       <>
                        <div>
                           <h2>Your appointment</h2>
                           <h3>Doctor Name:- Rushikesh Desai</h3>
                            <h4>Contact: 989898765</h4>
                            <h4>Email: rmd@gmail.com</h4>
                            <h4>Date:{setApt.date}</h4>
                            <h4>Time :{setApt.time}</h4>
                            <button><i class="fa fa-trash" aria-hidden="true"></i> Appointment</button>
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