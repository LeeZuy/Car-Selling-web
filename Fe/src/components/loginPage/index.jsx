//library
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// imgs
import Background from '/public/imgs/background.png';
// svgs
import ArrowRightIcon from '../../icons/loginAndRegister/ArrowRightIcon';
//
import './style.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/login', formData,
            {
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = response.data;
            if (data) {
                localStorage.setItem('currentUser', JSON.stringify(data.data));
            };
            alert(response.data.message);
            navigate('/');
            location.reload();
        } catch (error) {
            alert(error.response.data.message);
        }
    };
    return (
        <div className='loginPage'>
            <img src={Background} alt="" className='background'/>
            <div className='overlay'>
                <div className='content'>
                    <h1>Đăng nhập</h1>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <div className='row'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='Điền email của bạn'
                            name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" placeholder='Nhập mật khẩu'
                            name="password" value={formData.password} onChange={handleChange}/>
                        </div>
                        <button type='submit'>Đăng nhập</button>
                    </form>
                    <div className='groupRedirectToRegister'>
                        <p>Bạn chưa có tài khoản?</p>
                        <div className='redirectToRegister' onClick={() => {navigate('/register')}}>
                            <p>Đăng ký</p>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage