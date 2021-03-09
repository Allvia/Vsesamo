import React from 'react';
import MyPosts from './Post/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return (

        <div className={s.content}>
            <div>
                <img src='https://i2.rozetka.ua/goods/14195475/125537191_images_14195475794.jpg' />
            </div>

            <div>
                ava + description
            </div>

            <div>
                My posts

               <MyPosts />
            </div>

        </div>


    )
}

export default Profile

