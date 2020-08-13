// const path = require('path');

// exports.createTimelines = ({ graphql, actions }) => {
//   const { createTimeline } = actions;

//   const timelineComponent = path.resolve('./src/components/timeline.js');

//   return graphql(`
//     {
//       allContentfulTimeline {
//         edges {
//           node {
//             title
//             timelineItems {
//               id
//               title
//               description
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }

//     const timelines = result.data.allContentfulTimeline.edges;

//     timelines.forEach((timeline, index) => {
//       createTimeline({
//         component: timelineComponent,
//       });
//     });
//   });
// };
