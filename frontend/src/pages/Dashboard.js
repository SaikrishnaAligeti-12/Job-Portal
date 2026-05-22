function Dashboard() {

  // GET USER FROM LOCAL STORAGE
  const user = JSON.parse(

    localStorage.getItem("user")
  );


  // LOGOUT FUNCTION
  const logout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };


  return (

    <div className="container mt-5">


      <div className="card shadow p-4">

        <h2 className="mb-4 text-center">

          User Dashboard

        </h2>


        <hr />


        <h4>

          Welcome,
          {" "}
          {user?.name}

        </h4>


        <p className="mt-3">

          <b>Email:</b>
          {" "}
          {user?.email}

        </p>


        <p>

          <b>Role:</b>
          {" "}
          {user?.role}

        </p>


        <button

          className="btn btn-danger mt-3"

          onClick={logout}
        >

          Logout

        </button>

      </div>

    </div>
  );
}

export default Dashboard;