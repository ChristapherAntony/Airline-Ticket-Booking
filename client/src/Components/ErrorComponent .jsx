// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from 'react';

// const ErrorComponent = ({ errorMessage }) => {
//   const [errorQueue, setErrorQueue] = useState([]);

//   useEffect(() => {
//     if (errorMessage) {
//       setErrorQueue(prevQueue => [...prevQueue, errorMessage]);
//       setTimeout(() => {
//         setErrorQueue(prevQueue => prevQueue.filter(error => error !== errorMessage));
//       }, 8000);
//     }
//   }, [errorMessage]);

//   return (
//     <React.Fragment>
//       {errorQueue.map((error, index) => (
//         <div key={index}>
//           {error}
//         </div>
//       ))}
//     </React.Fragment>
//   );
// };

// export default ErrorComponent;
