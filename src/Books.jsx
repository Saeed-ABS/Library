import { getBooks } from "./bookList";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let books = getBooks();
  let location = useLocation();

  return (
    <div>
      <input
        className="rounded border border-success p-2 border-opacity-0 my-3"
        style={{ margin: "0 33%", width: "25%" }}
        type="text"
        placeholder="جست و جو"
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <div className="row">
        <ul className="col-4 list-group">
          {books
            .filter((book) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = book.name.toLowerCase();
              return name.startsWith(filter.trim().toLowerCase());
            })
            .map((book) => (
              <NavLink
                className="list-group-item"
                to={`${book.id}${location.search}`}
                key={book.id}
                style={({ isActive }) => ({
                  background: isActive ? "#708993" : "#A1C2BD",
                })}
              >
                {book.name}
              </NavLink>
            ))}
        </ul>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Books;
