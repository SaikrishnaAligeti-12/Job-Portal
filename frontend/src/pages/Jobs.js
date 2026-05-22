import {
  useEffect,
  useState,
} from "react";

import axios from "axios";


function Jobs() {

  // JOBS STATE
  const [jobs, setJobs] = useState([]);


  // SEARCH STATE
  const [search, setSearch] =
    useState("");


  // FETCH JOBS
  useEffect(() => {

    fetchJobs();

  }, []);


  // GET JOBS
  const fetchJobs = async () => {

    try {

      const res = await axios.get(

        "http://localhost:5000/api/jobs"
      );

      setJobs(res.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch jobs");
    }
  };


  // APPLY JOB
  const applyJob = async (jobId) => {

    try {

      const userId = prompt(
        "Enter User ID"
      );


      const res = await axios.post(

        `http://localhost:5000/api/jobs/apply/${jobId}`,

        { userId }
      );

      console.log(res.data);

      alert("Applied successfully");

    } catch (error) {

      console.log(error);

      alert("Application failed");
    }
  };


  // SAVE JOB
  const saveJob = (job) => {

    // GET OLD SAVED JOBS
    const savedJobs = JSON.parse(

      localStorage.getItem("savedJobs")

    ) || [];


    // CHECK DUPLICATE
    const alreadySaved = savedJobs.find(

      (item) => item._id === job._id
    );


    if (alreadySaved) {

      alert("Job already saved");

      return;
    }


    // SAVE NEW JOB
    savedJobs.push(job);


    localStorage.setItem(

      "savedJobs",

      JSON.stringify(savedJobs)
    );


    alert("Job saved successfully");
  };


  // FILTER JOBS
  const filteredJobs = jobs.filter(

    (job) =>

      job.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );


  return (

    <div className="container mt-4">


      {/* PAGE TITLE */}
      <h2 className="text-center mb-4">

        Available Jobs

      </h2>


      {/* SEARCH BAR */}
      <div className="mb-4">

        <input

          type="text"

          className="form-control"

          placeholder="Search jobs..."

          value={search}

          onChange={(e) =>

            setSearch(
              e.target.value
            )
          }
        />

      </div>


      {/* JOBS ROW */}
      <div className="row">


        {
          filteredJobs.map(

            (job) => (

              <div

                className="col-md-4"

                key={job._id}
              >

                <div className="card shadow mb-4">

                  <div className="card-body">


                    <h3 className="card-title">

                      {job.title}

                    </h3>


                    <p>

                      <b>Company:</b>
                      {" "}
                      {job.company}

                    </p>


                    <p>

                      <b>Location:</b>
                      {" "}
                      {job.location}

                    </p>


                    <p>

                      <b>Salary:</b>
                      {" "}
                      {job.salary}

                    </p>


                    <p>

                      <b>Description:</b>
                      {" "}
                      {job.description}

                    </p>


                    {/* APPLY BUTTON */}
                    <button

                      className="btn btn-primary"

                      onClick={() =>
                        applyJob(job._id)
                      }
                    >

                      Apply Now

                    </button>


                    {/* SAVE BUTTON */}
                    <button

                      className="btn btn-warning ms-2"

                      onClick={() =>
                        saveJob(job)
                      }
                    >

                      Save Job

                    </button>

                  </div>

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}

export default Jobs;