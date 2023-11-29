//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const Form = (props) => {
    return(
        <>
            <div className='row'>
                <h1 className='text-center'>{props.titre}</h1>
                <div className='col-sm-6 mx-auto mt-3'>
                    <form onSubmit={props.onSubmit}>
                        <div className="input-group mb-3 bg-light rounded-5">
                            <input type="text" className="form-control" value={props.value} onChange={props.onChange} />
                            <button className="input-group-text rounded-5 bg-secondary px-4 btn text-light">{props.nom}</button>
                        </div>
                    </form>
                </div>
                <hr className="border-2 w-75 mx-auto mt-4" />
            </div>
        </>
    )
}

