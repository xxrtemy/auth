import React, { useState } from 'react'

import './dload__win.css';
import defaultImg from '../../assets/profile-default-svgrepo-com.svg';


const Downloading = () => {
  
  const [file, setFile] = useState(defaultImg);
  

  const handleChange = (e) =>{
    e.preventDefault();
    if(e.target.files[0].size < 5*1024*1024) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    else{
      alert('Файл слишком большой. Максимальный размер файла: 5MB.');
    }
  }
  
  
  return (
    <div className='dload__content'>
      <form action="" className='dload__form'>
      <h1 className='dload__tittle'>
        Загрузка аватара
      </h1>
      <p className='dload__text'>
        Загрузите файл размером до 5Мб
        По формату: JPG, PNG, GIF
      </p>
      <label className='btn dload__btn'>
        <span className=''>Выбрать файл</span>
        <input className='hide' type="file" accept=".jpg, .jpeg, .png, .gif" onChange={handleChange}/>
      </label>
      </form>
      {file && <img className='profile_img' src={file} alt="Uploaded" />}
    </div>
  )
}


export default Downloading;