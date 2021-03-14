import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post1/Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea> Write me </textarea>
                <button> Add post </button>
                <button> Remove </button>
            </div>
       
            <div className={s.posts}>

                <Post message='Hi, how are you?' likesCount = '21' />
                <Post message="It's my first work" />
                <Post />

            </div>

        </div>

    )

}

export default MyPosts

