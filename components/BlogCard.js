

const BlogCard = ({post}) => {

    return(
        <article className="entry">

              <div className="entry-img">
                <img src={`http://localhost:8000/`} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">{post.title.rendered}</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  {post.excerpt.rendered}
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>

            </article>
    )
}

export default BlogCard