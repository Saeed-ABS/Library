import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div >
      <div className="d-flex justify-content-center shadow" style={{background: "#A1C2BD"}}>
        <Link to="/about" className="p-4 link-underline link-underline-opacity-0 text-dark">
          صفحه درباره ما
        </Link>
        <Link to="/contact" className="p-4 link-underline link-underline-opacity-0 text-dark">
          صفحه تماس با ما
        </Link>
        <Link to="/books" className="p-4 link-underline link-underline-opacity-0 text-dark">
          لیست کتاب ها
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
