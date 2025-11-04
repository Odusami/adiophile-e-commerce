import Button from '../Button/Button';
import styles from './TextContent.module.scss'
type Props = {
    label?: string,
    title: string,
    content: string,
    category: string,
     btnText?: string;
    btnFill?: boolean
};

const TextContent = ({label, title, content, category, btnText, btnFill}: Props) => {
  return (
    <div className={styles.textContentBody}>
        {label &&
      <h6>{label}</h6> }
      <h2>{title} <br/> <span>{category}</span></h2>
      <p>
       {content}
      </p>
      <Button btnText={btnText} btnFill={btnFill}/>
    </div>
  );
};

export default TextContent;
