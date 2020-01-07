import React, {useState} from 'react';
import './App.css';
import api from './services/api'



function App() {
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');
  async function handleSubmit(event){
    event.preventDefault();
    const response = await api.post('/session',{
      email: emailForm,
      password:passwordForm
    });
    
    if(response.data.length>0){
      const {id, name, email,createdAt,updatedAt} = response.data[0];

      console.log(response);
      console.log("id: "+ id);
      console.log("name: "+ name);
      console.log("email: "+ email);
      console.log("createdAt: "+ createdAt);
      console.log("updatedAt: "+ updatedAt);

      alert('Bem Vindo '+ name)
    }else{
      alert('E-mail ou senha incorreta')
    }
  }

  return (
    <><form onSubmit={handleSubmit}>
        <div className="login-box">
          <div className="email">
            <label htmlFor="email"><b>E-mail: </b></label>
            <input
            id="email"
            type="email"
            placeholder="example@youremail.com"
            onChange={event=>setEmailForm(event.target.value)}
            value={emailForm}
            />
          </div>
          
          <div className="password">
            <label htmlFor="password"><b>Password: </b></label>
            <input
            id="password"
            type="password"
            placeholder="********"
            onChange={event => setPasswordForm(event.target.value)}
            value={passwordForm}
            />
          </div>

          <div className="login">
            <button type="submit"><b>Sign in</b></button>
          </div>

        </div>
      </form>
    </>
  );
}

export default App;
