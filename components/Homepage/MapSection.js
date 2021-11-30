

function MapSection() {
    return (
        <>
         <section className="grey_section section_gap" id="contact">
            <div className="container">
            <div className="heading">
                <h1><span>Have</span>Question</h1>
                <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br/>
                Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</p>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5"> 

                <div className="row mapArea">
                    <div id="map"   style={{width: '100%', height: '100% '}}></div>
                </div>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div id="message"></div>
                <form method="post" action="php/contact.php" name="cform" id="cform">
                    <div className="form-row clearfix">
                    <input name="name" id="name" type="text" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 normal" placeholder="Your Name"/>
                    </div>
                    <div className="form-row clearfix">
                    <input name="email" id="email" type="email" className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 normal" placeholder="Email address"/>
                    </div>
                    <div className="form-row clearfix">
                    <textarea name="comments" id="comments" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 normal medium" placeholder="Your Comments"></textarea>
                    </div>
                    <input type="submit" id="submit" name="send" className="button" value="Send message"/>
                    <div id="simple-msg"></div>
                </form>
                </div>

            </div>
            </div>
        </section>   
        </>
    )
}

export default MapSection
