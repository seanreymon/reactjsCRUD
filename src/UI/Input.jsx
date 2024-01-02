export default function Input({ children, label, id, ...props }) {
  return (
    <>
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
      {children}
    </p>
    </>
  );
}
