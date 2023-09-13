// import React from "react";
// import { useForm } from "react-hook-form";

// const NameField = () => {
//   return (
//     <div>
//       <label className="career-label">
//         Full name
//         <input
//           className="input"
//           type="text"
//           placeholder="John Smith"
//           {...register("name", {
//             required: true,
//             minLength: 3,
//             pattern: /^[a-zA-Z]+ [a-zA-Z]+$/i,
//           })}
//         />
//       </label>
//       {errors.name?.type === "required" && (
//         <p className="text-error-clr text-right text-widexxxs tracking-almostwidest font-extralight">
//           This field is required
//         </p>
//       )}
//       {errors.name?.type === "minLength" || errors.name?.type === "pattern" ? (
//         <div className="flex gap-1 justify-end items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 18 18"
//             fill="none"
//           >
//             <path
//               d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
//               stroke="#FF5757"
//               stroke-width="0.5"
//               stroke-miterlimit="10"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <p className="text-error-clr text-right text-widexxxs tracking-almostwidest font-extralight">
//             Incorrect name
//           </p>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default NameField;
