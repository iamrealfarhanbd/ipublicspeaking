

const Course = ({course}) => {

    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 tab_text">
                <div className="tab-content"> 
                    <div role="tabpanel" className="tab-pane active" id={course.id}>
                        <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                                        <img src={course.img} alt=""/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7">
                                        <h3>{course.title}</h3>
                                        <p>{course.description}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
           
    </>
    )
}
    export default Course