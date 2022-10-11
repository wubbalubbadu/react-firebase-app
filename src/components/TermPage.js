import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    const [selected, setSelected] = useState([]);
    
    const toggleSelected = (item) => setSelected(
      selected.includes(item) ? selected.filter( x => x !== item) : [...selected, item]
    );

    return (
      <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <CourseList courses={courses} selection={selection} selected={selected} toggleSelected={toggleSelected}/>
      </div>
    )
    
};

export default TermPage;