import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions';

//Import image
import doctor_1 from '../../../assets/doctor_1.jpeg'
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { forEach } from 'lodash';
class Specialty extends Component {

    render() {
        let {settings} = this.props;
        return (
            <>
                <div className='specialty-container'>
                    <div className='specialty-title'>
                        <h2><b>Chuyên khoa khám bệnh</b></h2>
                        <button>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div className='specialty-image' key={index}>
                                <img src={doctor_1} alt='Doctor' />
                                <p><b>Bác sĩ {index + 1}</b></p>
                            </div>
                        ))}
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
