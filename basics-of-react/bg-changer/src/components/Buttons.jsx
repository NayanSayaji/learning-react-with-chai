// Button component that receives color and onClick function as props

const Button = ({ color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default Button;