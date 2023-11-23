import React, {useState} from 'react';
import './App.css';
import {data} from "./consts/data";

function App() {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState(null);
    const [welcome, setWelcome] = useState(null);

    const handleSubmit = () => {
        const findLogin = data.find((user) => user.user_name === login)
        const findPassword = data.find((user) => user.password === password)
        if (findLogin === undefined){
            setErrors("Taki użytkownik nie istnieje")
        }
        else if (findPassword === undefined && findLogin !== undefined){
            setErrors("Błędne hasło")
        }
        if (findLogin && findPassword) {
            setWelcome("Witaj " + findLogin.user_name)
        }
    }

    return (
        <div className="App">
            <div className="loginBox">
                <div className="titleBox">Logowanie</div>
                <div className="formBox">
                    <p>Podaj login</p>
                    <input type="text" id="login" name="login" placeholder="Login"
                           onChange={(e) => setLogin(e.target.value)}/>
                    <p>Podaj hasło</p>
                    <input type="password" id="password" name="password" placeholder="Hasło"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <button type="submit" id="submit" name="submit" className="submitButton" onClick={handleSubmit}>
                        ZATWIEDŹ
                    </button>
                    <p>{errors}</p>
                    <p>{welcome}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
