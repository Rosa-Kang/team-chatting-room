import {useState} from 'react';
import axios from 'axios';


const projectId = `c5962e78-3056-48c1-bf27-81c50dad8b43`;
const url = `https://api.chatengine.io/chats`


const LoginForm =() => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=> {

        e.preventDefault();
        
        const authObject = { 
            'Project-ID' : projectId, 
            'User-Name': username, 
            'User-Secret': password }
        
        try {
          await  axios.get(url, {headers : authObject});

          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          
          window.location.reload();
          setError('');
        } catch (error) {
          setError('Oops, incorrect credentials.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    autoComplete="nope"
                    type="text" 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value)}
                    className="input"
                    placeholder="Username"
                    required
                    />
                     <input
                    autoComplete="nope"
                    type="password" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}
                    className="input"
                    placeholder="Password"
                    required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
                </div>

        </div>
    )
}

export default LoginForm;