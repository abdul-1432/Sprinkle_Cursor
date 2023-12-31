const div = document.querySelector('#sparkler')

function sparkle() {
	// add a spark to body
	var p = document.createElement('div')
	p.className = 'particle'
	p.style.left = div.getBoundingClientRect().x - 6 + 'px'
	p.style.top = div.getBoundingClientRect().y - 8 + 'px'
	document.body.prepend(p)
	
	// move spark randomly across x/y axis
	setTimeout(function(){
		let pp = document.querySelectorAll('.particle')[0],
				dir_x = Math.random() < .5 ? -1 : 1,
				dir_y = Math.random() < .5 ? -1 : 1
		
		pp.style.left = parseInt(pp.style.left) - (dir_x * (Math.random() * 250)) + 'px'
		pp.style.top = parseInt(pp.style.top) - (dir_y * (Math.random() * 250)) + 'px'
		pp.style.opacity = '0'
		pp.style.transform = 'scale(.25)'
		
		//remove spark once done moving
		setTimeout(function(){
			pp.remove()
		},550)
		
	}, 10)
}

// run the sparks
let shiny = setInterval(sparkle, 20)

// click to change color
window.addEventListener('click', function() {
	let c = 'hsl('+Math.random()*360+'deg, 100%, 50%)'
	document.body.style.setProperty('--color-spark', c)
})

// track mouse location and move sparkler
window.addEventListener('mousemove', function(e){
	let x = e.clientX,
			y = e.clientY
	
	div.style.left = x + 'px'
	div.style.top = y + 'px'
})