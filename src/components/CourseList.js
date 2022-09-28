import Course from './Course'
const CourseList = ({ courses }) => {
    return (
        <table>
            {Object.entries(courses).map(([id, course]) => <Course key={id} course={course} />)}
        </table>

    )
}

export default CourseList;
