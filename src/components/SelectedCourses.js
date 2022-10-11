import './SelectedCourses.css'
const SelectedCourses = ({ courses, selected }) => {
    return (
        <div className="selected-courses">
            {
                selected.length === 0
                ? <p>You don't have anything in your course list. Add a course by clicking on course cards!</p>
                : selected.map(course => (
                    <div className="card" key={course}>
                        <div className="card-body" key={courses[course].id}>
                            <h5>{courses[course].term} CS {courses[course].number}</h5>
                            <p className='info'>{courses[course].title}</p>
                            <p className='info'>{courses[course].meets}</p>
                        </div>
                    </div>
                    ))
            }
        </div>
    )
}

export default SelectedCourses;