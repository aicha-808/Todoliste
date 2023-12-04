import { Bouton } from "./Bouton"

export const TodoItem = ({children, iconeSup, iconeEdit, onClickSupBout, onClickEditBout}) => {

    return(
        <li className="list-group-item d-flex justify-content-between
         align-items-center mb-3 rounded-5 bg-secondary  p-1 ">
            <span className="px-3 text-light" > {children}</span>
            <Bouton iconeSup={iconeSup} onClickSup={onClickSupBout}
                iconeEdit={iconeEdit}  onClickedit={onClickEditBout} />
        </li>
    )
}