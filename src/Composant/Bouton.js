export const Bouton = ({iconeSup, iconeEdit, onClickSup, onClickedit}) => {
    
    
    return(
        <span className="bg-light rounded-3 px-1">
            <img src={iconeSup} alt='' className='' onClick={onClickSup}/>
            <img src={iconeEdit} alt='' className='' onClick={onClickedit}/>
        </span>
    )
}