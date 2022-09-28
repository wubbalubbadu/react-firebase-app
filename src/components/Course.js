const Course = ({course}) => {
    return (
        <tr>
            <td>{course.term} CS {course.number}: {course.title}</td>
        </tr>
    )
}

export default Course;