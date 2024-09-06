import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event: actions
    }
    render() {
        let language = this.props.language;
        return (
            <>
                <div className='home-header-container' id='home-header-container'>
                    <div className='header-content-left'>
                        <div className='header-menu'>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className='header-logo'>
                        </div>
                    </div>
                    <div className='header-content-center'>
                        <div className='content-child'>
                            <h5> <FormattedMessage id="homeHeader.medical-specialty" /></h5>
                            <p> <FormattedMessage id="homeHeader.search-doctor" /></p>
                        </div>
                        <div className='content-child'>
                            <h5> <FormattedMessage id="homeHeader.health-facility" /></h5>
                            <p> <FormattedMessage id="homeHeader.select-room" /></p>
                        </div>
                        <div className='content-child'>
                            <h5><FormattedMessage id="homeHeader.doctor" /></h5>
                            <p><FormattedMessage id="homeHeader.select-good-doctor" /></p>
                        </div>
                        <div className='content-child'>
                            <h5><FormattedMessage id="homeHeader.medical-package" /></h5>
                            <p><FormattedMessage id="homeHeader.general-health" /></p>
                        </div>
                    </div>
                    <div className='header-content-right'>
                        <div className='support'>
                            <i className="fa-solid fa-circle-question"></i>
                            <FormattedMessage id="homeHeader.support" />
                        </div>
                        <div className='language'>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}> <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span> </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}> <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='header-banner-title'>
                        <p><FormattedMessage id="banner.medical-foundation" /></p>
                        <b><FormattedMessage id="banner.comphrehensive-health-care" /> </b>
                    </div>
                    <div className='header-search'>
                        <i className="fa-solid fa-magnifying-glass icon-search"></i>
                        <input type='text' placeholder='Tìm chuyên khoa' />
                    </div>
                    <div className='header-function'>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-regular fa-hospital"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.specialist-examination" />
                            </p>
                        </div>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.remote-medical-examination" />
                            </p>
                        </div>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-solid fa-book-medical"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.general-health" />

                            </p>
                        </div>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-solid fa-microscope"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.medical-tests" />

                            </p>
                        </div>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.mental-health" />

                            </p>
                        </div>
                        <div className='function-child'>
                            <div className='function-child-icon'>
                                <i className="fa-solid fa-tooth"></i>
                            </div>
                            <p>
                                <FormattedMessage id="banner.dental-examination" />

                            </p>
                        </div>
                    </div>
                    <div className='header-blur-banner'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
