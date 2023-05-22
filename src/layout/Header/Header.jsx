import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import {BsSearch} from "react-icons/bs"
import MenuCatalog from "../../components/MenuCatalog/menuCatalog";
import {arrItem} from "../../list";

const Header = (props) => {
    const { user, setUser } = props;
    const [popup, setPopup] = useState(false)
    const logOutUser = () => {
        localStorage.removeItem('user')
        setUser({})
    }

    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <div className='header__left'>
                        <h1 className='header__title'>< Link className='header__title-link' to='/'>999</Link></h1>
                        <Link className='header__link' to='#'>Pentru Business</Link>
                    </div>
                    <div className='header__right'>
                        {
                            user.email ?
                                <div className='header__user'>
                                    <p className='header__user-name'>Bani pe cont: {user.balance} MDL.</p>
                                    <p className='header__user-name'>{user.name}</p>
                                    <button className='header__user-btn' onClick={() => logOutUser()} type={"button"}>Iesire</button>
                                </div> :
                                <p onClick={() => setPopup(true)} className='header__login'>Logare - Registrare</p>
                        }
                        <button type={"button"} className='header__btn'>adauga un anunt</button>

                    </div>
                </nav>
            </div>
            {
                popup && <Popup user={user} setUser={setUser} popup={popup} setPopup={setPopup} />
            }
            <div className='header__bottom'>
                 <div className="container">
                     <div className='header__bottom-search'>
                         <input placeholder='Cauta un anunt...' className='header__bottom-input' type="search"/>
                         <button className='header__bottom-icon'><BsSearch/></button>
                     </div>
                     <ul className='header__bottom-list'>
                         {
                             arrItem.map(item => (
                                 <MenuCatalog {...item}/>
                             ))
                         }
                     </ul>
                 </div>
            </div>
        </header>
    );
};

export default Header;