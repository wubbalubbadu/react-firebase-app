import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Modal from './Modal';
import SelectedCourses from "./SelectedCourses";
import { catchConflicts } from '../utilities/checkValidTime';

const TermPage = ({ courses }) => {
  const [selection, setSelection] = useState("Fall");
  const [selected, setSelected] = useState([]);
  const [conflicts, setConflicts] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    if (!conflicts.includes(item)) {
      setSelected(
        selected.includes(item)
          ? selected.filter(x => x !== item)
          : [...selected, item]
      );

      const newConflicts = catchConflicts(courses, item);
      setConflicts(
        selected.includes(item)
          ? conflicts.filter(x => !newConflicts.includes(x))
          : [...conflicts, ...newConflicts.filter(x => !conflicts.includes(x))]
      )
    }
  }

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <button className="ms-auto btn btn-dark float-end" onClick={openModal}>Check Out</button>
      <Modal open={open} close={closeModal}>
        <SelectedCourses selected={selected} courses={courses} />
      </Modal>
      <CourseList courses={courses} selection={selection} selected={selected} toggleSelected={toggleSelected} conflicts={conflicts} />
    </div>
  )

};

export default TermPage;