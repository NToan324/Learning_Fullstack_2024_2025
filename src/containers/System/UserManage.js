import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import userService from '../../services/userService';
import ModalManagement from './ModalManagement';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isModal: false,
            isEditModal: false,
            infoUserToEdit: {
                id: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            }
        }
    }

    async componentDidMount() {
        await this.getAllUser();
    }

    getAllUser = async () => {
        let response = await userService.getAllUser('All');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleDelete = async (id) => {
        await userService.handleDelete(id);
        await this.getAllUser();
    }

    handleModal = () => {
        this.setState({
            isModal: true
        })
    }

    handleModalToggle = () => {
        this.setState({
            isModal: !this.state.isModal
        })
    }

    handleEditModalToggle = () => {
        this.setState({
            isEditModal: !this.state.isEditModal
        })
    }
    handleCreateUser = async (data) => {
        try {
            let newUser = await userService.handleCreateUser(data);
            alert(newUser.createUser.errMessage);
            await this.getAllUser();
        } catch (error) {

        }
    }

    handleEditModal = (item) => {
        this.setState({
            isEditModal: true,
            infoUserToEdit: {
                id: item.id,
                email: item.email,
                password: item.password,
                firstName: item.firstName,
                lastName: item.lastName,
                address: item.address,
            }
        })
    }

    handleSaveEdit = async (data) => {
        try {
            await userService.handleEditUser(data);
            await this.getAllUser()
        } catch (e) {
            console.log(e)
        }
    }
    // Test
    // notify = () => {
    //     toast.success('Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Bounce,
    //     });
    // }
    render() {
        let listUsers = this.state.arrUsers;
        return (
            <div className='users-container'>

                {listUsers && listUsers.length > 0 ? (
                    <>
                        {this.state.isEditModal && <ModalEditUser
                            isModal={this.state.isEditModal}
                            handleEditModalToggle={this.handleEditModalToggle}
                            infoUserToEdit={this.state.infoUserToEdit}
                            handleSaveEdit={this.handleSaveEdit}
                        />}

                        <div className='list-users-header'>
                            <h2>List of Users</h2>
                            <button onClick={this.handleModal}>
                                <ModalManagement
                                    // handleModal={this.handleModal}
                                    isModal={this.state.isModal}
                                    handleModalToggle={this.handleModalToggle}
                                    handleCreateUser={this.handleCreateUser}
                                />
                                <i className="fa-solid fa-plus"></i>
                                New User
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers.map((item, index) => (
                                    < tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td className='action'>
                                            <button className='act-delete' onClick={() => this.handleDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
                                            <button className='act-edit' onClick={() => this.handleEditModal(item)}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </>
                ) :
                    <h2 className='list-users-header'> No user found</h2>
                }
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
