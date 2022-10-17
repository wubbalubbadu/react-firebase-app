import { PencilSquare } from 'react-bootstrap-icons';
import { useAuthState } from '../utilities/firebase';
import './Course.css'

const Course = ({ id, course, selected, toggleSelected, conflicts }) => {
    const [user] = useAuthState();

    return (
        <div className={`card m-1 p-2 ${selected.includes(id) ? 'selected' : ''} ${conflicts.includes(id) ? 'conflicted' : ''} my-card`} onClick={()=>toggleSelected(id)}>
            <div className="card-body">
            
                <h5 className="card-title">{course.term} CS {course.number}{user && <a className="editButton" href={`/course/${id}`}><PencilSquare /></a>}</h5>
                <p className="card-text">{course.title}</p>
            </div>
            <div className="card-footer bg-white float-left" style={{height: '20%'}}>
                <p>{course.meets}</p>
            </div>
        </div>

    )
}

export default Course;