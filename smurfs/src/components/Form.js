import React, {useState, useContext} from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const Form = () => {
    const [ newSmurf, setNewSmurf ] = useState({ 
        name: '', 
        age: '',
        height: '',
        id: Date.now()
    })

    const {setSmurfs} = useContext(SmurfContext)

    const postNewCharacter = e => {
        e.preventDefault();
        // console.log(nameInput.na
        axios.post(`http://localhost:3333/smurfs`, newSmurf)
            .then(response => {
                console.log('Post Success: ', response.data)
                setSmurfs(response.data)
            })
            .catch(error => {
                console.log('Post Error: ', error)
            })
        setNewSmurf({
            name: '', 
            age: '',
            height: ''
        })
    }

    return (
        <div className='search-input'>
            <form>
                <input 
                    type='text'
                    value={newSmurf.name}
                    onChange={(e)=> setNewSmurf({...newSmurf, name: e.target.value})}
                    placeholder='Enter a name...'
                />
                <input 
                    type='text'
                    value={newSmurf.age}
                    onChange={(e)=> setNewSmurf({...newSmurf, age: e.target.value})}
                    placeholder='Enter age'
                />
                <input 
                    type='text'
                    value={newSmurf.height}
                    onChange={(e)=> setNewSmurf({...newSmurf, height: e.target.value})}
                    placeholder='Enter height'
                />
                <button onClick={postNewCharacter}>Submit</button>
            </form>
        </div>
    )
}


export default Form;