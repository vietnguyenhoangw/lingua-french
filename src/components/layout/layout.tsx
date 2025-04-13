import styles from "./layout.module.css";
import {ILayoutProps} from "./layout.type";

export default function Layout({children, ...props}: ILayoutProps) {
    return (
        <div {...props} className={styles.container}>
            {children}
        </div>
    );
}
