const ButtonMultiuso = (props) => {
    const { texto, handler, cssStyle, style } = props;
    return (
        <button className={cssStyle} style={style} onClick={handler}>
            {texto}
        </button>
    );
};
export default ButtonMultiuso;


// En este caso, el componente ButtonMultiuso es un componente funcional que recibe props y devuelve un botón con el texto y el estilo especificados.