import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '@fortawesome/fontawesome-free/css/all.min.css';
import userService from '../../services/userService';
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import OnlineDoctorRafiki from "../../assets/images/OnlineDoctorRafiki.png";
import GlobalWarmingRafiki from "../../assets/images/GlobalWarmingRafiki.svg";
import './login.scss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errMess: "",
        }
    }

    // Create function
    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleLoginSubmit = async () => {
        let { handleLogin } = userService;
        this.setState({
            errMess: ''
        })
        try {
            let data = await handleLogin(this.state.email, this.state.password);
            console.log(data)
            if (data && data.message.errCode !== 0) {
                this.setState({
                    errMess: data.message.errMessage
                })
            } else {
                this.props.userLoginSuccess(data.message.user);
                this.setState({
                    errMess: data.message.errMessage
                })
            }
        } catch (error) {
            this.setState({
                errMess: error.response.data.message
            })
        }
    }

    passwordShowHide = (e) => {
        let inputPassword = document.querySelector(".pswInput");
        let icon = e.target;
        console.log(inputPassword)
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
            icon.className = "fas fa-eye-slash icon";
        } else {
            inputPassword.type = 'password';
            icon.className = "fa-regular fa-eye icon";
        }
    }

    render() {

        return (
            <div className='login-container'>
                <div className='login-frame'>
                    <div className='login-info'>
                        <div className='name-service'>
                            <div className='name-child'>
                                <p>5</p>
                                <p>Minute<br />School</p>
                            </div>
                            <p className='name-slogan'>Play How Learn How</p>
                        </div>
                        <div className='info-service'>
                            <h2>
                                Learn From World's
                                <br /> Best Instructor <img alt='' src={GlobalWarmingRafiki} className='svg' />
                                <br /> Around The World.
                            </h2>
                            <img alt='' src={OnlineDoctorRafiki} />
                        </div>
                    </div>
                    <div className='login-form'>
                        <h1>Login</h1>
                        <form action='' method=''>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='email'
                                    placeholder='Email'
                                    className='emailInput'
                                    name='email'
                                    value={this.state.email}
                                    onChange={(e) => this.handleInput(e)}
                                />
                                <label>Password</label>
                                <input type='password'
                                    placeholder='Password'
                                    className='pswInput'
                                    name='password'
                                    value={this.state.password}
                                    onChange={(e) => this.handleInput(e)} />
                                <i className="fa-regular fa-eye icon" onClick={this.passwordShowHide}></i>
                            </div>
                            <div className='errMess' style={{ color: "red", marginTop: "5px" }}>
                                {this.state.errMess}
                            </div>
                            <button type='button'
                                onClick={() => this.handleLoginSubmit()}
                            >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
