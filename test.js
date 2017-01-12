/*const arr = [{
	name: 'a',
	age: 11,
	score: 40
}, {
	name: 'b',
	age: 13,
	score: 61
}, {
	name: 'c',
	age: 20,
	score: 59
}, {
	name: 'd',
	age: 15,
	score: 80
}];

total = arr.filter(function(item) {
	return item.score >= 60;
}).reduce(function(pre, cur) {
	return pre + cur.score;
}, 0);

console.log(total);



function sum(n, d, k) {
	const list = [];
	for (var i = 0; i < n; i++) {
		list.push(i);
	}

	return list.reduce(function(pre, cur){
		const sum = pre + cur * d + k
		console.log(pre, cur, sum)
		return sum
	}, 0)

}


console.log(sum(10, 2, -1));*/



/*var Queue = {
	push(task) {
		this._queue = this._queue || [];

		if (task) {
			this._queue.push(task);
			setTimeout(() => {
				this._notify()
			})
		}
	},

	_notify() {
		Worker.receive(this);
	},

	isEmpty() {
		return this._queue.length <= 0
	},

	front: function() {
		return this._queue.shift()
	}
}


var Worker = {

	run() {
		for (var i = 0; i < 3; i++) {
			var task = Queue.front();
			if (task) {
				task();
			}
		}


		this.working = setInterval(() => {
			for (var i = 0; i < 3; i++) {
				var task = Queue.front();
				if (task) {
					task();
				} else {
					clearInterval(this.working)
				}
			}
		}, 1000)

	},

	receive(_) {
		if (!_.isEmpty()) {
			if (!this.working) {
				this.run();
			}
		}
	}
}


for (var i = 0; i < 50; i++) {
	Queue.push(function(index){
		return function(){
			console.log('我是任务' + index);
		}
	}(i));
}*/


function a(fn) {
	fn();
}


function b() {
	var j = 0;

	for (var j = 0; j < 10; j++) {
		a(() => {
			setTimeout(() => {
				console.log(j);
			})
		})
	}
}

// b()
// 

