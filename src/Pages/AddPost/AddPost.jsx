import React, {useState} from 'react';
import {category} from "../../category";
import Select from "./Select";


const AddPost = () => {
    const [categoryActive, setCategoryActive] = useState(false)
    const [select, setSelect] = useState('')
    const [choose, setChoose] = useState('')
    const [choose2, setChoose2] = useState('')
    return (
        <div>
            <div className="container">
                <form action="">
                    <h2>Completați anunțul</h2>
                    <p>Fotografii</p>
                    <input type="text"/>
                    <p>descriere</p>
                    <textarea name="" id="" cols="30" rows="10"/>
                    <div>
                        <p>Categorie</p>
                        <button type={"button"} onClick={() => {
                            setCategoryActive(true)
                            setSelect('')
                            setChoose('')
                            setChoose2('')
                        }
                        }>Alege
                        </button>
                        <ul style={{display: categoryActive ? 'block' : 'none'}}>
                            {
                                category.filter(item => item.category.includes(select)).map(item => (
                                    <li>
                                        <span onClick={() => setSelect(item.category)}>{item.category}</span>
                                        <ul style={{display: select ? 'block' : 'none'}}>
                                            {
                                                item.list.filter(el => el.category.includes(choose)).map(el => (
                                                    <li onClick={() => setChoose(el.category)}>{el.category}
                                                        {
                                                            el.list &&
                                                            <ul style={{display: choose.length ? 'block' : 'none'}}>
                                                                {
                                                                    el.list.filter(list => list.name.includes(choose2)).map(list => (
                                                                        <li onClick={() => setChoose2(list.name)}>{list.name}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Select title='Orasul' list={['Chisinau', 'Balti', 'Orhei']}/>
                    <div>
                        <h2>Pretul</h2>
                        <div>
                            <input type="number"/>
                            <div>
                                <label htmlFor="">
                                    <input type="radio"/>
                                    <span>MDL</span>
                                </label>
                                <label htmlFor="">
                                    <input type="radio"/>
                                    <span>USD</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {
                        select === 'Transport' && <div className='dynamic__block-car'>
                            <Select title='Model' list={choose2.length ? category.filter(item => item.category.includes(select))[0].list.filter(el => el.category.includes(choose))[0].list.filter(item => item.name.includes(choose2))[0].models : []}/>
                            <Select title='Anul' list={[1999,2000,2001,2002,2003,2004]}/>
                            <Select title='Motorul' list={[1.8 , 2.5 ,3.0]}/>
                            <Select title='Caroserie' list={['Sedan', 'Bus']}/>
                        </div>
                    }
                    {
                        select === 'Animale' && <div className='dynamic__block-animals'>
                            <Select title='Livrare' list={['Livrare gratisa' , 'Livrare cu plata']}/>
                        </div>
                    }
                    <button type='submit'>Plaseaza</button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;