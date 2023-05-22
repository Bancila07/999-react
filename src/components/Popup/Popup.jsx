import React, {useState} from 'react';
import axios from "../../axios";

const Popup = (props) => {
    const { popup, setPopup , user, setUser} = props;
    const [status , setStatus] = useState('signIn')

    const popupCloseFunc = (e) => {
        if(e.target.classList.contains('overlay')){
            setPopup(false)
        }
    }
    const signInHandle = (e) => {
        e.preventDefault();
        const emailValue = e.target[0].value;
        const passwordValue = e.target[1].value;

        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

        axios
            .post('/login', {
                email: emailValue,
                password: passwordValue,
            })
            .then(({ data }) => {
                e.target[0].value = '';
                e.target[1].value = '';
                setPopup(false);
                localStorage.setItem('user', JSON.stringify(data.user));
            })
            .catch((error) => {
                console.error('Error:', error.response.data);
            });
    };

    const signUpHandle = (e) => {
        e.preventDefault();
        const emailValue = e.target[0].value;
        const nameValue = e.target[1].value;
        const passwordValue = e.target[2].value;

        axios
            .post('/register', {
                email: emailValue,
                name: nameValue,
                password: passwordValue,
                balance: 100,
                avatar: '',
                products: []
            })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                setPopup(false);
                e.target[0].value = '';
                e.target[1].value = '';
                e.target[2].value = '';
            })
            .catch((err) => {
                alert(err);
            });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (status === 'signIn') {
            signInHandle(e);
        } else {
            signUpHandle(e);
        }
    };


    return (
        <div onClick={(e) => popupCloseFunc(e)} className={`overlay ${popup && 'overlay_active'}`}>
            <div className='popup'>
                <form onSubmit={onSubmit} className='popup__form'>
                    <div className='popup__form-top'>
                        <h2 onClick={() => setStatus('signIn')} className={`popup__title ${status === 'signIn' && 'popup__title_active'}`}>Logare</h2>
                        <h2 onClick={() => setStatus('signUp')} className={`popup__title ${status === 'signUp' && 'popup__title_active'}`}>Registrare</h2>
                    </div>
                    <input placeholder='Introduce Email' className="popup__input" type="email"/>
                    {
                        status === 'signUp' && <input placeholder='Introduce Numele' className="popup__input" type="text"/>
                    }
                    <input placeholder='Introduce Parola' className="popup__input" type="password"/>
                    <button className='popup__btn' type='submit'>{status === 'signIn' ? 'Logare' : 'Registrare'}</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;