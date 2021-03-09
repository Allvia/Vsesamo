import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post1/Post';


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea> </textarea>
                <button> Add post </button>
                <button> Remove </button>
            </div>

            <div className={s.posts}>

                <Post />
                <Post />
                <Post />

            </div>

        </div>

    )

}

export default MyPosts

