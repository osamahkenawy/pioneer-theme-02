import Form3 from "../Form/Form3";

const Contact = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_contact_desc">
                <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
                <div className="cs_contact_info_grid">
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                        <a href="tel:80077799">80077799</a>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-envelope-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                        <a href="mailTo:info@pioneeruae.com">info@pioneeruae.com</a>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                        <p className="mb-0">Sharjah, Dubai, Abu Dhabi, <br/> Al Ain - UAE</p>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-clock-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                        <p className="mb-0">Sunday to Friday :</p>
                        <p className="mb-0">10 Am - 05PM</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_44 cs_height_lg_30"></div>
              <div className="cs_social_desc">
                <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                <p className="cs_mb_22">Algae can quickly take over a Car Repair if not addressed promptly. Learn effective.</p>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-youtube"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
                    <Form3></Form3>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <div className="wow fadeInUp">
          <div className="container">
            <div className="row cs_gap_y_30" style={{marginBottom: '40px'}}>
              <div className="col-lg-6">
                <div style={{border: '1px solid #eee', borderRadius: '4px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
                  <h3 className="cs_fs_18 cs_semibold" style={{marginBottom: '10px'}}>ABU DHABI</h3>
                  <div style={{width: '100%', height: '2px', background: '#00aeef', marginBottom: '15px'}}></div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8!2d55.27!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae" width="100%" height="250" style={{border: 0, borderRadius: '4px'}} loading="lazy" title="Abu Dhabi Map"></iframe>
                  <div style={{marginTop: '15px'}}>
                    <p style={{margin: '5px 0'}}>Hotline: <a href="tel:80077799" style={{color: '#00aeef'}}>80077799</a></p>
                    <p style={{margin: '5px 0'}}>Email: <a href="mailto:info@pioneeruae.com" style={{color: '#00aeef'}}>info@pioneeruae.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{border: '1px solid #eee', borderRadius: '4px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
                  <h3 className="cs_fs_18 cs_semibold" style={{marginBottom: '10px'}}>DUBAI</h3>
                  <div style={{width: '100%', height: '2px', background: '#00aeef', marginBottom: '15px'}}></div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.23!3d25.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzEyLjAiTiA1NcKwMTMnNDguMCJF!5e0!3m2!1sen!2sae!4v1600000000001!5m2!1sen!2sae" width="100%" height="250" style={{border: 0, borderRadius: '4px'}} loading="lazy" title="Dubai Map"></iframe>
                  <div style={{marginTop: '15px'}}>
                    <p style={{margin: '5px 0'}}>Hotline: <a href="tel:80077799" style={{color: '#00aeef'}}>80077799</a></p>
                    <p style={{margin: '5px 0'}}>Email: <a href="mailto:info@pioneeruae.com" style={{color: '#00aeef'}}>info@pioneeruae.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{border: '1px solid #eee', borderRadius: '4px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
                  <h3 className="cs_fs_18 cs_semibold" style={{marginBottom: '10px'}}>AL AIN</h3>
                  <div style={{width: '100%', height: '2px', background: '#00aeef', marginBottom: '15px'}}></div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0!2d55.76!3d24.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDEyJzM2LjAiTiA1NcKwNDUnMzYuMCJF!5e0!3m2!1sen!2sae!4v1600000000002!5m2!1sen!2sae" width="100%" height="250" style={{border: 0, borderRadius: '4px'}} loading="lazy" title="Al Ain Map"></iframe>
                  <div style={{marginTop: '15px'}}>
                    <p style={{margin: '5px 0'}}>Hotline: <a href="tel:80077799" style={{color: '#00aeef'}}>80077799</a></p>
                    <p style={{margin: '5px 0'}}>Email: <a href="mailto:info@pioneeruae.com" style={{color: '#00aeef'}}>info@pioneeruae.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{border: '1px solid #eee', borderRadius: '4px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
                  <h3 className="cs_fs_18 cs_semibold" style={{marginBottom: '10px'}}>SHARJAH</h3>
                  <div style={{width: '100%', height: '2px', background: '#00aeef', marginBottom: '15px'}}></div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d55.40!3d25.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzI0LjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v1600000000003!5m2!1sen!2sae" width="100%" height="250" style={{border: 0, borderRadius: '4px'}} loading="lazy" title="Sharjah Map"></iframe>
                  <div style={{marginTop: '15px'}}>
                    <p style={{margin: '5px 0'}}>Hotline: <a href="tel:80077799" style={{color: '#00aeef'}}>80077799</a></p>
                    <p style={{margin: '5px 0'}}>Email: <a href="mailto:info@pioneeruae.com" style={{color: '#00aeef'}}>info@pioneeruae.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
};

export default Contact;