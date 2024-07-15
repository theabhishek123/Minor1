// import React from 'react'
// import Theader from './Theader';
// import Tmenubar from './Tmenubar';
// import "../student/userhome.css";
// import styles from "../student/studentProfile.module.css"
// import styles1 from "../student/login.module.css";
// import Axios from "axios"
// import { useNavigate } from 'react-router-dom';
// function EditTeacherProfile() {


    
//     const navigate=useNavigate();
//   const SubmitHandler=(e)=>{
//     e.preventDefault();
//     var data={}
//     var formData=new FormData(e.target);
//     formData.forEach((value,key)=>{
//       data[key]=value;
//     })
//     Axios.post("http://localhost:8081/TeacherProfile",data)
//     .then((response)=>{
//       if(response.data=="Yes"){
//         alert("Updated Successfully")
//         navigate("/TeacherProfile")
//       }
//       else{
//         alert("try Again Later");
//         navigate("/EditTeacherProfile");
//       }
//     })
//   }

//   return (
//     <div>
//             <div><Theader /></div>
//             <div><Tmenubar /></div>
//             <div>
//                 <center>
//                     <div className={styles1.loginFormContainer}>
//                         <form className={styles1.loginform1} onSubmit={SubmitHandler}>
//                             <div className={styles1.formgroup}><label>First Name</label><input type="text" name='name' placeholder='First Name' required/></div>
//                             <div className={styles1.formgroup}><label>Mobile Number</label><input type="text" name='phone' placeholder='enter mobile number' required/></div>
//                             <div className={styles1.formgroup}><label>State</label><select name='state'><option>Select</option><option value={"Karnataka"}>Karnataka</option><option value={"Maharashtra"}>Maharashtra</option></select></div>
//                             <div className={styles1.formgroup}><label>Email-ID</label><input type="email" name='email' placeholder="enter mail id" required/></div>
//                             <div className={styles1.formgroup}><label>Education</label><input type="text" name='education' placeholder='education' required/></div>
//                             <div className={styles1.formgroup}><button type="submit">Update</button></div>
//                         </form>
//                     </div>
//                 </center>
//             </div>
//         </div>
//   )
// }

// export default EditTeacherProfile
import React from 'react'
import Theader from './Theader';
import Tmenubar from './Tmenubar';
import "../student/userhome.css";
import styles from "../student/userforms.module.css";
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
function EditTeacherProfile() {


    
    const navigate=useNavigate();
  const SubmitHandler=(e)=>{
    e.preventDefault();
    var data={}
    var formData=new FormData(e.target);
    formData.forEach((value,key)=>{
      data[key]=value;
    })
    Axios.post("http://localhost:8081/TeacherProfile",data)
    .then((response)=>{
      if(response.data=="Yes"){
        alert("Updated Successfully")
        navigate("/TeacherProfile")
      }
      else{
        alert("try Again Later");
        navigate("/EditTeacherProfile");
      }
    })
  }

  return (
    <div>
            <div><Theader /></div>
            <div><Tmenubar /></div>
            <div className="center-content">
                <div className={styles.StudentProfile}>
                    <form onSubmit={SubmitHandler}>
                        <div className={styles.formgroup}>
                            <label>First Name</label>
                            <input type="text" name='name' placeholder='First Name' required />
                        </div>
                        <div className={styles.formgroup}>
                            <label>Mobile Number</label>
                            <input type="text" name='phone' placeholder='Enter mobile number' required />
                        </div>
                        <div className={styles.formgroup}>
                            <label>State</label>
                            <select name='state'>
                                <option>Select</option>
                                <option value={"Karnataka"}>Karnataka</option>
                                <option value={"Maharashtra"}>Maharashtra</option>
                            </select>
                        </div>
                        <div className={styles.formgroup}>
                            <label>Email-ID</label>
                            <input type="email" name='email' placeholder="Enter email id" required />
                        </div>
                        <div className={styles.formgroup}>
                            <label>Education</label>
                            <input type="text" name='education' placeholder='Education' required />
                        </div>
                        <div className={styles.formgroup}>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditTeacherProfile
