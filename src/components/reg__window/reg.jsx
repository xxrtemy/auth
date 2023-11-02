import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import axios from 'axios'


import './reg.css';


const Registration = (props) => {
  const [activeCpass , setActiveCpass] = useState(false);
  const [activePass , setActivePass] = useState(false);
  
    const {
    register,
    formState: {
        errors, isValid
    },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "all"
  });
  const registerWithMask = useHookFormMask(register);
  
  const onSubmit = (data) =>{
    props.data.map((obj) => obj.phone).indexOf(data.phone) != -1 ? alert('Аккаунт с таким телефоном уже существует') : (
    axios({
        method: 'post',
        url: 'https://652c0ae1d0d1df5273ef1252.mockapi.io/items',
        data: {
        id: props.data.lenght,
        phone: data.phone,
        password: data.password
        }
    }),
    alert('Аккаунт успешно создан'),
    reset()
    )
  }
    return (
    <div className='reg__content'>
        <h2 className="title">Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='reg__form'>
            <div className="tel__content">
                <label className='tel__text'>Ваш телефон</label>
                <input 
                type="text" 
                className='tel__input'
                inputMode='numeric' 
                placeholder='+7 (999) 999-99-99'
                {...registerWithMask("phone", '+7 (999) 999-99-99' ,{
                    required: "Обязательно к заполнению",
                })} />
                <div className="error__content">
                    <p className='tel__input--error'>{errors?.phone?.message}</p>
                </div>
            </div>
            <div className="form__password">
                <label className='pass__text'>Пароль</label>
                <i className={activePass ? 'show__pass active' : 'show__pass'} onMouseUp={() => setActivePass(false)} onMouseDown={() => setActivePass(true)}></i>
                <input 
                type={activePass ? 'text' : 'password'}
                name='password' 
                className='pass__input' 
                placeholder='*********'
                {...register('password',{
                    required: "Обязательно к заполнению", 
                    minLength: { value: 4, message: "Пароль должен содержать минимум 4 символа" }
                })}
                />
            </div>
            <div className="error__content">
                <p className='pass__input--error'>{errors?.password?.message}</p>
            </div>   
            <div className="form__password">
                <label className='pass__text'>Подтвердите пароль</label>
                <i className={activeCpass ? 'show__cpass active' : 'show__cpass'} onMouseUp={() => setActiveCpass(false)} onMouseDown={() => setActiveCpass(true)}></i>
                <input 
                type={activeCpass ? 'text' : 'password'}
                name='cpassword'
                className='pass__input' 
                placeholder='*********'
                {...register('сpassword',{
                    required: "Обязательно к заполнению" ,
                    validate: (value) => value === watch("password") || "Пароли должны совпадать",
                    })}
                />
            </div>
                <div className="error__content">
                    <p className='pass__input--error'>{errors?.сpassword?.message}</p>
                </div> 
            <input type="submit" disabled={!isValid} className='btn btn__submit' value="Регистарция" />
        </form>
    </div>
  )
}


export default Registration;