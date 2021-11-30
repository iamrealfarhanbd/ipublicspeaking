import BlogCard from '../../components/BlogCard'
import Pagination from '../../components/Pagination'

const blog = ({posts}) => {

    return(
        <>
            <section id="blog" className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 entries">
                            {
                                posts.map((post) => <BlogCard key={post} post={post}/>)
                            }
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://trainingexpress.org.uk/wp-json/wp/v2/posts?page=2`)
    const json = await res.json()

    return {
        props: {
            posts: json
        }
    }
}


export default blog