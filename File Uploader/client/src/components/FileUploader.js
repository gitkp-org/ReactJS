import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File.");
  const [uploaded, setUploaded] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear Percentage Bar.
          setTimeout(() => {
            setUploadPercentage(0);
          }, 3000);
        }
      });
      const { fileName, filePath } = res.data;
      setUploaded({ fileName, filePath });
      setMessage("File Uploaded!");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server..");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message && <Message msg={message} />}
      <form onSubmit={onSubmit}>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <br />
          <br />
          <Progress percentage={uploadPercentage} />
          <label class="custom-file-label" for="customFile">
            {fileName}
          </label>
        </div>

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {uploaded ? <img src={uploaded.filePath} alt="" /> : null}
      {message}
    </Fragment>
  );
};

export default FileUpload;
