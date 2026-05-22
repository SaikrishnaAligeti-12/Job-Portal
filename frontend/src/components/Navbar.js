import { Link } from "react-router-dom";


function Navbar() {

  // GET USER
  const user = JSON.parse(

    localStorage.getItem("user")
  );


  // LOGOUT
  const logout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };


  return (

    <nav className="navbar navbar-dark bg-dark px-4">


      {/* LOGO */}
      <h2 className="text-white">

        Job Portal

      </h2>


      {/* NAV LINKS */}
      <div>


        {/* JOBS */}
        <Link

          to="/"

          className="btn btn-light mx-2"
        >

          Jobs

        </Link>


        {/* SAVED JOBS */}
        <Link

          to="/saved-jobs"

          className="btn btn-warning mx-2"
        >

          Saved Jobs

        </Link>


        {/* DASHBOARD */}
        <Link

          to="/dashboard"

          className="btn btn-success mx-2"
        >

          Dashboard

        </Link>


        {/* ADD JOB */}
        <Link

          to="/add-job"

          className="btn btn-info mx-2"
        >

          Add Job

        </Link>


        {/* RESUME */}
        <Link

          to="/upload-resume"

          className="btn btn-secondary mx-2"
        >

          Upload Resume

        </Link>


        {/* IF NOT LOGGED IN */}
        {
          !user && (

            <>
              <Link

                to="/register"

                className="btn btn-light mx-2"
              >

                Register

              </Link>


              <Link

                to="/login"

                className="btn btn-light mx-2"
              >

                Login

              </Link>
            </>
          )
        }


        {/* IF LOGGED IN */}
        {
          user && (

            <button

              className="btn btn-danger mx-2"

              onClick={logout}
            >

              Logout

            </button>
          )
        }

      </div>

    </nav>
  );
}

export default Navbar;