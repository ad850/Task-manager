import React from 'react';




const List = (props) => {



    return (


        <div className="todo_style">

            <button onClick={() => { props.onClick(props.id) }}>




                x</button>




            <li key={props.id}>  {props.text}   </li>
        </div>


    )





}

export default List





