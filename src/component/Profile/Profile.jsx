import React from 'react';
import MyPosts from './Post/MyPosts';
import ProfileInfo from './Post/ProfeleInfo/ProfileInfo.jsx';
import s from './Profile.module.css';


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />

        </div>


    )
}

export default Profile

