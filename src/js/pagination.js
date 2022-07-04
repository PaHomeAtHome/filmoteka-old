// const progress = document.getElementById('progres');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const progresCircle = document.querySelectorAll('.circle');
// console.log(progresCircle);

// let currentActive = 1;

// next.addEventListener('click', () => {
//     currentActive += 1;

//     if (currentActive > progresCircle.length) {
//         currentActive = progresCircle.length;
//     }
    
//     update();
// })

// prev.addEventListener('click', () => {
//     currentActive -= 1;
//     if (currentActive < 1) {
//         currentActive = 1;
//     }
//     update();
// })



// function update() {
//     progresCircle.forEach((circle, idx) => {
//         if (idx < currentActive) {
//             progresCircle.classList.add('active');
//         } else {
//             progresCircle.classList.remove('active');
//         }
//     })

//     const actives = document.querySelectorAll('.active');

//     progress.style.width = (actives.length - 1) / (progresCircle.length - 1) * 100 + '%';

//     if (currentActive === 1) {
//         prev.disabled = true;
//     } else if (currentActive === progresCircle.length) {
//         next.disabled = true;
//     } else {
//         prev.disabled = false;
//         next.disabled = false;
//     }
// }
const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');



async function fetchResult() {

    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const result = await response.json();

    let { results } = result;
    console.log(results);

    let notesOnPage = 3;
    let countOfItems = Math.ceil(results.length / notesOnPage);
    
    let showPage = (function() {
	let active;
	
	return function(item) {
		if (active) {
			active.classList.remove('active');
		}
		active = item;
		
		item.classList.add('active');
		
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = results.slice(start, end);
		
		table.innerHTML = '';
        for (let note of notes) {
			let tr = document.createElement('tr');
			table.appendChild(tr);
			
			createCell(note.backdrop_path, tr);
			createCell(note.surname, tr);
			createCell(note.age, tr);
		}
	};
    }());
    
    let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	pagination.appendChild(li);
	items.push(li);
}

showPage(items[0]);

for (let item of items) {
	item.addEventListener('click', function() {
		showPage(this);
	});
}

function createCell(text, tr) {
	let td = document.createElement('td');
	td.innerHTML = text;
	tr.appendChild(td);
}

}

fetchResult()



// let users = [
// 	{name: 'name1',  surname: 'surname1',  age: 30},
// 	{name: 'name2',  surname: 'surname2',  age: 30},
// 	{name: 'name3',  surname: 'surname3',  age: 30},
// 	{name: 'name4',  surname: 'surname4',  age: 30},
// 	{name: 'name5',  surname: 'surname5',  age: 30},
// 	{name: 'name6',  surname: 'surname6',  age: 30},
// 	{name: 'name7',  surname: 'surname7',  age: 30},
// 	{name: 'name8',  surname: 'surname8',  age: 30},
// 	{name: 'name9',  surname: 'surname9',  age: 30},
// 	{name: 'name10', surname: 'surname10', age: 30},
// 	{name: 'name11', surname: 'surname11', age: 30},
// 	{name: 'name12', surname: 'surname12', age: 30},
// 	{name: 'name13', surname: 'surname13', age: 30},
// ];





