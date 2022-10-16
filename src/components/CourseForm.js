import { useParams, useNavigate } from "react-router-dom";
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';

const validateData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
        case 'meets':
            return /^$|([M|Tu|W|Th|F]?[M|Tu|W|Th|F]?[M|Tu|W|Th|F] ([0-9]|[0-9][0-9]):[0-9][0-9]-([0-9]|[0-9][0-9]):[0-9][0-9])/g.test(val) ? '' : 'must contain days and start-end, e.g., MWF 12:00-13:20';
        default: return '';
    }
};

const InputField = ({ name, text, state, change }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{text}</label>
        <input className="form-control" id={name} name={name}
            defaultValue={state.values?.[name]} onChange={change} />
        <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);

const ButtonBar = ({ message, disabled }) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
            <span className="p-2">{message}</span>
        </div>
    );
};

const CourseForm = ({ courses }) => {
    const { id } = useParams();
    const [update, result] = useDbUpdate(`/courses/${id}`);
    const [state, change] = useFormData(validateData, courses[id]);
    const navigate = useNavigate();
    
    const submit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
          update(state.values);
          navigate(-1);
        }
        
    };

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Title" state={state} change={change} />
            <InputField name="meets" text="Time" state={state} change={change} />
            <ButtonBar message={result?.message} />
        </form>
    )
};

export default CourseForm;