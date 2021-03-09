import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.posts}>

            <div className={s.item}>
                <img src='https://instagram-my.ru/wp-content/uploads/2019/12/ava-for-insta02.jpg' />
                    post 1
                    <div>
                    <span> Like </span>
                    <span> Dislike </span>
                </div>

            </div>
        </div>

    )

}

export default Post

