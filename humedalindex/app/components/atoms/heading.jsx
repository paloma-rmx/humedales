import styles from "./heading.module.css"
export default function heading(props){

    const texto = props.texto;
    const orient = props.orientacion;
    const orientation = orient === "vertical" ? "vertical-lr" : "unset";
    const inlineStyle = {writingMode: orientation}
    // El problema era un typo en la palabra style. Debe ser style, no styles
    return(
        <h1 className={styles.titulo_prin} style={inlineStyle}>
            {texto}
        </h1>
    );
}