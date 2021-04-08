import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post1/Post';


const MyPosts = (orops) => {
let postDate = [
    {id: 1, message: 'Haw are you?', likesCount: 12},
    {id: 2, message: 'Be yourself?', likesCount: 24}

]
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

                < Post message={postDate[0].message} likesCount={postDate[0].likesCount} />
                < Post message={postDate[1].message} likesCount={postDate[1].likesCount} />
                <Post />

            </div>

        </div>

    )

}

export default MyPosts

