import React from 'react'

function Newsletter() {
    return (
        <>
          <section className="yellow_section section_gap" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <h3 className="signup_text">SignUp To Get The Latest News  Updates</h3>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div id="mesaj"></div>
                        <form method="post" action="php/subscribe.php" name="sform" id="subscribeform">
                            <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                <input name="subemail" id="subemail" type="email" className="normal" placeholder="Email Address"/>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 button">
                                <input type="submit" id="subsubmit" name="send" className="button" value="Subscribe"/>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Newsletter
