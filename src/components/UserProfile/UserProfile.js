import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../Navigation/NavigationItemsContainer';
import UserProfileEdit from './UserProfileEdit/UserFrofileEdit';
import './UserProfile.scss';

export const userProfile = ({userInfo, token, changeUserInfo}) => {

    const [isChange, setIsChange] = useState(false);

    const isClickChangeHandler = () => {
        setIsChange(!isChange);
    };

    return (
        <React.Fragment>
            <NavigationItems/>
            {!isChange &&
                (<div>
                    <h2>Your profile information</h2>
                    <ul className='userInfoList'>
                        {Object.keys(userInfo).filter(item => item !== 'password').map(item => (
                            <li key={item}>
                                <p>{item}: <span>{userInfo[item]}</span></p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={isClickChangeHandler}>Change info</button>
                </div>)
            }
            {isChange &&
                <UserProfileEdit
                    isClickChangeHandler={isClickChangeHandler}
                    changeUserInfo={changeUserInfo}
                    token={token}
                    userInfo={userInfo}/>
            }
        </React.Fragment>
    )
};

userProfile.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })
};

export default userProfile;