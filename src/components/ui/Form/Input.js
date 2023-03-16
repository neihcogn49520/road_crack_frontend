export default function Input({ name, onChange, type, value, disabled, className, ref, onBlur, placeholder }) {
  return <>
    <input name={name} type={type} onChange={onChange} value={value} disabled={disabled} ref={ref} onBlur={onBlur} className={`w-full form-input rounded-md ${className}`} placeholder={placeholder} />
  </>
}