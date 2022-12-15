import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const Register = () => {
    let navigate = useNavigate()

    const initialState = {
        username: '',
        name: '',
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
          username: formState.username,
          name: formState.name,
          email: formState.email,
          password: formState.password
        })
        setFormState(initialState)
        navigate('/login')
      } 

    return (
        <div>
            <div>
                <form className='box the-form' onSubmit={handleSubmit}>
                    <h2>Register as new user:</h2>
                    <div className='flex-column'>
                        <div className='input-fields'>
                            <label htmlFor='username'>Username   </label>
                            <input
                                className='input-reg'
                                onChange={handleChange}
                                name='username'
                                type='text'
                                placeholder='username'
                                value={formState.username}
                                required
                            />
                        </div>
                        <div className='input-fields'>
                            <label htmlFor='name'>Name   </label>
                            <input
                                className='input-reg'
                                onChange={handleChange}
                                name='name'
                                type='text'
                                placeholder='name'
                                value={formState.name}
                                required
                            />
                        </div>
                        <div className='input-fields'>
                            <label htmlFor='email'>Email   </label>
                            <input
                                className='input-reg'
                                onChange={handleChange}
                                name='email'
                                type='text'
                                placeholder='email'
                                value={formState.email}
                                required
                            />
                        </div>
                        <div className='input-fields'>
                            <label htmlFor='password'>Password   </label>
                            <input
                                className='input-reg'
                                onChange={handleChange}
                                name='password'
                                type='password'
                                placeholder='password'
                                value={formState.password}
                                required
                            />
                        </div>
                        <div className='btn'>
                            <button id='register-btn' type='submit'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register