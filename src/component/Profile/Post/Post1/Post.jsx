import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  

    return (

        <div className={s.posts}>


            <div className={s.item}>
                <img src='https://instagram-my.ru/wp-content/uploads/2019/12/ava-for-insta02.jpg' />
                {props.message}
                    <div>
                    <span> Like </span> {props.likesCount }                   
                   

                </div>

            </div>
        </div>

    )

}

export default Post

