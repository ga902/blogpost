import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const [FormData, setFormData] = useState({
    title: '',
    body: ''
});

const handleChange = (event) => {
    setFormData({
        ...FormData,
        [event.target.name]: event.target.value
    });
};

const postReq = async () => {
    try {
        const response = await axios.post(`http://127.0.0.1:3000/api/v1/blogs/${id}/posts`, {
            title: FormData.title,
            body: FormData.body
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (FormData) {
        postReq();
    }
}; 
  const getBlog = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/api/v1/blogs/${id}`);
    setBlog(response.data);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.body}</p>
        </div>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={FormData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        rows="4"
                        cols="50"
                        value={FormData.body}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
    </div>
  );
};

export default Show;
