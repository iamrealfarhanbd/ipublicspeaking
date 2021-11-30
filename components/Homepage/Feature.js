

const Feature = ({feature}) => {

    return (
        <>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="membership_listing"> <span><i className={`fa ${feature.icon}`}></i></span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          </div>
    </>
    )
}
    export default Feature