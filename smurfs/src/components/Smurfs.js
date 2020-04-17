import React, { useContext, useEffect } from 'react';
import {SmurfContext} from '../contexts/SmurfContext';
import axios from 'axios'

const Smurfs = () => {
    const {smurfs, setSmurfs} = useContext(SmurfContext)
    // console.log(smurfs, setSmurfs)
    // console.log(smurfState)
    useEffect(()=>{
        axios.get(`http://localhost:3333/smurfs`)
            .then(response => {
                // console.log(response.data)
                setSmurfs(
                    ...smurfs,
                    response.data
                )
            })
            .catch(error => { console.log('Error: ', error)})
    }, [])

    console.log(smurfs)
    return (
        <div>
            {smurfs.length >= 1 ? smurfs.map(smurf=>(
                <div key={smurf.id}>
                    <h3>{smurf.name}</h3>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            )) : null}
        </div>
    )
}

export default Smurfs;