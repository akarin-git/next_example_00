
import styles from "../../styles/Button.module.scss";
import Link from "next/link";
import ClassNames from "classnames";

function Button ({className, href, disabled, isTxt, children, onClick}) {
    return (
         <>
            {href ? (
                <Link href={href}>
                    <a
                        className={ClassNames(className,styles.btn)}
                    >
                        {children}
                    </a>
                </Link>
            ):(
                <button
                    className={ClassNames(className,styles.btn,{
                        [styles.isTxt]:isTxt,
                    })}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;