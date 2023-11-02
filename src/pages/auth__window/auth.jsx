
import React, { useState, useEffect } from 'react';
import axios from 'axios'


import './auth.css'
import Modal from '../../components/modal__window/modal';
import Registration from '../../components/reg__window/reg';
import Login from '../../components/log__window/log.jsx';


function Auth(){
const [logActive, setLogActive] = useState(false);
const [regActive, setRegActive] = useState(false);
const [data, setData] = useState([])

useEffect(()=>{
    axios
    .get('https://652c0ae1d0d1df5273ef1252.mockapi.io/items')
    .then((res) => setData(res.data));
},[setData])


function OpenLog(){
    setLogActive(true);
}

function OpenReg(){
    setRegActive(true);
}


return(
<div className="content">
    <div className="container">
        <h1 className='heading'>Выберите действие</h1>
        <button className='btn btn__log' onClick={OpenLog}>Авторизация</button>
        <button className='btn btn__reg' onClick={OpenReg}>Регистрация</button>
    </div>
    <Modal active={logActive} setActive={setLogActive}>
        <Login data ={data}/>
    </Modal>
    <Modal active={regActive} setActive={setRegActive}>
        <Registration data ={data}/>
    </Modal>
</div>
)
}

export default Auth;