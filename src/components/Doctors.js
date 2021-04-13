// import React from 'react'
 import axios from "axios"
// export default function Doctors({this.prop.setMenuId}) {
//     const [doctors, setDoctors]=React.useState([])
//     React.useEffect(()=>{
//         fetchData()
//     },[])
//     const fetchData= async ()=>{
//     axios.get("http://localhost:3800/doctors")
//   .then(function (response) {
//     setDoctors(response)
//     console.log(doctors);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
//     }
//     return (
//         <>
//         <div className="Specialities">
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>
        
//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button onClick={()=>this.prop.setMenuId(4)}><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button onClick={()=>this.prop.setMenuId(5)} style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>
        
//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>
        
//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>
        
      
//      </div>

    
//      </>
//     )
// }
import React, { Component } from 'react'

export default class Doctors extends Component {
    constructor(props){
        super(props)
        this.state={
            doctors:[],
            
        }
       
    }
   
    async componentWillMount(){
       const res=await axios.get("http://localhost:3800/doctors")
        this.setState({doctors:res.data})
        console.log(this.state.doctors)

      
      
    }
    
    render() {
        return (
        <>
        <div className="Specialities">
         {
     this.state.doctors.map(doc=>{
        <div className="Specialities-card">
           <div>
            <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
            <div>
            <h5>{doc.firstName} firstname</h5>
            <h6>MBBS, DNB (7 Year Exp)</h6>
             {/* <h6>7 years of experience</h6> */}
            <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
            {/* <h6>Sector 7 Banglore</h6> */} 
            </div>
           </div>
           <br/>
         <span className="cat-doc">Arthopedic</span>
        
         <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
             <button onClick={()=>this.props.setMenuId(4)}><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
             <button onClick={()=>this.props.setMenuId(5)} style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
         </div>
        </div>
             })
         }

        
      
     </div>

    
     </>
        )
    }
}
