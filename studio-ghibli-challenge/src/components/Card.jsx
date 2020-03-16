import React from 'react'

const Card = (props) => {
    console.log(props)
    return(
        <div className='container'>            
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>{props.titulo}</h3>
                    <p className='card-description'>{props.descricao}</p>
                </div>
             
            </div>                   
        </div>
    )
}

export default Card