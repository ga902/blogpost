import axios from 'axios';
import React, { useState } from 'react';

const Create = () => {
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
            const response = await axios.post('http://127.0.0.1:3000/api/v1/blogs', {
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

    return (
        <div className="container mt-5">
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
    );
};

export default Create;
