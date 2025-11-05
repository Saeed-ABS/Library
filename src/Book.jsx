import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "./bookList";

const Book = () => {
  const params = useParams();
  const book = getBook(params.bookId);
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div>
      <div class="card mb-3" style={{ background: "#A1C2BD" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={book.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body ">
              <h5 className="card-title">{book.name}</h5>
              <h6 className="card-title">{book.price}</h6>
              <h6 className="card-title">{book.author}</h6>
              <p className="card-text">{book.description}</p>
              <button
                onClick={() => {
                  deleteBook(book.id);
                  navigate("/books" + location.search);
                }}
                className="btn btn-danger"
              >
                حذف کتاب
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card" style={{background:"#A1C2BD"}}>
        <img src={book.img} className="card-img-left w-25 px-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <h6 className="card-title">{book.price}</h6>
          <h6 className="card-title">{book.author}</h6>
          <p className="card-text">{book.description}</p>
          <button
            onClick={() => {
              deleteBook(book.id);
              navigate("/books" + location.search);
            }}
            className="btn btn-danger"
          >
            حذف کتاب
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Book;
