import styles from './Button.module.scss'
import classNames from 'classnames'

export const Button = ({
    children,
    className,
    onClick,
    variant = 'contained',
    size = 'medium'
                       }) => {
    const classes = classNames(styles.button,
        styles[variant],
        styles[size],
        className
        )

    const handleClick = event => {
        onclick(event);
    }

    return (
        <button
        className={classes}
        onClick={handleClick}
    >
            {children}
        </button>);
}