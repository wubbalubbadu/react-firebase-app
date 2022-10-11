import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Modal from './Modal';
import SelectedCourses from "./SelectedCourses";

const TermPage = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const toggleSelected = (item) => {
      setSelected(selected.includes(item) ? selected.filter( x => x !== item) : [...selected, item]);
    }

    return (
      <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <button className="ms-auto btn btn-dark float-end" onClick={openModal}>Check Out</button>
        <Modal open={open} close={closeModal}>
          <SelectedCourses selected={selected} courses={courses} />
        </Modal>
        <CourseList courses={courses} selection={selection} selected={selected} toggleSelected={toggleSelected}/>
      </div>
    )
    
};

export default TermPage;