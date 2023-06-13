import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Index = () => {
    const [blogs, setBlogs] = useState({})
    const getBlogs = async () => {
        const response = await axios.get("http://127.0.0.1:3000/api/v1/blogs")
        console.log(response)
        setBlogs(response.data);
    }
    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <div className="container mt-5">
            {blogs.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {blogs.map((item) => (
                        <div key={item.id} className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                    <a href={`/show/${item.id}`} target='_blank' rel="noreferrer" >Single Item</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    )
}
export default Index