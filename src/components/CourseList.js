import Course from './Course'
import './CourseList.css'

const CourseList = ({ courses, selection }) => {
    return (
        <div className="course-list">
            {Object.entries(courses).map(([id, course]) => course.term === selection && <Course key={id} course={course} />)}
        </div>
    )
}

export default CourseList;
