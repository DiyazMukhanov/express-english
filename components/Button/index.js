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

    return (
        <button
        className={classes}
        onClick={onClick}
    >
            {children}
        </button>);
}