import React from 'react';
import { useState } from 'react';
import List from './List'



const App = () => {

    const [list, setlist] = useState('')

    const [item, setitem] = useState([])

    const itemEvent = (event) => {


        setlist(event.target.value);
    }


    const addbutt = () => {
        
        if(!list)
        {
            alert("Add value");
        }
        else{
              setitem((olditems) => {

            return ([...olditems, list])

        })
        setlist('');
        }
    }

    const deleteitems = (id) => {

            setitem((olditems) => {

            return olditems.filter((arrElem, index) => {

                return index !== id;


            });

        })
    }

    return (

        <div className="main_div">

            <div className="center_div">


                <br />
                <h1>ToDo-list</h1>
                <br />
                <input type="text" placeholder="Add your favorites:🛒:" onChange={itemEvent} value={list} />

                <button onClick={addbutt}> +</button>


                <ol >
                    {

                        item.map((itmvalue, index) => {

                            return <List key={index} text={itmvalue} id={index} onClick={deleteitems} />


                        })
                    }
                </ol>

            </div>


        </div>
    )


}

export default App;
