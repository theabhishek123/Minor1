import React from 'react'
import Theader from './Theader';
import Tmenubar from './Tmenubar';
import styles from "../student/userforms.module.css";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
function AddResources() {

  const navigate = useNavigate();

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('courseId', e.target.courseId.value);
        formData.append('video', e.target.video.files[0]);
        console.log("Hello")
        try {
            const response = await Axios.post("http://localhost:8081/AddResource", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data === "Yes") {
                alert("Added Successfully");
                navigate("/AddResources");
            } else {
                alert("Try Again Later");
                navigate("/AddResources");
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };

  return (
    <div>
      <div><Theader/></div>
    <div><Tmenubar/></div>
    <div className="center-content">
        
          <form className={styles.StudentProfile1} onSubmit={SubmitHandler}>
          <center><h2>Add Resources</h2></center>
            <br/>
            <br/>
            <div className={styles.formgroup}>
              <label>Course Id</label>
              <input type="text" name="courseId" placeholder='enter course Id'/>
            </div>
            <div className={styles.formgroup}>
              <label>File</label>
              <input className="upload-input" type="file" name="video" />
            </div>
            {/* <button type="submit">Upload</button> */}
            <div className={styles.formgroup}>
            <button type='submit'>Upload</button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default AddResources
