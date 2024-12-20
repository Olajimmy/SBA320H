import { useState, useEffect } from "react";
function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState();
  const API_KEY = "ea4b68da0b89460ca40f05d2aa651765";
  const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;
  const results = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setNewsFeed(data.articles);
    console.log(data.articles);
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
                  <h3>Author:{i.author}</h3>
                  <p>content: {i.content}</p>
                  <p>Manufacturer: {i.description}</p>
                  <p>Cost in credits: {i.title}</p>
                  <div className="publisher">
                    <p style={{ color: "white" }}>{i.publishedAt}</p>
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
