
import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import { useNavigate } from 'react-router-dom';


import './log.css'

const Login = (props) => {
  let navigate = useNavigate();

  const [activePass , setActivePass] = useState(false);
  
    const {
    register,
    formState: {
        errors, isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all"
  });
  const registerWithMask = useHookFormMask(register);
  const onSubmit = (data) =>{
    props.data.some(obj => obj.phone === data.phone && obj.password === data.password) ? 
    (
      reset(),
      navigate('/profile')
    )
    : 
      alert('Неверно указан номер телефона или пароль');
  }
  
  return (
    <div className='log__content'>
      <h2 className="title">Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='log__form'>
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
                    <p className='tel__input--error'>{errors.phone?.message}</p>
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
            <input type="submit" disabled={!isValid} className='btn btn__submit' value="Авторизация"/>
        </form>
        
    </div>
  )
}


export default Login;