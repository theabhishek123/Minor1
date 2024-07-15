import React,{ useState } from 'react'
import "../student/userhome.css"

function Tmenubar() {
  
  return (
    <>
      <div id="AdminMenuBar">
        <a id="sl" href='/TeacherProfile'><div>Profile</div></a>
        <a id="sl" href='/AddStudyMaterials'><div>Study Materials</div></a>
        <a id="sl" href='/DisplayTCourse'><div>Courses</div></a>
        <a id="sl" href='/AddCourse'><div>New Course</div></a>
        <a id="sl" href='/AddResources'><div>Add Resources</div></a>
        <a id="sl" href='/StudentList'><div>Students List</div></a>
      </div>
    </>
  )
}

export default Tmenubar
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Sidebar.module.css'; // Import the CSS module

// const Tmenubar = () => {
//   const [sidebarClass, setSidebarClass] = useState('');
//   const [bodyClass, setBodyClass] = useState('');

//   const toggleSidebar = () => {
//     setSidebarClass(prevClass => (prevClass === '' ? styles.close : ''));
//   };

//   const searchSidebar = () => {
//     setSidebarClass('');
//   };

//   const toggleBodyClass = () => {
//     setBodyClass(prevClass => (prevClass === styles.dark ? '' : styles.dark));
//   };

//   const modeText = bodyClass === styles.dark ? 'Light mode' : 'Dark mode';

//   useEffect(() => {
//     const toggle = document.querySelector(`.${styles.toggle}`);
//     const searchBtn = document.querySelector(`.${styles.searchBox}`);
//     const modeSwitch = document.querySelector(`.${styles.toggleSwitch}`);

//     toggle.addEventListener('click', toggleSidebar);
//     searchBtn.addEventListener('click', searchSidebar);
//     modeSwitch.addEventListener('click', toggleBodyClass);

//     return () => {
//       toggle.removeEventListener('click', toggleSidebar);
//       searchBtn.removeEventListener('click', searchSidebar);
//       modeSwitch.removeEventListener('click', toggleBodyClass);
//     };
//   }, []);

//   return (
//     <nav className={`${styles.sidebar} ${sidebarClass}`}>
//       <header>
       
//         <i className={`bx bx-chevron-right ${styles.toggle}`}></i>
//       </header>
//       <div className={styles.menuBar}>
//         <div className={styles.menu}>
          
//           <ul className={styles.menuLinks}>
//             <li className={styles.navLink}>
//               <Link to="/">
//                 <i className="bx bx-home-alt icon"></i>
//                 <span className={`${styles.text} ${styles.navText}`}>Dashboard</span>
//               </Link>
//             </li>
//             <li className={styles.navLink}>
//               <Link to="/analytics">
//                 <i className="bx bx-bar-chart-alt-2 icon"></i>
//                 <span className={`${styles.text} ${styles.navText}`}>Analytics</span>
//               </Link>
//             </li>
//             <li className={styles.navLink}>
//               <Link to="/files">
//                 <i className="bx bx-file icon"></i>
//                 <span className={`${styles.text} ${styles.navText}`}>Files</span>
//               </Link>
//             </li>
//             <li className={styles.navLink}>
//               <Link to="/settings">
//                 <i className="bx bx-cog icon"></i>
//                 <span className={`${styles.text} ${styles.navText}`}>Settings</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.bottomContent}>
//           <li className="">
//             <Link to="/logout">
//               <i className="bx bx-log-out icon"></i>
//               <span className={`${styles.text} ${styles.navText}`}>Logout</span>
//             </Link>
//           </li>
//           <li className={styles.mode} onClick={toggleBodyClass}>
//             <div className={styles.sunMoon}>
//               <i className={`bx bx-moon icon ${styles.moon}`}></i>
//               <i className={`bx bx-sun icon ${styles.sun}`}></i>
//             </div>
//             <span className={`${styles.modeText} ${styles.text}`}>{modeText}</span>
//             <div className={styles.toggleSwitch}>
//               <span className={`${styles.switch} ${bodyClass}`}></span>
//             </div>
//           </li>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Tmenubar;
