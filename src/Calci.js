// // import React from "react";
// // import { Icon } from "react-icons-kit";
// // import Fade from "react-reveal/Fade";
// // import { arrowRight } from "react-icons-kit/feather/arrowRight";
// // import Container from "./common/components/UI/Container";
// // import Heading from "./common/components/Heading";
// // // import NextImage from "common/components/NextImage";
// // import Text from "./common/components/Text";
// // import Link from "./common/components/Link";
// // // import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // // import MoreVertIcon from "@mui/icons-material/MoreVert";

// // // import { posts } from "common/data/WebAppMinimal";
// // import { Section, SectionHeading, Grid, Article } from "./newsFeed.style";
// // import "firebase/compat/firestore";
// // import firebase from "firebase/compat/app";
// // import { Button } from "react-aria-menubutton";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCnlpD5DSecqNQzgwwUUbW-BZyz-FuIlb0",
// //   authDomain: "foodey-63192.firebaseapp.com",
// //   databaseURL: "https://foodey-63192-default-rtdb.firebaseio.com",
// //   projectId: "foodey-63192",
// //   storageBucket: "foodey-63192.appspot.com",
// //   messagingSenderId: "1056375278651",
// //   appId: "1:1056375278651:web:5784ec975990b10c65a01e",
// //   measurementId: "G-G77NTF3JMK",
// // };
// // // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);
// // const database = firebase.firestore();

// // const Calci = () => {
// //   const [blogs, setBlogs] = React.useState([]);
// //   const [expanded, setExpanded] = React.useState(false);

// //   const handleExpandClick = () => {
// //     setExpanded(!expanded);
// //   };
// //   React.useEffect(() => {
// //     database.collection("Blogs").onSnapshot((snapshot) => {
// //       const blogs = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...doc.data(),
// //       }));
// //       setBlogs(blogs);
// //     }),
// //       () => {
// //         console.log(blogs);
// //       };
// //   }),
// //     () => {
// //       console.log(blogs);
// //     };
// //   return (
// //     <Section id="newsFeed">
// //       <Container width="1440px">
// //         <SectionHeading>
// //           <Heading as="h2" content="Latest Blogs" />
// //           <Link href="#">
// //             View All <Icon icon={arrowRight} />
// //           </Link>
// //         </SectionHeading>
// //         <Grid>
// //           {blogs.map((post, index) => (
// //             <Fade key={post.id} bottom delay={100 * index}>
// //               <Article key={`post-key-${index}`}>
// //                 <Heading as="h3" content={post.Heading} />
// //                 <Text content={post.Timestamp} />
// //                 <Text lable="Author: " content={post.Author} />
// //               </Article>
// //             </Fade>
// //           ))}
// //         </Grid>
// //       </Container>
// //     </Section>
// //   );
// // };
// // export default Calci;

// <div>
// <h1>Calculator</h1>
// <div>
//   <TableContainer component={Paper}>
//     <Table aria-label="collapsible table">
//       <TableHead>
//         <TableRow>
//           {/* <TableCell /> */}
//           <TableCell component="th" scope="row">
//             <b>Subjects</b>
//           </TableCell>
//           <TableCell align="centre">For O</TableCell>
//           <TableCell align="centre">For A+</TableCell>
//           <TableCell align="centre">For A</TableCell>
//           <TableCell align="centre">For B+</TableCell>
//           {/* <TableCell align="centre">For B</TableCell> */}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {blogs.map((post, index) => (
//           <>
//             <div>
//               <br></br>
//               <b>{post.name}</b>
//             </div>
//             <TableRow
//               key={post.name}
//               sx={{
//                 "&:last-child td, &:last-child th": { border: 0 },
//                 bgcolor: "background.paper",
//                 boxShadow: 1,
//                 borderRadius: 2,
//                 p: 2,
//                 minWidth: 300,
//               }}
//             >
//               <TableCell component="th" scope="row">
//                 <b>Maths:</b>
//                 {post.Maths}
//                 <hr class="line1"></hr>
//                 <b>Mechanical:</b>
//                 {post.Mechanical}
//                 <hr class="line1"></hr>
//                 <b>Electronics:</b>
//                 {post.Electronics}
//                 <hr class="line1"></hr>
//                 <b>C:</b>
//                 {post.CProgramming}
//                 <hr class="line1"></hr>
//                 <b>Chemistry:</b>
//                 {post.Chemistry}
//                 <hr class="line1"></hr>
//                 <b>AEC:</b>
//                 {post.AEC}
//                 <hr class="line1"></hr>
//               </TableCell>
//               <TableCell align="centre">
//                 {(90 - post.Maths) * 2}
//                 <hr class="line1"></hr>
//                 {(90 - post.Mechanical) * 2}
//                 <hr class="line1"></hr>
//                 {(90 - post.Electronics) * 2}
//                 <hr class="line1"></hr>
//                 {(90 - post.CProgramming) * 2}
//                 <hr class="line1"></hr>
//                 {(90 - post.Chemistry) * 2}
//                 <hr class="line1"></hr>
//                 {90 - post.AEC}
//                 <hr class="line1"></hr>
//               </TableCell>
//               <TableCell align="centre">
//                 {(80 - post.Maths) * 2}
//                 <hr class="line1"></hr>
//                 {(80 - post.Mechanical) * 2}
//                 <hr class="line1"></hr>
//                 {(80 - post.Electronics) * 2}
//                 <hr class="line1"></hr>
//                 {(80 - post.CProgramming) * 2}
//                 <hr class="line1"></hr>
//                 {(80 - post.Chemistry) * 2}
//                 <hr class="line1"></hr>
//                 {80 - post.AEC}
//                 <hr class="line1"></hr>
//               </TableCell>
//               <TableCell align="centre">
//                 {(70 - post.Maths) * 2}
//                 <hr class="line1"></hr>
//                 {(70 - post.Mechanical) * 2}
//                 <hr class="line1"></hr>
//                 {(70 - post.Electronics) * 2}
//                 <hr class="line1"></hr>
//                 {(70 - post.CProgramming) * 2}
//                 <hr class="line1"></hr>
//                 {(70 - post.Chemistry) * 2}
//                 <hr class="line1"></hr>
//                 {70 - post.AEC}
//                 <hr class="line1"></hr>
//               </TableCell>
//               <TableCell align="centre">
//                 {(60 - post.Maths) * 2}
//                 <hr class="line1"></hr>
//                 {(60 - post.Mechanical) * 2}
//                 <hr class="line1"></hr>
//                 {(60 - post.Electronics) * 2}
//                 <hr class="line1"></hr>
//                 {(60 - post.CProgramming) * 2}
//                 <hr class="line1"></hr>
//                 {(60 - post.Chemistry) * 2}
//                 <hr class="line1"></hr>
//                 {60 - post.AEC}
//                 <hr class="line1"></hr>
//               </TableCell>
//             </TableRow>
//           </>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// </div>
// </div>