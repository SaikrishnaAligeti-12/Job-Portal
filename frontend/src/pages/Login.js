import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";


function Login() {

  const navigate = useNavigate();


  const [form, setForm] = useState({

    email: "",

    password: "",
  });


  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "https://job-portal-backend-upve.onrender.com/api/auth/login",

        form
      );

      console.log(res.data);


      // SAVE TOKEN
      localStorage.setItem(

        "token",

        res.data.token
      );


      // SAVE USER
      localStorage.setItem(

        "user",

        JSON.stringify(
          res.data.user
        )
      );


      alert("Login successful");


      // REDIRECT
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.error ||

        "Login failed"
      );
    }
  };


  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">

              Login

            </h2>


            <form onSubmit={handleSubmit}>


              <div className="mb-3">

                <input
                  type="email"

                  name="email"

                  className="form-control"

                  placeholder="Enter Email"

                  onChange={handleChange}
                />

              </div>


              <div className="mb-3">

                <input
                  type="password"

                  name="password"

                  className="form-control"

                  placeholder="Enter Password"

                  onChange={handleChange}
                />

              </div>


              <button
                type="submit"

                className="btn btn-dark w-100"
              >

                Login

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;