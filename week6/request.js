const axios = require('axios')

axios.get('http://localhost:8080/food')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

axios.post('http://localhost:8080/food', {
    name: 'Apple',
    kcal: '80',
    isVegan: '1'
    })
    .then((res) => {
        console.log(res.status)
    })
    .catch((err) => {
        console.log(err)
    })