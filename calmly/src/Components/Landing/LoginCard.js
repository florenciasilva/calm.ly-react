import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'
import Firebase from '../Firebase/FirebaseCredentials'
import { Link, BrowserRouter } from 'react-router-dom'
import FirebaseAuth from '../Firebase/FirebaseButtons'
import './LoginCard.css'

class loginInput extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    login() {
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                window.location.assign('/news-feed');
            }).catch((err) => {
                alert(err.code);
            });
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='inputContainer'>
                <p className='logo'>calm.ly</p>
                <form>
                    <Row>
                        <Input value={this.state.email} onChange={this.handleOnChange} className='inputHover' s={10} m={10} l={10} label="Email" name='email' type='email' validate></Input>
                    </Row>
                    <Row>
                        <Input value={this.state.password} onChange={this.handleOnChange} className='inputHover' s={10} m={10} l={10} label="Password" validate name='password' type='password'></Input>
                    </Row>
                    <Row>
                        <BrowserRouter>
                            <Link to='/register' s={10} m={10} l={10} className='newUser'>¿Aún no tienes cuenta? Regístrate Aquí</Link>
                        </BrowserRouter>
                    </Row>

                    <Row>
                        <Button type='submit' onClick={this.login} s={10} m={10} l={10} waves='light' className='signInButton'>Conectate</Button>
                        <p className='signInWith'>O puedes iniciar sesión con:</p>
                    </Row>
                </form>
                <Row>
                    <FirebaseAuth />
                </Row>
            </div>
        )
    }
}
export default loginInput