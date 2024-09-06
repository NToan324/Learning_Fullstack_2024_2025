import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions';
//Import image
import doctor_1 from '../../../assets/doctor_2.jpeg'
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class OutStandingDoctor extends Component {

    render() {
        let { settings } = this.props;
        return (
            <>
                <div className='outStandingDoctor-container'>
                    <div className='outStandingDoctor-title'>
                        <h2><b>Bác sĩ nổi bật tuần qua</b></h2>
                        <button>Xem thêm</button>
                    </div>
                    <Slider {...settings}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div className='outStandingDoctor-image' key={index}>
                                <img src={doctor_1} alt='Doctor' />
                                <div className='outStandingDoctor-inform'>
                                    <p>Giáo sư, Tiến sĩ</p>
                                    <p>BS. Nguyễn Văn A</p>
                                    <p>Khoa bệnh {index + 1}</p>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
