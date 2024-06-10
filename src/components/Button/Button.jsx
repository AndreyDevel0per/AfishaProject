import './Button.css'

export default function Button({children, onClick, disabled}) {
    return (
        <button className = {disabled ? 'Button disabled': 'Button'} onClick={onClick}>
            {children}
        </button>
    )
}