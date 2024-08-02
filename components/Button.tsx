interface ButtonProps {
    color: string;
    borderColor: string;
    textColor: string;
    buttonContent: string;
}

const Button: React.FC<ButtonProps> = ({ color, borderColor, textColor, buttonContent }) => (
    <button
        className={`border-2 rounded-full text-sm h-12 w-40`}
        style={{
            backgroundColor: color,
            borderColor: borderColor,
            color: textColor
        }}
    >
        {buttonContent}
    </button>
);

export default Button;
