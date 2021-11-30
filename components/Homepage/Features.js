import Feature from "./Feature"

const Features = () => {

  const features = [
    {
      'id': '1',
      'icon': "fa-unlock-alt",
      'description' : "Access to all our exclusive courses as many times as you want",
      'title' : "Unlimited access"
    },
    {
      'id': '2',
      'icon': "fa-video-camera",
      'description' : "Exclusive video courses to teach you in a more effective way",
      'title' : "high-quality video tutorials"
    },
    {
      'id': '2',
      'icon': "fa-microphone",
      'description' : "All our mentors are experienced and well-trained to meet your learning needs exactly ",
      'title' : "Expert teachers"
    },
    {
      'id': '2',
      'icon': "fa-file-text-o",
      'description' : "Get certified instantly upon course completions accredited by globally recognised organisations",
      'title' : "Valid Certification"
    },
    {
      'id': '2',
      'icon': "fa-mobile",
      'description' : "Learn anything, anytime, anywhere with no prior requirements ",
      'title' : "On-the-go Learning"
    },
    {
      'id': '2',
      'icon': "fa-life-ring",
      'description' : "Non-stop premium membership service",
      'title' : "24x7 Super Support"
    }

  ]

    return (
        <>
      <section className="white_section section_gap" id="features">
    <div className="container">
      <div className="heading">
        <h1><span>What we </span>ensure</h1>
        <p>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.<br/>Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</p>
      </div>
      <div className="row">
        {
          features.map((feature) => {
            return <Feature feature={feature} key={feature.id} />
          })
        }
        
      </div>
    </div>
  </section>
    </>
    )
}
    export default Features