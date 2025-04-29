import style from "./heading.module.css"
export default function heading(props){

    const texto = props.texto;
    const orient = props.orientacion;
    const orientation = orient === "vertical" ? "vertical-rl" : "unset";
    const style = {writingMode: orientation}
    return(
        <h1 className={style.titulo_prin} styles={{"writingMode":orientation}}>
            {texto}
        </h1>

    );
}