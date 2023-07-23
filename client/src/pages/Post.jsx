import React from 'react'
import '../styles/Post.css'
import CommonSection from "../components/ui/Common-section/CommonSection";

const Post = () => {
  return (
    <>
            <CommonSection title="Post" />
            <div className="post_area">
                <section id="feed_posts">
                    <h4>Create Post</h4>
                    <img className="upload_image" src="/images/upload.jpeg" alt="" width="auto" height="auto"/> 
                    <form action="/posts/create" enctype="multipart/form-data" method="post" >
                        <input type="file" name="image" placeholder="Post"/>
                        <textarea
                        name="caption"
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Type Here..."
                        ></textarea>
                        <input type="submit" values="Post" />
                    </form>
                </section>
            </div>
    </>
  )
}

export default Post