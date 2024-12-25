import { useState, useEffect } from "react";
import { Link } from "react-router";

function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // To track current article

  const API_KEY = "ea4b68da0b89460ca40f05d2aa651765";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`; // Replace with your own API key

  const results = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles);
    setNewsFeed(data.articles);
  };

  // Fetch data on mount
  useEffect(() => {
    results(url);
  }, []);

  // Function to navigate to the next article
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsFeed.length); // Wrap around to first article
  };

  // Function to navigate to the previous article
  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsFeed.length) % newsFeed.length // Wrap around to last article
    );
  };

  return (
    <div>
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <h1>Welcome to the latest news feed</h1>
      {newsFeed.length > 0 ? (
        <div className="carousel-container">
          {/* Carousel Content */}
          <div className="carousel-item">
            <div className="box">
              <img
                className="image"
                alt={newsFeed[currentIndex]?.url}
                src={newsFeed[currentIndex]?.urlToImage}
              />
              <div className="content">
                <div className="author">
                  <h3>Author: {newsFeed[currentIndex]?.author}</h3>
                  <p>{newsFeed[currentIndex]?.title}</p>
                  <p>{newsFeed[currentIndex].content} </p>
                </div>

                <div className="publisher">
                  <p style={{ color: "white" }}>
                    Published At: {newsFeed[currentIndex]?.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="carousel-controls">
            <button onClick={goPrev}>Previous</button>
            <button onClick={goNext}>Next</button>
          </div>

          {/* Indicator (Current Slide / Total Slides) */}
          <div className="carousel-indicator">
            <p>
              Article {currentIndex + 1} of {newsFeed.length}
            </p>
          </div>
        </div>
      ) : (
        <p>No News Feed available</p>
      )}
    </div>
  );
}

export default NewsFeed;

//
//
//

// import { useState, useEffect } from "react";

// function NewsFeed() {
//   const [newsFeed, setNewsFeed] = useState();
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   const API_KEY = "ea4b68da0b89460ca40f05d2aa651765";
//   const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;
//   const results = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     setNewsFeed(data.articles);
//     console.log(data.articles);
//     //alert("welcome");
//   };
//   //button
//   const handleClick = () => {
//     setIsButtonClicked(!isButtonClicked);
//   };
//   useEffect(() => {
//     results(url);
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the latest news feed</h1>
//       {newsFeed && newsFeed.length > 0 ? (
//         <div className="mainBox">
//           {newsFeed.map((i, index) => (
//             <div key={index}>
//               <div className="box">
//                 <img className="image" alt={i.url} src={i.urlToImage} />

//                 <div className="content">
//                   <div className="author">
//                     <h3>Author: {i.author}</h3>
//                     <p>{i.title}</p>
//                   </div>
//                   {/* <p>{i.content}</p>
//                   <p>{i.description}</p> */}

//                   <div className="publisher">
//                     <p style={{ color: "white" }}>
//                       Published At: {i.publishedAt}
//                     </p>
//                     <button
//                       //   value={newsFeed}
//                       onClick={() => handleClick}
//                       className="openPage"
//                     >
//                       {isButtonClicked ? "button clicked" : "click me"}. . .
//                       {isButtonClicked && <p>works</p>}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No News Feed available</p>
//       )}
//     </div>
//   );
// }
// export default NewsFeed;
