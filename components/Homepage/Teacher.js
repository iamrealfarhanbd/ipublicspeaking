

const Teacher = ({teacherLi}) => {

    return (
        <>

                    <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
                    <div className="img"><img src={teacherLi.img} alt=""/>
                        <ul className="hover-social-icons">
                        <li><a href="{teacherLi.SocialLink}"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="{teacherLi.SocialLink}"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="{teacherLi.SocialLink}"><i className="fa fa-google"></i></a></li>
                        <li><a href="{teacherLi.SocialLink}"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <h3 className="uppercase">{teacherLi.title}</h3>
                    <p>{teacherLi.discription}</p>
                    </li>

           
        </>
    )
}
export default Teacher