import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return ( <div> 
<div>
                <img src='https://i2.rozetka.ua/goods/14195475/125537191_images_14195475794.jpg' />
            </div>

            <div className = {s.description}>
            ava + description
            </div>
            </div>
    )
}

export default ProfileInfo