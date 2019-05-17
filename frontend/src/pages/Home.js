import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';


import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
       
      }

   

    componentDidMount() {
      
    }

   
   

    render() {
        return (
            <div>
                <section className="freedom_event_section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="mybar">
                                    <div className="freedom_rise_text">
                                        <h2>Freedom Rise growth Event </h2>
                                    </div>

                                    <div className="countdown_timer">
                                        <div id="countdown" className="counter">
                                            <Countdown daysInHours={true} date={Date.now() + 6000 * 6000} />
                                        </div>
                                    </div>

                                    <div className="raised_goal">
                                        <p>Raised $28,000  </p>
                                        <p><img src="https://pledje.com/wp-content/uploads/2018/08/goal-image.png" width="15px;" /> Goal $48,000 </p>
                                    </div>

                                    <div className="view_campaigns">
                                        <a href="#" className="btn btn-round-white">View Live Campaigns</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="hero_image" style={{ "backgroundImage": "url(images/herobg.png)" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h1>Pledje Produced <span>$180,000</span> More </h1>
                                <p>From the same pool of donaors than previous experiences we had with other platforms.</p>
                                <p><strong>David Cohen</strong>, Yachad Outreach Center</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="videobox">

                    <div className="container-fluid video_box_header">
                        <div className="row">

                            <div className="col-md-4 col-sm-5 col-xs-10 p-0">
                                <div className="heading_tag_left text-right text-uppercase" style={{ "backgroundImage": "url(images/bgblue1.png)" }}>Meet Pledje</div>
                            </div>


                            <div className="col-md-4 col-sm-5 col-md-offset-4 col-sm-offset-2 col-xs-10 col-xs-offset-2 p-0" >
                                <div className="heading_tag_right text-left text-uppercase" style={{ "backgroundImage": "url(images/bluebg2.png)" }}>Testimonial</div>
                            </div>

                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 col-sm-6">
                                <div className="video_iframe">
                                    <iframe className="border_frame" width="100%" height="215" src="https://www.youtube.com/embed/RKkhH44iKfs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="col-md-5 col-sm-6">
                                <div className="video_iframe">
                                    <iframe className="border_frame" width="100%" height="215" src="https://www.youtube.com/embed/ObSQ-Hjl9Jk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="testimonial">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div className="carousel slide" data-ride="carousel" id="quote-carousel">

                                    <Carousel>
                                        <Carousel.Item>

                                            <p><img className="left_quote" src="images/b1.png" /><span>Pledje Produced</span> <span className="testimonial_price">$180,000</span><span> More</span> from the same pool of donaors than previous experiences we had with other platforms.<img className="right_quote" src="images/b2.png" /></p>
                                            <small><strong>David Cohen</strong>, Yachad Outreach Center</small>

                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <p><img className="left_quote" src="images/b1.png" /><span>Pledje Produced</span> <span className="testimonial_price">$180,000</span><span> More</span> from the same pool of donaors than previous experiences we had with other platforms.<img className="right_quote" src="images/b2.png" /></p>
                                            <small><strong>David Cohen</strong>, Yachad Outreach Center</small>

                                        </Carousel.Item>
                                        <Carousel.Item>

                                            <p><img className="left_quote" src="images/b1.png" /><span>Pledje Produced</span> <span className="testimonial_price">$180,000</span><span> More</span> from the same pool of donaors than previous experiences we had with other platforms.<img className="right_quote" src="images/b2.png" /></p>
                                            <small><strong>David Cohen</strong>, Yachad Outreach Center</small>

                                        </Carousel.Item>
                                    </Carousel>

                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="why_pledje">
                    <div className="head_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-10 p-0">
                                    <div className="heading_tag text-right text-uppercase" style={{ "backgroundImage": "url(images/green_tag_left.png)" }}>Why Pledje?</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="why_grid_main clearfix">
                                    <div className="w_grid clearfix" data-aos="zoom-out-right">
                                        <img src="images/w1.png" />
                                        <div className="why_txt">
                                            <h3>Keep Up to 100%</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-right">
                                        <img src="images/w2.png" />
                                        <div className="why_txt">
                                            <h3>Help you to grow Faster</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-right">
                                        <img src="images/w3.png" />
                                        <div className="why_txt">
                                            <h3>Keep Up to 100%</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-right">
                                        <img src="images/w2.png" />
                                        <div className="why_txt">
                                            <h3>Help you to grow Faster</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="why_grid_main clearfix">
                                    <div className="w_grid clearfix" data-aos="zoom-out-left">
                                        <img src="images/w5.png" />
                                        <div className="why_txt">
                                            <h3>Increase amount of donations</h3>
                                            <p>utilizing our proprietary technology & tactics</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-left">
                                        <img src="images/w6.png" />
                                        <div className="why_txt">
                                            <h3>Unique marketing</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-left">
                                        <img src="images/w7.png" />
                                        <div className="why_txt">
                                            <h3>Increase amount of donations</h3>
                                            <p>utilizing our proprietary technology & tactics</p>
                                        </div>
                                    </div>

                                    <div className="w_grid clearfix" data-aos="zoom-out-left">
                                        <img src="images/w6.png" />
                                        <div className="why_txt">
                                            <h3>Unique marketing</h3>
                                            <p>Utilizing proven tactics to secure business sponsors covering the entire cost of campaign</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="special_offer">

                    <div className="spacial_img">
                        <img src="images/special_offer_bg.png" />
                    </div>

                    <div className="head_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-10 p-0">
                                    <div className="heading_tag text-right text-uppercase" style={{ "backgroundImage": "url(images/green_tag_left.png)" }} >Special Offer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container special_offer_caption">
                        <div className="row">
                            <div className="col-md-7 col-sm-6 text-center">
                                <p>Qualified Campaigns Will receive</p>
                                <div className="campaign_price">$11,147</div>
                                <h3 className="text-uppercase">Marketing, Design, production services</h3>
                                <a href="#" className="more_info_anchor">Click here for more info!</a>
                            </div>
                            <div className="col-md-5 col-sm-6">
                                <div className="special_image">
                                    <img src="images/special_img.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="case_study">
                    <div className="head_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-md-offset-8 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-2 p-0">
                                    <div className="heading_tag text-left text-uppercase" style={{ "backgroundImage": "url(images/bluebg2.png)" }}>Case Study</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="featured_grid">
                                    <div className="featured_img">
                                        <img src="images/case-study1.jpg" />
                                        <div className="case-study-badge">
                                            <div className="left" style={{ "background": "url(images/case_left_img.png) no-repeat center left" }}>Bonus</div>
                                            <div className="center"><img src="https://pledje.com/wp-content/uploads/2018/08/rocket.png" alt="rocket" /></div>
                                            <div className="right" style={{ "background": "url(images/case_right_img.png) no-repeat center right" }}>Round</div>
                                        </div>
                                    </div>
                                    <div className="featured_item">
                                        <ul className="f_item_uline">
                                            <li></li>
                                            <li><img src="images/goal_icon.png" /> Goal $ 100,000</li>
                                            <li><img src="images/icon-raised.png" /> Raised $ 150,000</li>
                                        </ul>
                                    </div>
                                    <div className="featured_desc">
                                        <ul className="">
                                            <li><img src="images/check_icon.png" />36 Hours</li>
                                            <li><img src="images/check_icon.png" />360 Social Shares</li>
                                            <li><img src="images/check_icon.png" />2 Bonus Rounds</li>
                                            <li><img src="images/check_icon.png" />2X Growth With More Than $30,000 Raised from previos Camapaignsa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="featured_grid">
                                    <div className="featured_img">
                                        <img src="images/case-study1.jpg" />
                                        <div className="case-study-badge">
                                            <div className="left" style={{ "background": "url(images/case_left_img.png) no-repeat center left" }}>Bonus</div>
                                            <div className="center"><img src="https://pledje.com/wp-content/uploads/2018/08/rocket.png" alt="rocket" /></div>
                                            <div className="right" style={{ "background": "url(images/case_right_img.png) no-repeat center right" }}>Round</div>
                                        </div>
                                    </div>
                                    <div className="featured_item">
                                        <ul className="f_item_uline">
                                            <li></li>
                                            <li><img src="images/goal_icon.png" /> Goal $ 100,000</li>
                                            <li><img src="images/icon-raised.png" /> Raised $ 150,000</li>
                                        </ul>
                                    </div>
                                    <div className="featured_desc">
                                        <ul className="">
                                            <li><img src="images/check_icon.png" />36 Hours</li>
                                            <li><img src="images/check_icon.png" />360 Social Shares</li>
                                            <li><img src="images/check_icon.png" />2 Bonus Rounds</li>
                                            <li><img src="images/check_icon.png" />2X Growth With More Than $30,000 Raised from previos Camapaignsa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="featured_grid">
                                    <div className="featured_img">
                                        <img src="images/case-study1.jpg" />
                                        <div className="case-study-badge">
                                            <div className="left" style={{ "background": "url(images/case_left_img.png) no-repeat center left" }}>Bonus</div>
                                            <div className="center"><img src="https://pledje.com/wp-content/uploads/2018/08/rocket.png" alt="rocket" /></div>
                                            <div className="right" style={{ "background": "url(images/case_right_img.png) no-repeat center right" }}>Round</div>
                                        </div>
                                    </div>
                                    <div className="featured_item">
                                        <ul className="f_item_uline">
                                            <li></li>
                                            <li><img src="images/goal_icon.png" /> Goal $ 100,000</li>
                                            <li><img src="images/icon-raised.png" /> Raised $ 150,000</li>
                                        </ul>
                                    </div>
                                    <div className="featured_desc">
                                        <ul className="">
                                            <li><img src="images/check_icon.png" />36 Hours</li>
                                            <li><img src="images/check_icon.png" />360 Social Shares</li>
                                            <li><img src="images/check_icon.png" />2 Bonus Rounds</li>
                                            <li><img src="images/check_icon.png" />2X Growth With More Than $30,000 Raised from previos Camapaignsa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(Home);