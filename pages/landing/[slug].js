

const landing = ({slug}) => {

    return(
        <h1>Landing of slug: {slug}</h1>
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            slug: context.params.slug
        }
    }
}

export default landing