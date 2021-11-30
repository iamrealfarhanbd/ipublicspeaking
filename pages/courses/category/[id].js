

const coursesOfCategory = ({category_id}) => {

    return(
        <h1>Courses of category with id: {category_id} with searchbar</h1>
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            category_id: context.params.id
        }
    }
}

export default coursesOfCategory