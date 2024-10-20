function ComandoBoolean(props){

    return(
        <>
        {props.logado? (
            <h1>Bom dia!</h1>
        ) : (
            <h1>Boa noite!</h1>
        )}
        </>
    );
};

export default  ComandoBoolean
