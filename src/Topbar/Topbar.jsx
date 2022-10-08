import "./Topbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Topbar() {
  return <div className="Top">
    <div className="TopLeft"><i class="fa-brands fa-facebook"></i>
    {/* <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" /> */}
    </div>
    <div className="TopCenter">middle</div>
    <div className="TopRight">right</div>


  </div>;
}

export default Topbar;
