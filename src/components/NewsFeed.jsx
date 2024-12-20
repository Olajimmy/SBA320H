import { useState, useEffect } from "react";

function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const API_KEY = "ea4b68da0b89460ca40f05d2aa651765";
  const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;
  const results = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setNewsFeed(data.articles);
    console.log(data.articles);
    //alert("welcome");
  };
  //button
  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };
  useEffect(() => {
    results(url);
  }, []);

  return (
    <div>
      <h1>Welcome to the latest news feed</h1>
      {newsFeed && newsFeed.length > 0 ? (
        <div className="mainBox">
          {newsFeed.map((i, index) => (
            <div key={index}>
              <div className="box">
                <img className="image" alt={i.url} src={i.urlToImage} />

                <div className="content">
                  <div className="author">
                    <h3>Author: {i.author}</h3>
                    <p>{i.title}</p>
                  </div>
                  {/* <p>{i.content}</p>
                  <p>{i.description}</p> */}

                  <div className="publisher">
                    <p style={{ color: "white" }}>
                      Published At: {i.publishedAt}
                    </p>
                    <button
                      //   value={newsFeed}
                      onClick={() => handleClick}
                      className="openPage"
                    >
                      {isButtonClicked ? "button clicked" : "click me"}. . .
                      {isButtonClicked && <p>works</p>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No News Feed available</p>
      )}
    </div>
  );
}
export default NewsFeed;
