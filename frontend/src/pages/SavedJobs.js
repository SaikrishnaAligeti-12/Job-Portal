function SavedJobs() {

  const savedJobs = JSON.parse(

    localStorage.getItem("savedJobs")

  ) || [];


  return (

    <div className="container mt-4">

      <h2 className="mb-4">

        Saved Jobs

      </h2>


      <div className="row">

        {
          savedJobs.map((job) => (

            <div
              className="col-md-4"

              key={job._id}
            >

              <div className="card shadow mb-4">

                <div className="card-body">

                  <h4>

                    {job.title}

                  </h4>

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

                </div>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default SavedJobs;