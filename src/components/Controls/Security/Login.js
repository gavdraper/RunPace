import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login'

const clientId = '86234963695-7ud3km4djpa2ad35a6ishf3i50ruqt5p.apps.googleusercontent.com'

function Login(props) {

    let [loading, setLoading] = useState(true);

    const onSuccess = (res) => {
        props.UpdateUser(res);
    };

    const onFailure = (res) => {
        console.log("Failure");
    };

    const onAutoLoadFinished = () => {
        setLoading(false);
    }

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        onAutoLoadFinished,
        isSignedIn: true,
        accessType: 'offline'
    })

    return (
        <span>
            {
                !props.User && !loading &&
                <button className='button' onClick={signIn}>
                    Log In
                </button>
            }
        </span>
    );
}

export default Login;