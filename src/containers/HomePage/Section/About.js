import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions';
//Import image
// Import css files
class About extends Component {

    render() {
        return (
            <>
                <div className='about-container'>
                    <div className='about-title'>
                        <h2><b>Về chúng tôi</b></h2>
                    </div>
                    <div className='about-content'>
                        <div className='about-video' >
                            <iframe width="530" height="300px"
                                src="https://www.youtube.com/embed/147SkAVXEqM?si=_gHlp8JF0_DK54nt"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <p className='about-introduce'>
                            <b>Nhật Toàn - Công ty cổ phần dịch vụ y tế</b> là một trong những công ty hàng đầu trong lĩnh vực y tế tại Việt Nam.
                            Chúng tôi cung cấp các dịch vụ y tế chất lượng cao, đa dạng và phong phú như khám bệnh, chẩn đoán, điều trị, phẫu thuật, cấp cứu, chăm sóc sức khỏe, cẩm nang y tế, cơ sở y tế nổi bật, chuyên khoa khám bệnh, v.v.
                            Đến với Nhật Toàn, quý khách hàng sẽ được phục vụ bởi đội ngũ bác sĩ, y tá, chuyên gia y tế hàng đầu, có trình độ chuyên môn cao, nhiệt tình, chu đáo, tận tâm và chuyên nghiệp.
                            Chúng tôi cam kết mang lại sự hài lòng tuyệt đối cho quý khách hàng.
                        </p>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
