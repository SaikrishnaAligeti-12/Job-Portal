import { useState } from "react";

import axios from "axios";


function AddJob() {

  const [form, setForm] = useState({

    title: "",

    company: "",

    location: "",

    salary: "",

    description: "",
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

      const res = await axios.post(

        "https://job-portal-backend-upve.onrender.com/api/jobs",

        form
      );

      console.log(res.data);

      alert("Job added successfully");


      // CLEAR FORM
      setForm({

        title: "",

        company: "",

        location: "",

        salary: "",

        description: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed to add job");
    }
  };


  return (

    <div className="container mt-5">


      <div className="card shadow p-4">

        <h2 className="text-center mb-4">

          Add New Job

        </h2>


        <form onSubmit={handleSubmit}>


          <div className="mb-3">

            <input

              type="text"

              name="title"

              className="form-control"

              placeholder="Job Title"

              value={form.title}

              onChange={handleChange}
            />

          </div>


          <div className="mb-3">

            <input

              type="text"

              name="company"

              className="form-control"

              placeholder="Company Name"

              value={form.company}

              onChange={handleChange}
            />

          </div>


          <div className="mb-3">

            <input

              type="text"

              name="location"

              className="form-control"

              placeholder="Location"

              value={form.location}

              onChange={handleChange}
            />

          </div>


          <div className="mb-3">

            <input

              type="text"

              name="salary"

              className="form-control"

              placeholder="Salary"

              value={form.salary}

              onChange={handleChange}
            />

          </div>


          <div className="mb-3">

            <textarea

              name="description"

              className="form-control"

              placeholder="Job Description"

              rows="4"

              value={form.description}

              onChange={handleChange}
            />

          </div>


          <button

            type="submit"

            className="btn btn-dark w-100"
          >

            Add Job

          </button>

        </form>

      </div>

    </div>
  );
}

export default AddJob;