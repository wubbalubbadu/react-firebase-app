import Course from './Course'
import './CourseList.css'

const CourseList = ({ courses, selection, selected, toggleSelected, conflicts }) => {
    return (
        <div className="course-list">
            {Object.entries(courses).map(([id, course]) => course.term === selection && <Course id={id} key={id} course={course} selected={selected} toggleSelected={toggleSelected} conflicts={conflicts} />)}
        </div>
    )
}

export default CourseList;
