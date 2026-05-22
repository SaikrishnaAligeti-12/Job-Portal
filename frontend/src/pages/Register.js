import { useState } from "react";

import axios from "axios";


function Register() {

  // FORM STATE
  const [form, setForm] = useState({

    name: "",

    email: "",

    password: "",

    role: "student",
  });


  // HANDLE CHANGE
  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,
    });
  };


  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      console.log(form);

      const res = await axios.post(

        "http://localhost:5000/api/auth/register",

        form
      );

      console.log(res.data);

      alert("Registered successfully");


      // CLEAR FORM
      setForm({

        name: "",

        email: "",

        password: "",

        role: "student",
      });

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.error ||

        "Registration failed"
      );
    }
  };


  return (

    <div className="container mt-5">


      <div className="row justify-content-center">


        <div className="col-md-6">


          <div className="card shadow p-4">


            <h2 className="text-center mb-4">

              Register

            </h2>


            <form onSubmit={handleSubmit}>


              {/* NAME */}
              <div className="mb-3">

                <input

                  type="text"

                  name="name"

                  className="form-control"

                  placeholder="Enter Name"

                  value={form.name}

                  onChange={handleChange}
                />

              </div>


              {/* EMAIL */}
              <div className="mb-3">

                <input

                  type="email"

                  name="email"

                  className="form-control"

                  placeholder="Enter Email"

                  value={form.email}

                  onChange={handleChange}
                />

              </div>


              {/* PASSWORD */}
              <div className="mb-3">

                <input

                  type="password"

                  name="password"

                  className="form-control"

                  placeholder="Enter Password"

                  value={form.password}

                  onChange={handleChange}
                />

              </div>


              {/* ROLE */}
              <div className="mb-3">

                <select

                  name="role"

                  className="form-control"

                  value={form.role}

                  onChange={handleChange}
                >

                  <option value="student">

                    student

                  </option>

                  <option value="admin">

                    admin

                  </option>

                </select>

              </div>


              {/* BUTTON */}
              <button

                type="submit"

                className="btn btn-dark w-100"
              >

                Register

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;