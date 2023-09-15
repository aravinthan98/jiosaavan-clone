import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './radioStation.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const RadioStation=()=>{
return(
<Carousel 
responsive={responsive}
infinite={true}
//   autoPlay={ true}
//   autoPlaySpeed={1000}
>
 
            <div className="caro">
            <div className="trending-list">
            
            <div className="roundcard">
                <img src="https://c.saavncdn.com/223/FAST-X-English-2023-20230518053633-150x150.jpg?bch=470582" alt="movie"/>
                <h4>FAST X</h4>
                <p>Fast & Furious: The Fast Saga</p>
            </div>
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/638/Not-Ramaiya-Vastavaiya-From-Jawan-Hindi-Hindi-2023-20230829123658-150x150.jpg?bch=470583" alt="movie"/>
                <h4>Not Ramaiya Vastavaiya (From "Jawan") - Hindi</h4>
                <p>Anirudh Ravichander</p>

            </div>
           
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/356/Kanhaiya-Twitter-Pe-Aaja-From-The-Great-Indian-Family-Hindi-2023-20230829100930-150x150.jpg?bch=470583" alt="movie"/>
                <h4>Kanhaiya Twitter Pe Aaja (From "The Great Indian Family")</h4>
                <p>Pritam,Nakash Aziz</p>

                </div>
 
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/editorial/RomancebyRahman_20220610050256_150x150.jpg?bch=1685773543" alt="movie"/>
                <h4>Romance by A.R.Rahman</h4>
                <p>4.7K Followers</p>

            </div>
          
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/183/Kaavaalaa-From-Jailer-Tamil-2023-20230708073100-150x150.jpg?bch=470584" alt="movie"/>
                <h4>Kaavaalaa (From "Jailer")</h4>
                <p>Anirudh Ravichander</p>

            </div>
            
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/247/Gadar-2-Hindi-2023-20230821100547-150x150.jpg?bch=470583" alt="movie"/>
                <h4>Gadar 2</h4>
                <p>Mithoon,Uttam Singh</p>

            </div>
            
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-150x150.jpg?bch=470583" alt="movie"/>
                <h4>Chaleya (From "Jawan")</h4>
                <p>Anirudh Ravichander</p>

            </div>
           
            </div>
            </div>
            <div className="caro">
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/editorial/Chartbusters2023Hindi_20230705051727_150x150.jpg?bch=1688536512" alt="movie"/>
                <h4>Chartbusters 2023 - Hindi</h4>
                <p>followers</p>

            </div>
           
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/495/His-Name-is-John-From-Dhruva-Natchathiram-Tamil-2023-20230718180431-150x150.jpg?bch=470585" alt="movie"/>
                <h4>His Name is John (From "Dhruva Natchathiram")</h4>
                <p>Harris Jayaraj, Paal Dabba - His Name is John (From "Dhruva Natchathiram")</p>
            </div>
              
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/377/Good-Night-Tamil-2023-20230520150605-150x150.jpg?bch=470585" alt="movie"/>
                <h4>Good Night</h4>
                <p>Sean Roldan, Deva</p>
            </div>
            
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/editorial/Let_sPlayBTS_20230601061847_150x150.jpg?bch=1693899718" alt="movie"/>
                <h4>Let's Play - BTS</h4>
                <p>62.7K Followers</p>

            </div>
           
            </div>
            <div className="trending-list">
            <div className="roundcard">
                <img src="https://c.saavncdn.com/556/Glimpse-of-Antony-Das-From-Leo-Tamil-2023-20230804120253-150x150.jpg" alt="movie"/>
                <h4>Glimpse of Antony Das (From "Leo")</h4>
                <p>Anirudh Ravichander</p>

            </div>
            
            </div>
            </div>

</Carousel>
)
}
export default RadioStation;