import styles from './FormsControls.module.css';

const FormControl = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
        {props.children}
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Textarea = (props) => {
    return <FormControl {...props}>
        <textarea {...props.input} {...props} />
    </FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}>
        <input {...props.input} {...props} />
    </FormControl>
}