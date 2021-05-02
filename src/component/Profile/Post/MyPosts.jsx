import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post1/Post';


const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'Haw are you?', likesCount: 31 },
        { id: 2, message: 'Be yourself?', likesCount: 22 }
    ]

    let postsElements =
        posts.map(p => < Post message={p.message} likesCount={p.likesCount} />)

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

                {postsElements}
                {/*< Post message={postDate[0].message} likesCount={postDate[0].likesCount} />
                < Post message={postDate[1].message} likesCount={postDate[1].likesCount} />*/}
                <Post />

            </div>

        </div>

    )

}

export default MyPosts

