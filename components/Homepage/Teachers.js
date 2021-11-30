import Teacher from "./Teacher"

const Teachers = () => {

    const teacherLi = [
        {
          'id': '1',
          'img': "http://placehold.it/290x320",
          'date' : "12/05/2015",
          'SocialLink':"/",
          'title' : "ANA DOE",
          'discription' : "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
        },
        {
          'id': '2',
          'img': "http://placehold.it/290x320",
          'date' : "12/05/2015",
          'SocialLink':"/",
          'title' : "Johnathan DOE",
          'discription' : "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
        },
        {
           'id': '3',
          'img': "http://placehold.it/290x320",
          'date' : "12/05/2015",
          'SocialLink':"/",
          'title' : "Lisa Brown",
          'discription' : "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
        },
        {
          'id': '4',
          'img': "http://placehold.it/290x320",
          'date' : "12/05/2015",
          'SocialLink':"/",
          'title' : "Peter Mitchlle",
          'discription' : "tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien"
        },
    
    
    
      ]

    return (


        <>
            <section className="grey_section section_gap" id="teachers">
                <div className="container">
                    <div className="heading">
                        <h1><span>Awesome </span>Teachers</h1>
                        <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br/>
                        Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</p>
                    </div>
                        <ul className="hover_listing row">
                            <li>hellloo</li>
                            {
                            teacherLi.map((teacherLi) => {
                                return <Teacher teacherLi={teacherLi} key={teacherLi.id} />
                            })
                            }
                    
                        </ul>
                </div>
            </section>
           
        </>
    )
}
export default Teachers