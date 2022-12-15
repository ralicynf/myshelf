import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '../services/Auth'

const Login = ({ setUser }) => {
    let navigate = useNavigate()

    const initialState = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await LoginUser(formState)
        if (payload) {
            await setUser(payload)
            setFormState(initialState)
            navigate('/')
        } else {
            window.alert('Your username or password is incorrect. Try again.')
            setFormState({ email: formState.email, password: '' })
    }
    }

    return (
        <div>
            <div>
                <form className="login-box the-form form-items" onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="email">Email   </label>
                        <input 
                            className='login-input'
                            onChange={handleChange}
                            name='email'
                            type='text'
                            placeholder='email'
                            value={formState.email}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor='password'>Password   </label>
                        <input 
                            className='login-input'
                            onChange={handleChange}
                            name='password'
                            type='password'
                            placeholder='password'
                            value={formState.password}
                            required
                        />
                    </div>
                    <div className='btn'>
                        <button id='login-btn'>Login!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login