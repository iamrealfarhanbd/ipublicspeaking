import Course from "./Course"
import {useState} from 'react'

const Courses = () => {

   const [
       active,
       setActive
   ]=useState(0)
  const courses = [
    {
      'id': '1',
      'img': "/assets/images/graphicdesigning.png",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis. ",
      'title' : "Graphic Designing"
    },
    {
      'id': '2',
      'img': "http://placehold.it/400x400",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.",
      'title' : "Online Marketing"
    },
    {
       'id': '3',
      'img': "http://placehold.it/400x400",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.",
      'title' : "Brand Strategys"
    },
    {
      'id': '4',
      'img': "http://placehold.it/400x400",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.",
      'title' : "Social Marketing"
    },
    {
      'id': '5',
      'img': "http://placehold.it/400x400",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.",
      'title' : "On-the-go learning"
    },
    {
      'id': '6',
      'img': "http://placehold.it/400x400",
      'description' : "Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis. <br/> Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.",
      'title' : "Basic photography"
    }

  ]

    return (
        <>
  <section className="grey_section section_gap" id="course">
    <div className="container">
        <div className="heading">
            <h1><span>Free</span>Resources</h1>
            <p>Expert derived free resources absolutely FREE for everyone.<br/>
            Avail the learnings to perform an excellent presentation or public speaking on stage.</p>
        </div>

        
        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <ul className="nav nav-tabs custom-nav-tabs" role="tablist">
              {courses.map((course,index)=>{
                return (<li onClick ={(e) =>{
                    setActive(index)
                }} role="presentation" className={index===active && "active"}><a href={`#${course.id}`} aria-controls={course.id} role="tab" data-toggle="tab">
                     {course.title}</a></li>)
              })}
            
          </ul>
        </div>
        <Course course={courses[active]}  />
          
            
        </div>
    </div>


  </section>
  
    </>
    )
}
    export default Courses