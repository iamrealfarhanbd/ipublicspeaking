import PopularCourse from "./PopularCourse"
import Link from 'next/link'

const PopularCourses = () => {

  const popular = [
    {
      'id': '1',
      'img': "http://placehold.it/400x400",
      'date' : "12/05/2015",
      'link':"/courses/1",
      'title' : "Graphic Designing"
    },
    {
      'id': '2',
      'img': "http://placehold.it/400x400",
      'date' : "12/05/2015",
      'link':"/courses/2",
      'title' : "Online Marketing"
    },
    {
       'id': '3',
      'img': "http://placehold.it/400x400",
      'date' : "12/05/2015",
      'link':"/courses/3",
      'title' : "Brand Strategys"
    },
    {
      'id': '4',
      'img': "http://placehold.it/400x400",
      'date' : "12/05/2015",
      'link':"/courses/4",
      'title' : "Social Marketing"
    },
    {
      'id': '5',
      'img': "http://placehold.it/400x400",
      'date' : "12/05/2015",
      'link':"/courses/5",
      'title' : "On-the-go learning"
    },
    {
      'id': '6',
      'img': "http://placehold.it/400x400",
      'link':"/courses/6",
      'date' : "12/05/2015",
      'title' : "Basic photography"
    },
    {
      'id': '7',
      'img': "http://placehold.it/400x400",
      'link':"/courses/6",
      'date' : "12/05/2015",
      'title' : "Basic photography"
    },
    {
      'id': '8',
      'img': "http://placehold.it/400x400",
      'link':"/courses/6",
      'date' : "12/05/2015",
      'title' : "Basic photography"
    },


  ]

    return (
        <>
  <section className="grey_section section_gap" id="courses">
      <div className="container">
          <div className="heading">
            <h1><span>popular </span>Courses</h1>
            <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br/>
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</p>
          </div>
            <ul className="hover_listing row">
                {
              popular.map((popular) => {
                return <PopularCourse popular={popular} key={popular.id} />
              })
            }
            </ul>
            <p className="text-center noPadd"><Link href="portfolio-fourcolumn.html"><a className="btn btn-primary btn-lg" role="button">View all Courses</a></Link></p>
        </div>
    


  </section>
  
    </>
    )
}
    export default PopularCourses