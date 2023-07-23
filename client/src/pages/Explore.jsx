import React from 'react'
import { useNavigate } from 'react-router-dom'
import CommonSection from "../components/ui/Common-section/CommonSection";
import '../styles/Explore.css'
import Hero from '../assets/images/hero.jpg'
import profileImage from '../assets/images/img-07.jpg' 

const Explore = () => {
    const navigate = useNavigate();
  return (
    <>
        <CommonSection title="Explore" />
        <div className="explore">
            <button className='create_post_button' onClick={()=>{navigate('/post')}} > Create Post </button>
            <div className="explore__posts">
            <div class="post">
                <div id="post_header">
                    <div id="post_header_user">
                    <img id="post_user_img" src={Hero} alt=""/>
                    <h2 id="post_username">Deepanshu</h2>
                    </div>
                    <div id="post_header_operations">
                        <a href="/posts/destroy/<%=posts[i]._id%>"> <i class="fa-solid fa-ellipsis-v"></i></a>
                    </div>
                </div>
                <div id="post_content">
                    <img src={profileImage} alt=""/>
                </div>
            <div id="post_footer">
                <div id="post_footer_icons">
                    {/* <!-- post comment button --> */}
                    <div class="post_l_c_s">
                        <a href="#">
                            <i class="fa-solid fa-heart"></i>
                         </a>
                    </div>
                    {/* <!-- post comment button --> */}
                    <div class="post_l_c_s">
                        <a href="#">
                            <i class="fa-solid fa-comment"></i>
                        </a>
                    </div>
                    {/* <!-- Post's Share Button --> */}
                    <div class="post_l_c_s">
                        <a href="#">
                            <i class="fa-solid fa-share"></i>
                        </a>
                    </div>
                </div>
                <div id="post_info">
                    <a href="" id="post_new_comment"><h1>Add Comment</h1></a>
                </div>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Explore