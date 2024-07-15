import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Theader from './Theader';
import styles1 from '../student/Enrol.module.css';
import "../Teacher/videoDisplay.css"
import CHeader from './CHeader';
import logo from "../../back.webp"
const Course = () => {

  const letterColors = {
    A: '#ff5733',
    B: '#33ff57',
    C: '#5733ff',
    D: '#ff33ee',
    E: '#33ffee',
    F: '#ff5733',
    G: '#33ff57',
    H: '#5733ff',
    I: '#ff33ee',
    J: '#33ffee',
    K: '#ff5733',
    L: '#33ff57',
    M: '#5733ff',
    N: '#ff33ee',
    O: '#33ffee',
    P: '#ff5733',
    Q: '#33ff57',
    R: '#5733ff',
    S: '#ff33ee',
    T: '#33ffee',
    U: '#ff5733',
    V: '#33ff57',
    W: '#5733ff',
    X: '#ff33ee',
    Y: '#33ffee',
    Z: '#ff5733',
    // Add more letters and colors as needed
  };
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [comments, setComments] = useState([]);
  const scrollableContainerRef = useRef(null);

  const handleVideoClick = (video_data, fileName, video) => {
    const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
    const fileType = getFileType(fileExtension);
    const base64Data = atob(video_data);
    const arrayBuffer = new ArrayBuffer(base64Data.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < base64Data.length; i++) {
      uintArray[i] = base64Data.charCodeAt(i);
    }

    const blob = new Blob([uintArray], { type: fileType });
    const url = URL.createObjectURL(blob);
    setVideoUrl(url);
    setCurrentVideo(video);
  };

  function getFileType(fileExtension) {
    switch (fileExtension) {
      case "mp4":
        return "video/mp4";
      case "avi":
        return "video/avi";
      case "mov":
        return "video/quicktime";
      case "wmv":
        return "video/x-ms-wmv";
      case "flv":
        return "video/x-flv";
      case "mkv":
        return "video/x-matroska";
      default:
        return "video/unknown";
    }
  }

  useEffect(() => {
    async function fetchVideoResources() {
      try {
        const response = await Axios.get(`http://localhost:8081/GetResources/${courseId}`);
        setCourses(response.data);
        if (response.data.length > 0) {
          const firstVideo = response.data[0];
          handleVideoClick(firstVideo.video_data, firstVideo.video, firstVideo);
        }
      } catch (error) {
        console.error('Error fetching teacher courses:', error);
      }
    }
    fetchVideoResources();
  }, [courseId]);

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      videoRef.current.load();

    }
  }, [currentVideo]);

  useEffect(() => {
    if (videoUrl) {
      return () => {
        URL.revokeObjectURL(videoUrl);
      };
    }
  }, [videoUrl]);


  const SubmitHandler = (e) => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data['course_id'] = courseId;

    Axios.post("http://localhost:8081/SaveComment", data)
      .then((response) => {
        if (response.data) {
          console.log('commented');
          // Append the new comment to the comments state
          setComments((prevComments) => [...prevComments, { ...data, course_id: courseId, comment: data['comment'] }]);
          document.getElementById('commentInput').value = '';
        } else {
          console.log('false');
        }
      })
      .catch((error) => {
        console.error('Error saving comment:', error);
      });
  };


  useEffect(() => {
    
    async function fetchComments() {
      try {
        const response = await Axios.get(`http://localhost:8081/GetComments/${courseId}`);
        setComments(response.data);
        
      } catch (error) {
        console.error('Error fetching Comments:', error);
      }
    }
    fetchComments();

  }, [comments]);



  return (
    <div className='courseBody'>
      <div>
        <CHeader />
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* <div>
        <h2>Course ID: {courseId}</h2>
      </div> */}
      <div className='videoContainer'>
        {videoUrl && (
          <video className='video' ref={videoRef} controls style={{ objectFit: 'contain', backgroundColor: '#000' }}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        )}
      </div>

      <div className='eplistContainer'>
        <table className='eplist'>
          <thead>
            <tr>
              <th>Resource Id</th>
              <th>Video</th>
              <th>play</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan={3}>No Data Available</td>
              </tr>
            ) : (
              courses.map((video,index) => (
                <tr key={video.resource_id}>
                  <td>{index+1}</td>
                  <td>{video.video}</td>
                  <td>
                    <input className='play' type='button' value={'Play'} onClick={() => handleVideoClick(video.video_data, video.video, video)}/>
                  </td>
           
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


      <div className='Discussion-form'>
        <div>
          <h3>Discussions</h3>
          <div className="scrollable-container" ref={scrollableContainerRef}>
            {comments.map((comment, index) => (
              <div className='Comments' key={comment._id}>
                <div>
                  <div className="clogo" style={{ backgroundColor: letterColors[comment.user_name?.[0]?.toUpperCase()] || '#000000', color: 'white' }}>
                    {comment.user_name && comment.user_name.split(' ').map((name, index) => {
                      if (index === 0 || index === comment.user_name.split(' ').length - 1) {
                        return name.charAt(0).toUpperCase();
                      } else {
                        return null;
                      }
                    })}
                  </div>
                  <p>@ {comment.user_name}</p>
                </div>
                <div>
                  <p>{comment.comment}</p>
                </div>
              </div>

            ))}
          </div>
          <br /><br />
        </div>

        <div>
          <form onSubmit={SubmitHandler}>
            <div>
              <img src={logo} className='clogo' alt="Logo" />
              <input type='search' name='comment' id="commentInput" />
            </div>
            <input type='submit' value={'send'} />
          </form>
        </div>

      </div>
    </div>
  );
};

export default Course;