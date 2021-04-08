import React from 'react';
import MyPosts from './Post/MyPosts';
import ProfileInfo from './Post/ProfeleInfo/ProfileInfo.jsx';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />

        </div>


    )
}

export default Profile

