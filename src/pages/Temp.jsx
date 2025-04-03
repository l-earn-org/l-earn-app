import { Link } from "react-router-dom";

export const Temp = () => {
  return (
    <>
      <p>
        NOTE: THIS PAGE IS TEMPORARY AND ITS ONLY PURPOSE IS TO NAVIGATE TO
        DIFFERENT PAGES BEFORE THE APPLICATION SYSTEM FLOW IS COMPLETE
      </p>
      <div className="temporary-page">
        <Link to='/landing'>
          <button>Landing</button>
        </Link>
        <Link to ='/home'>
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};
