import { Link } from "react-router";
function NewPage() {
  return (
    <>
      <div className="newsHeader">
        {" "}
        <h2>News Page</h2>
        <div className="newsLink">
          <Link to="/newsfeed"> take me to news feed</Link>
        </div>
      </div>
    </>
  );
}
export default NewPage;
