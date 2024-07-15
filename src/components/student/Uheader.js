// import React from 'react'
// import styles from "../student/login.module.css";
// function Uheader() {
//   return (
//     <>
//       <div className={styles.header}> 
//           <nav>
//             <ul>
//               <li><a id="sl" href="/UserHome">Home</a></li>
//               <li>Student Portal</li>
         
//               <li><a id="sl" href="/studentLogin">Logout</a></li>
//             </ul>
//           </nav>
//         </div>
//     </>
//   )
// }

// export default Uheader
import React from 'react';
import styles from '../student/userforms.module.css';

function Uheader() {
  return (
    <div className={styles.header}> 
      <nav>
        <ul>
          <li><a id="sl" href="/UserHome">Home</a></li>
          <li>Student Portal</li>
          <li><a id="sl" href="/studentLogin">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Uheader;
