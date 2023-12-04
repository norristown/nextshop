function Button({ children, onClick, primary, className }) {
  const styles = {
    primary: "text-white bg-slate-800 hover:bg-slate-900 p-4",
    secondary: "text-black bg-white hover:bg-slate-50",
    dark: "text-white bg-black hover:bg-black-700 rounded-none",
  };
  return (
    <button
      onClick={onClick}
      className={`${primary ? styles.primary : styles.secondary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
