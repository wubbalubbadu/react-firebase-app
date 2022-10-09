import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({ courses }) => {
    const [selection, setSelection] = useState("Fall");
    
    return (
      <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <CourseList courses={courses} selection={selection} />
      </div>
    )
    
};

export default TermPage;