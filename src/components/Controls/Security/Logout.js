import React from 'react';
import { useGoogleLogout } from 'react-google-login'

const clientId = '86234963695-7ud3km4djpa2ad35a6ishf3i50ruqt5p.apps.googleusercontent.com'

function Logout(props) {

    const onLogoutSuccess = (res) => {
        props.UpdateUser(res);
    };

    const onFailure = (res) => {
        props.UpdateUser(null);
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    })

    return (
        <span>
            {
                props.User &&
                <button className='button' onClick={signOut}>
                    Log Out
                </button>
            }
        </span>
    );
}

export default Logout;