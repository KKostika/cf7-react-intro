type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    color?: string;
}


const CounterButton = ({onClick, disabled = false, label, color = "bg-cf-dark-gray"}: ButtonProps) => {
    return (
        <>
            <button className={"disabled:bg-gray-600 text-white py-2 px-4 " + color}
                    onClick={onClick}
                    disabled={disabled}
                 
                    >
                {label}
            </button>
        </>
    )
}
export default CounterButton;
