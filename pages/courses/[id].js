

const course = ({course_id}) => {

    return(
        <h1>Single Course with ID: {course_id}</h1>
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            course_id: context.params.id
        }
    }
}

export default course