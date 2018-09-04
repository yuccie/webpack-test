
import { cube } from './math.js'
import './style.css'
import _ from 'lodash'

console.log(
	_.join(['生产', 'module', 'loaded!'], ' ')
)

if(process.env.NODE_ENV === 'production'){
	console.log('现在是生产模式');
}
function component(){
	var ele = document.createElement('pre')
	ele.innerHTML = `
		hello webpack!
		5 cubed is equal to ${cube(5)}
	`
	return ele
}

document.body.appendChild(component())
