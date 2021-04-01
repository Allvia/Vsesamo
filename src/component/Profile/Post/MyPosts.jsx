import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post1/Post';


const MyPosts = () => {
    return (
        <div className={s.postblok}>

<h3> My post  </h3>  
            <div>
                <div>
                    <textarea>   </textarea>
                </div>

                <button> Add post </button>

            </div>

            <div className={s.posts}>

                <Post message='Hi, how are you?' likesCount='21' />
                <Post message="It's my first work" />
                <Post />

            </div>

        </div>

    )

}

export default MyPosts

