import Course from './Course'
import './CourseList.css'

const CourseList = ({ courses }) => {
    return (
        <div className="course-list">
            {Object.entries(courses).map(([id, course]) => <Course key={id} course={course} />)}
        </div>
    )
}

export default CourseList;
