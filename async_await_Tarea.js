const axios = require('axios')

const url='https://api.chucknorris.io/jokes/random'

    const traernombreP = async()=>{
        const response =await axios.get(url)
        let nombreP =response.data
            console.log(nombreP.value)
            console.log('----------')
        ;
 
    }        
    traernombreP()