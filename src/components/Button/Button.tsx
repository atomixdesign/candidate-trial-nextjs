import './Button.component.scss'

const Button = ({ children, type, onClick, className }: any) => {
    return (
        <button
            className={`btn ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
