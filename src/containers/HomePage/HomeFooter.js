import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../store/actions';
//Import image
// Import css files
class homeFooter extends Component {

    render() {
        return (
            <>
                <div className='homeFooter-container'>
                    <p>&copy; 2024 - Bản quyền thuộc về Nhật Toàn - Công ty cổ phần dịch vụ y tế</p>
                </div>

            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(homeFooter);
