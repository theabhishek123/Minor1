// import React from 'react'
// import Uheader from './Uheader'
// import UserMenuBar from './UserMenuBar'
// import "../student/userhome.css";
// import styles1 from "../student/login.module.css";
// import Axios from "axios"
// import { useNavigate } from 'react-router-dom';
// function EditProfile() {

//     const navigate=useNavigate();
//   const SubmitHandler=(e)=>{
//     e.preventDefault();
//     var data={}
//     var formData=new FormData(e.target);
//     formData.forEach((value,key)=>{
//       data[key]=value;
//     })
//     Axios.post("http://localhost:8081/StudentProfile",data)
//     .then((response)=>{
//       if(response.data=="Yes"){
//         alert("Updated Successfully")
//         navigate("/StudentProfile")
//       }
//       else{
//         alert("try Again Later");
//         navigate("/EditProfile");
//       }
//     })
//   }
//     return (
//         <div>
//             <div><Uheader /></div>
//             <div><UserMenuBar /></div>
//             <div>
//                 <center>
//                     <div className={styles1.loginFormContainer}>
//                         <form className={styles1.StudentProfile} onSubmit={SubmitHandler}>
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
//     )
// }

// export default EditProfile

import React from 'react';
import Uheader from './Uheader';
import UserMenuBar from './UserMenuBar';
import "../student/userhome.css";
import styles from "../student/userforms.module.css"; // Import your CSS module
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();
        var data = {};
        var formData = new FormData(e.target);
        formData.forEach((value, key) => {
            data[key] = value;
        });
        Axios.post("http://localhost:8081/StudentProfile", data)
            .then((response) => {
                if (response.data === "Yes") {
                    alert("Updated Successfully");
                    navigate("/StudentProfile");
                } else {
                    alert("Try Again Later");
                    navigate("/EditProfile");
                }
            });
    };

    return (
        <div>
            <Uheader />
            <UserMenuBar />
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
    );
}

export default EditProfile;
