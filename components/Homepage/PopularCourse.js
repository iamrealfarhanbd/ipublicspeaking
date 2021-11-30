
import Link from 'next/link'

const PopularCourse = ({popular}) => {

    return (
        <>

          <li className="col-xs-12 col-sm-6 col-md-3 col-lg-3 noPadd">
          <div className="img"><Link href={popular.link}><img src={popular.img}  alt=""/></Link><Link className="play-btn" href={popular.link}>
            <i className="fa fa-play fa-3"></i></Link></div>
          <h3><Link href={popular.link}>{popular.title}</Link></h3>
          <p>{popular.date}</p>
        </li>
    </>
    )
}
    export default PopularCourse