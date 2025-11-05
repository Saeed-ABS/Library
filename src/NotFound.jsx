import {Link} from "react-router"
import no from "./assets/404.png"

const NotFound = () => {
  return (
    <div>
      <img src={no} alt="" width={"100%"} />
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound
