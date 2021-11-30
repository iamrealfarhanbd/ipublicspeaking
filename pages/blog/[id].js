

const blogPost = ({post_id}) => {

    return(
        <h1>Blog post with id: {post_id}</h1>
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            post_id: context.params.id
        }
    }
}

export default blogPost