// ##Arreglos
var tasks = [
    {
        'name': 'Estudy for be better software ingennier',
        'duration': 120
    },
    {
        'name': 'Take a coffe',
        'duration': 15
    },
    {
        'name': 'Read my bible',
        'duration': 30
    }
]

// var takes_names = []
// // Option  for
// for(let i = 0, max = tasks.length; i < max; i++){
//     takes_names.push(tasks[i].name)
// }

//#### map
var tasks_names = tasks.map((task) => task.name)
console.log(tasks_names)

//#### filter
var tasks_names = tasks.filter((task) => task.duration >= 120)
console.log(tasks_names)


