import React, { useEffect, useState } from 'react'
import Uheader from './Uheader'
import UserMenuBar from './UserMenuBar'
import { PDFViewer, Document, Page, View, Image } from '@react-pdf/renderer';
import styles2 from '../Teacher/DisplayCourses.module.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudyMaterials() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchTeacherCourses() {
  //     try {
  //       const response = await Axios.get(`http://localhost:8081/enrolled-study-materials`);
  //       setCourses(response.data);
  //       console.log(response.data)
  //     } catch (error) {
  //       console.error('Error fetching teacher courses:', error);
  //     }
  //   }
  //   fetchTeacherCourses();
  // }, []);

  useEffect(() => {
    async function fetchTeacherCourses() {
      try {
        const response = await Axios.get(`http://localhost:8081/enrolled-study-materials-FileSystem`);
        setCourses(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching teacher courses:', error);
      }
    }
    fetchTeacherCourses();
  }, []);

  const openFile = (base64Data, fileName) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const array = new Uint8Array(reader.result).subarray(0, 4);
      const header = Array.from(array).map(byte => byte.toString(16)).join('').toUpperCase();
      let mimeType;
      switch (header) {
        case '25504446': // PDF
          mimeType = 'application/pdf';
          break;
        case '504B0304': // ZIP
          mimeType = 'application/zip';
          break;
        case '52617221': // RAR
          mimeType = 'application/x-rar-compressed';
          break;
        case '377ABCAF271C': // 7z
          mimeType = 'application/x-7z-compressed';
          break;
        case 'D0CF11E0': // DOC or DOCX
          mimeType = 'application/msword';
          break;
        case '504B0304': // PPT or PPTX
          mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
          break;
        default:
          console.error('Unsupported file format');
          return;
      }
      console.log(header)
      if (mimeType) {
        if (mimeType === 'application/pdf') {
          const MyPdfDocument = () => (
            <Document>
              <Page size="A4">
                <View>
                  <Image src={`data:image/jpeg;base64,${base64Data}`} />
                </View>
              </Page>
            </Document>
          );

          const pdfBlob = new Blob([base64toBlob(base64Data)], { type: 'application/pdf' });
          const pdfUrl = URL.createObjectURL(pdfBlob);
          const pdfWindow = window.open(pdfUrl, '_blank');
          if (!pdfWindow) {
            alert('Please allow pop-ups for this website');
          }
        } else if (mimeType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
          const viewerUrl = `https://docs.google.com/viewer?url=data:${mimeType};base64,${base64Data}&embedded=true`;
          window.open(viewerUrl);
        } else if (mimeType === 'application/msword') {
          console.log('Opening DOC file:', fileName);
        }
      } else {
        console.error('Unsupported file format:', header);
      }
    };
    reader.readAsArrayBuffer(base64toBlob(base64Data));
  };




  const base64toBlob = (base64Data) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: 'application/octet-stream' });
  };

  const downloadFile = (base64Data, fileName) => {
    const blob = base64toBlob(base64Data);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div><Uheader /></div>
      <div><UserMenuBar /></div>
      {/* <div className={`${styles2.CContainer} ${styles2.smc}`}> */}
      <div className='materialContainer' >

        <ul style={{ display: 'flex',flexDirection:'row', gap: '10px', flexWrap: 'wrap', padding: 0, listStyleType: 'none' }}>
          {courses.map((course) => (
            <li key={course._id} style={{ flex: '1 1 50%', boxSizing: 'border-box', margin: '10px' }}>
              {/* <div className={styles2.thumbnail} onClick={() => openFile(course.pdf_file, course.course_name)}>
              <img src={`data:image/jpeg;base64,${course.thumbnail}`} alt={`Course thumbnail for ${course.course_name}`} /> */}
              {/* <div className={styles2.thumbnail} onClick={() => openFile(course.pdf_file_data, course.course_name)}>
              <img src={`data:image/jpeg;base64,${course.thumbnail_data}`} alt={`Course thumbnail for ${course.course_name}`} />
              </div>
              <p>
              <b>Course:</b> {course.course_name}
              </p>
              <button onClick={() => downloadFile(course.pdf_file_data, `${course.course_name}.pdf`)}>
              Download PDF
              </button> */}

              <div class="card">
                <div className="top-section" onClick={() => openFile(course.pdf_file_data, course.course_name)}
                  style={{
                    backgroundImage: `url(${`data:image/jpeg;base64,${course.thumbnail_data}`})`,
                    backgroundSize: '100% 110%',
                    backgroundPosition: 'center -7%',
                    backgroundRepeat: 'no-repeat'
                  }} >
                  <div class="border">
                  </div>
                </div>
                <div class="bottom-section">

                  <span class="title">Course:{course.course_name}</span>
                  <button class="cssbuttons-io-button" onClick={() => downloadFile(course.pdf_file_data, `${course.course_name}.pdf`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
                    </svg>
                    <span>Download</span>
                  </button>

                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default StudyMaterials
