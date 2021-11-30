import {useState} from 'react'

function Students() {

    const [showClass, setShowClass] = useState("")


    return (
        <>
            <section className="white_section section_gap" id="testimonial">
        <div className="container">
          <div className="heading">
            <h1><span>Happy</span>Students</h1>
            <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br />
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</p>
          </div>

            <div className="imageSlide">
                <div className={`imageBox ${showClass}`} onMouseEnter={()=>setShowClass("activeImage")} > <img src="http://placehold.it/98x98" width={98} height={98} alt="Student" /></div>
            </div>
            <div className="footerTopContent" style={{height: '137px'}}>
                <div className="quote"><i className="fa fa-quote-left" /></div>
                <ul className="slides testimonialText list-unstyled">
                <li style={{opacity: showClass ? '1' : '0'}}>
                    <p className="font-openBold">Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin. Nullam elementum tellus pretium feugiat</p>
                    <h3 className="uppercase">Jessie Pinkman, MDM Inc.</h3>
                </li>

        




                </ul>
            </div>

        </div>
      </section>
            
        </>
    )
}

export default Students
