import styles from './Button.module.scss'
type Props = {
    btnText?: string;
    btnFill?: boolean
}

const Button = ({btnText, btnFill}: Props) => {
  return (
    <button className={`${styles.buttonC} ${btnFill ? styles.btnFill : ''}`}>
        {btnText || 'Add to cart'}
    </button>
  )
}

export default Button