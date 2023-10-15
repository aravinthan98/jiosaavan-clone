// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import './newRelease.css'
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };
// const NewReleases=()=>{
// return(
// <Carousel 
// responsive={responsive}
// infinite={true}
// //   autoPlay={ true}
// //   autoPlaySpeed={1000}
// >
 
//             <div className="caro">
//             <div className="trending-list">
            
//             <div className="card">
//                 <img src="https://c.saavncdn.com/223/FAST-X-English-2023-20230518053633-150x150.jpg?bch=470582" alt="movie"/>
//                 <h4>FAST X</h4>
//                 <p>Fast & Furious: The Fast Saga</p>
//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/187/Jailer-Tamil-2023-20230728081443-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Jailer</h4>
//                 <p>Various Artists</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/638/Not-Ramaiya-Vastavaiya-From-Jawan-Hindi-Hindi-2023-20230829123658-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Not Ramaiya Vastavaiya (From "Jawan") - Hindi</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/editorial/PataakhedaarHits_20230529083453_150x150.jpg?bch=1693995080" alt="movie"/>
//                 <h4>Pataakhedaar Hits</h4>
//                 <p>43.5K Followers</p>

//                 </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/356/Kanhaiya-Twitter-Pe-Aaja-From-The-Great-Indian-Family-Hindi-2023-20230829100930-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Kanhaiya Twitter Pe Aaja (From "The Great Indian Family")</h4>
//                 <p>Pritam,Nakash Aziz</p>

//                 </div>
//                 <div className="card">
//                     <img src="https://c.saavncdn.com/386/Naa-Ready-From-Leo-Tamil-2023-20230622174435-150x150.jpg?bch=470584" alt="movie"/>
//                     <h4>Naa Ready (From "Leo")</h4>
//                     <p>Anirudh Ravichander</p>

//                 </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/editorial/RomancebyRahman_20220610050256_150x150.jpg?bch=1685773543" alt="movie"/>
//                 <h4>Romance by A.R.Rahman</h4>
//                 <p>4.7K Followers</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Ram Siya Ram (From "Adipurush")</h4>
//                 <p>Sachet-Parampara</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/183/Kaavaalaa-From-Jailer-Tamil-2023-20230708073100-150x150.jpg?bch=470584" alt="movie"/>
//                 <h4>Kaavaalaa (From "Jailer")</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/696/Guli-Mata-Hindi-2023-20230714050721-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Guli Mata</h4>
//                 <p>Saad Lamjarred,Shreya Ghoshal</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/247/Gadar-2-Hindi-2023-20230821100547-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Gadar 2</h4>
//                 <p>Mithoon,Uttam Singh</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/959/Hukum-Thalaivar-Alappara-From-Jailer-Tamil-2023-20230717071502-150x150.jpg?bch=470584" alt="movie"/>
//                 <h4>Hukum - Thalaivar Alappara (From "Jailer")</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-150x150.jpg?bch=470583" alt="movie"/>
//                 <h4>Chaleya (From "Jawan")</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/289/Pathu-Thala-Original-Motion-Picture-Soundtrack-Tamil-2023-20230320144505-150x150.jpg?bch=470584" alt="movie"/>
//                 <h4>Pathu Thala (Original Motion Picture Soundtrack)</h4>
//                 <p>A.R. Rahman</p>

//             </div>
//             </div>
//             </div>
//             <div className="caro">
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/editorial/Chartbusters2023Hindi_20230705051727_150x150.jpg?bch=1688536512" alt="movie"/>
//                 <h4>Chartbusters 2023 - Hindi</h4>
//                 <p>followers</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/406/Zinda-Banda-From-Jawan-Hindi-2023-20230731043357-150x150.jpg?bch=470585" alt="movie"/>
//                 <h4>Zinda Banda (From "Jawan")</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/495/His-Name-is-John-From-Dhruva-Natchathiram-Tamil-2023-20230718180431-150x150.jpg?bch=470585" alt="movie"/>
//                 <h4>His Name is John (From "Dhruva Natchathiram")</h4>
//                 <p>Harris Jayaraj, Paal Dabba - His Name is John (From "Dhruva Natchathiram")</p>
//             </div>
//                 <div className="card">
//                     <img src="https://c.saavncdn.com/424/Zihaal-e-Miskin-Hindi-2023-20230523053359-150x150.jpg?bch=470585" alt="movie"/>
//                     <h4>Zihaal e Miskin</h4>
//                     <p>Javed-Mohsin, Vishal Mishra, Shreya Ghoshal - Zihaal e Miskin</p>
//                 </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/377/Good-Night-Tamil-2023-20230520150605-150x150.jpg?bch=470585" alt="movie"/>
//                 <h4>Good Night</h4>
//                 <p>Sean Roldan, Deva</p>
//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/276/Last-Time-I-Saw-You-English-2023-20230901103545-150x150.jpg?bch=470585" alt="movie"/>
//                 <h4>Last Time I Saw You</h4>
//                 <p>Nicki Minaj - Last Time I Saw You</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/editorial/Let_sPlayBTS_20230601061847_150x150.jpg?bch=1693899718" alt="movie"/>
//                 <h4>Let's Play - BTS</h4>
//                 <p>62.7K Followers</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/973/Vikram-Tamil-2022-20220515182605-500x500.jpg" alt="movie"/>
//                 <h4>Vikram</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             </div>
//             <div className="trending-list">
//             <div className="card">
//                 <img src="https://c.saavncdn.com/556/Glimpse-of-Antony-Das-From-Leo-Tamil-2023-20230804120253-150x150.jpg" alt="movie"/>
//                 <h4>Glimpse of Antony Das (From "Leo")</h4>
//                 <p>Anirudh Ravichander</p>

//             </div>
//             <div className="card">
//                 <img src="https://c.saavncdn.com/681/Let-Me-Down-Slowly-English-2018-20190607042218-150x150.jpg?bch=470585" alt="movie"/>
//                 <h4>Let Me Down Slowly</h4>
//                 <p>Alec Benjamin - Let Me Down Slowly</p>

//             </div>
//             </div>
//             </div>

// </Carousel>
// )
// }
// export default NewReleases;