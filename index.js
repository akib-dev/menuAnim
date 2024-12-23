document.addEventListener('DOMContentLoaded', function() {
  const textBoxSVG = document.querySelector('.text-box');
  
  textBoxSVG.addEventListener('mouseenter', function() {

    // const blankDiv = document.querySelector(".blank-div")
    // blankDiv.style.backgroundColor = '#464646';


    const hrPath = document.querySelector(".door-hr-path");
    const doorPath = document.querySelector(".door-path");
    const hrPathLength = hrPath.getTotalLength();
    const doorPathLength = doorPath.getTotalLength();

    hrPath.style.strokeDasharray = hrPathLength;
    hrPath.style.strokeDashoffset = hrPathLength;

    doorPath.style.strokeDasharray = doorPathLength;
    doorPath.style.strokeDashoffset = doorPathLength;

    gsap.fromTo(hrPath, {
      strokeDashoffset: hrPathLength
    }, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "none",
      stroke: '#464646'
    });

      gsap.to(doorPath, {
        strokeDashoffset: 0, // Animate to fully visible
        duration: 1,         // Animation duration in seconds
        ease: "power2.inOut", 
        display: 'block',
      });
  
    });
    textBoxSVG.addEventListener('mouseleave', function() {

      // const blankDiv = document.querySelector(".blank-div")
      // blankDiv.style.backgroundColor = 'white';
    
      const hrPath = document.querySelector(".door-hr-path");
      const hrPathLength = hrPath.getTotalLength(); // Get the total path length

      // Set the stroke-dasharray and stroke-dashoffset to the path length
      hrPath.style.strokeDasharray = hrPathLength;
      hrPath.style.strokeDashoffset = hrPathLength;

      // Animate the path using GSAP
      gsap.fromTo(hrPath, {
        strokeDashoffset: 0
      }, {
        strokeDashoffset: hrPathLength,
        duration: 1.2,
        ease: "none",
        stroke: 'white',
        delay: 0.2
      });
  


      const doorPath = document.querySelector(".door-path");
      const doorPathLength = doorPath.getTotalLength(); // Get the total path length
      
      // Set the stroke-dasharray and stroke-dashoffset to the path length
      doorPath.style.strokeDasharray = doorPathLength;
      doorPath.style.strokeDashoffset = doorPathLength;

      gsap.from(doorPath, {
        strokeDashoffset: 0, // Animate to fully visible
        duration: 1,         // Animation duration in seconds
        ease: "none", // Smooth easing
        stroke: 'white',
        zIndex: 50,
      });

      
  
    });
  
  });



  






// document.addEventListener('DOMContentLoaded', function() {
//   const textBoxSVG = document.querySelector('.text-box p');

//   textBoxSVG.addEventListener('mouseover', function() {
//       if (!document.querySelector('.dynamic-content')) {
//           const newHtml = `
//           <svg class="dynamic-content" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.101562 0.0546875V19.625V20.2539V20.625C11.3889 20.625 20.5391 11.4748 20.5391 0.1875H19.5391C19.5391 10.5872 11.3719 19.0792 1.10156 19.5997L1.10156 0.0546875H0.101562Z" fill="url(#paint0_linear_587_2054)">
//                   <animate attributeName="d" from="0" to="M0.101562 0.0546875V19.625V20.2539V20.625C11.3889 20.625 20.5391 11.4748 20.5391 0.1875H19.5391C19.5391 10.5872 11.3719 19.0792 1.10156 19.5997L1.10156 0.0546875H0.101562Z" dur="2s" fill="freeze" />
//                 </path>
//                 <path d="M1.11328 0.808594H19.4959" stroke="#464646" stroke-width="1.5">
//                   <animate attributeName="stroke-dasharray" from="0" to="20, 0" dur="2s" fill="freeze" />
//                 </path>
//                 <defs>
//                   <linearGradient id="paint0_linear_587_2054" x1="0.101562" y1="10.3396" x2="20.5391" y2="10.3396" gradientUnits="userSpaceOnUse">
//                     <stop stop-color="#FF7162"/>
//                     <stop offset="1" stop-color="#FFC257"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//           `;
          
//           textBoxSVG.insertAdjacentHTML('afterend', newHtml);
          
          
//         }
//         const dynamicContent = document.querySelector('.dynamic-content');

//   });

//   textBoxSVG.addEventListener('mouseout', function() {
//       const dynamicContent = document.querySelector('.dynamic-content');
//       if (dynamicContent) {
//             dynamicContent.remove();
//       }
//   });
// });