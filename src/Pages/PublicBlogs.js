import React from 'react'
import BlogItem from '../Components/BlogItem'
import BlogItem1 from '../Components/BlogItem1'
import { Link } from 'react-router-dom'
export default function PublicBlogs() {
    return (
        <>
            <div className='container'>
                <h1 className='publicblogs-heading mt-3 text-center'>PUBLIC BLOG AND EXPERIENCES</h1>
                <hr className='my-3' />
                <BlogItem />
                <BlogItem1 />
                <BlogItem />
                <BlogItem1 />
                <BlogItem />
                <BlogItem1 />
                <BlogItem />
                <BlogItem1 />
                <BlogItem />
                <BlogItem1 />
                <div class="container-fluid h-100 d-flex justify-content-center align-items-center">
                <Link to="/login&signup" class="btn btn-warning my-5 d-grid gap-2 col-6 mx-auto" type="button">Publish a Post</Link> 
                </div>
                <hr className='my-5' />
                <h1 className='publicblogs-heading-footer my-3 text-center'>FOOTER</h1>
            </div>
        </>
    )
}

