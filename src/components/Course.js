const Course = ({course}) => {
    return (
        <div className="card m-1 p-2">
            <div className="card-body">
                <h5 className="card-title">{course.term} CS {course.number}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <div className="card-footer bg-white float-left" style={{height: '20%'}}>
                <p>{course.meets}</p>
            </div>
        </div>

    )
}

export default Course;