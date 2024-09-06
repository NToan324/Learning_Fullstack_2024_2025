import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import userService from '../../services/userService';
import UserManage from './UserManage';
import lodas from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                id: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            },
            errMess: '',
        }
    }

    componentDidMount() {
        let { infoUserToEdit } = this.props;
        if (infoUserToEdit && !lodas.isEmpty(infoUserToEdit)) {
            this.setState({
                userInfo: {
                    id: infoUserToEdit.id,
                    email: infoUserToEdit.email,
                    password: '123456', //temporary data
                    firstName: infoUserToEdit.firstName,
                    lastName: infoUserToEdit.lastName,
                    address: infoUserToEdit.address,
                }
            })
        }
    }

    toggle = () => {
        this.props.handleEditModalToggle();
    }

    handleInput = (e) => {
        let copyState = { ...this.state.userInfo };
        let { name, value } = e.target;
        copyState[name] = value;
        this.setState({
            userInfo: copyState
        })
    }

    validateEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    showErrorMessage = (item, value) => {
        let itemInput = document.getElementById(item);
        this.setState({
            errMess: `Value ${item} is not valid`,
        }, () => {
            itemInput.focus();
            value.innerHTML = this.state.errMess;
            value.style.display = 'block';
        })
    }

    handleValidParams = (data) => {
        let flags = true;
        for (let item of Object.keys(data)) {
            if (item === 'id')
                continue
            let value = document.getElementById(`errMess-${item}`);
            value.style.display = 'none';
            if (data[item] === '') {
                this.showErrorMessage(item, value);
                flags = false;
                break;
            }
        }
        return flags
    }

    handleSaveEdit = async () => {
        let data = this.state.userInfo;
        let flags = this.handleValidParams(data);
        if (flags) {
            this.props.handleSaveEdit(data);
            this.props.handleEditModalToggle();
            this.setState({
                userInfo: {
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    address: '',
                },
            })
        }
    }

    render() {
        const { userInfo } = this.state;
        return (
            <div>
                <Modal
                    isOpen={this.props.isModal}
                    toggle={() => this.toggle()}
                    size='lg'
                    {...this.args}
                    centered>
                    <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
                    <ModalBody>
                        <div className='form-group-create-users'>
                            <div className='group-email'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' placeholder='' name='email' value={userInfo.email} className='form-control' onChange={(e) => this.handleInput(e)} disabled></input>
                                <p id='errMess-email' style={{ color: 'red', display: 'none', marginTop: '5px' }}></p>
                            </div>
                            <div className='psw-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' placeholder='' name='password' value={userInfo.password} className='form-control' onChange={(e) => this.handleInput(e)} disabled></input>
                                <p id='errMess-password' style={{ color: 'red', display: 'none', marginTop: '5px' }}></p>
                            </div>
                            <div className='firstName-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text' id='firstName' placeholder='' name='firstName' value={userInfo.firstName} className='form-control' onChange={(e) => this.handleInput(e)}></input>
                                <p id='errMess-firstName' style={{ color: 'red', display: 'none', marginTop: '5px' }}></p>
                            </div>
                            <div className='lastName-group'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input type='text' id='lastName' placeholder='' name='lastName' value={userInfo.lastName} className='form-control' onChange={(e) => this.handleInput(e)}></input>
                                <p id='errMess-lastName' style={{ color: 'red', display: 'none', marginTop: '5px' }}></p>
                            </div>
                            <div className='address-group'>
                                <label htmlFor='address'>address</label>
                                <input type='text' id='address' placeholder='' name='address' value={userInfo.address} className='form-control' onChange={(e) => this.handleInput(e)}></input>
                                <p id='errMess-address' style={{ color: 'red', display: 'none', marginTop: '5px' }}></p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleSaveEdit()}>
                            Save Change
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
