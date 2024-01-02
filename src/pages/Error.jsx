import { Link } from "react-router-dom";


function ErrorPage() {
  return (
    <div className="header">
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the requested page is not found. Please check the URL again.</p>
      <Link to="..">
        Go Back
      </Link>
    </div>
  );
}
export default ErrorPage;
