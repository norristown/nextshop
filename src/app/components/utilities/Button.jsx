function Button({ children, onClick, primary, className }) {
  const styles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 p-4",
    secondary: "text-black bg-zinc-100 hover:bg-zinc-200",
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
