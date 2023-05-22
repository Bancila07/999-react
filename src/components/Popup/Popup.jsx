import React, {useState} from 'react';
import axios from "../../axios";
import { useForm } from 'react-hook-form';

const Popup = (props) => {
    const { popup, setPopup , user, setUser} = props;
    const [status , setStatus] = useState('signIn')

    const {
        register,
        reset,
        handleSubmit} = useForm()

    const popupCloseFunc = (e) => {
        if(e.target.classList.contains('overlay')){
            setPopup(false)
        }
    }
    const signInHandle = (data) => {
        axios.post('/login', data)
            .then((res) => {
                setPopup(false);
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user));
                reset()
            })
            .catch((error) => {
                console.error('Error:', error.response.data);
            });
    };

    const signUpHandle = (data) => {
        axios
            .post('/register', {
                ...data,
                balance: 100,
                avatar: '',
                products: []
            })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                setPopup(false);
                reset()
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div onClick={(e) => popupCloseFunc(e)} className={`overlay ${popup && 'overlay_active'}`}>
            <div className='popup'>
                <form onSubmit={status === 'signIn' ? handleSubmit(signInHandle) : handleSubmit(signUpHandle)} className='popup__form'>
                    <div className='popup__form-top'>
                        <h2 onClick={() => setStatus('signIn')} className={`popup__title ${status === 'signIn' && 'popup__title_active'}`}>Logare</h2>
                        <h2 onClick={() => setStatus('signUp')} className={`popup__title ${status === 'signUp' && 'popup__title_active'}`}>Registrare</h2>
                    </div>
                    <input {...register('email')} placeholder='Introduce Email' className="popup__input" type="email"/>
                    {
                        status === 'signUp' && <input {...register('name')} placeholder='Introduce Numele' className="popup__input" type="text"/>
                    }
                    <input {...register('password')} placeholder='Introduce Parola' className="popup__input" type="password"/>
                    <button className='popup__btn' type='submit'>{status === 'signIn' ? 'Logare' : 'Registrare'}</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;