import { useState } from "react";

import axios from "axios";


function ResumeUpload() {

  // FILE STATE
  const [file, setFile] = useState(null);


  // HANDLE UPLOAD
  const handleUpload = async (e) => {

    e.preventDefault();


    console.log("UPLOAD BUTTON CLICKED");

    console.log(file);


    // FILE CHECK
    if (!file) {

      alert("Please select a file");

      return;
    }


    // FORMDATA
    const formData = new FormData();

    formData.append(

      "resume",

      file
    );


    try {

      console.log("SENDING REQUEST...");


      // API CALL
      const res = await axios.post(

        "https://job-portal-backend-upve.onrender.com/api/resume/upload",

        formData,

        {
          headers: {

            "Content-Type":
              "multipart/form-data",
          },
        }
      );


      console.log("SUCCESS:");

      console.log(res.data);


      alert(
        "Resume uploaded successfully"
      );

    } catch (error) {

      console.log("UPLOAD ERROR:");

      console.log(error);


      alert(

        error.response?.data?.error ||

        error.message
      );
    }
  };


  return (

    <div className="container mt-5">


      <div className="card shadow p-4">


        <h1 className="text-center mb-4">

          Upload Resume

        </h1>


        <form onSubmit={handleUpload}>


          {/* FILE INPUT */}
          <div className="mb-4">

            <input

              type="file"

              className="form-control"

              onChange={(e) => {

                console.log(
                  e.target.files[0]
                );

                setFile(
                  e.target.files[0]
                );
              }}
            />

          </div>


          {/* BUTTON */}
          <button

            type="submit"

            className="btn btn-dark w-100"
          >

            Upload Resume

          </button>

        </form>

      </div>

    </div>
  );
}

export default ResumeUpload;