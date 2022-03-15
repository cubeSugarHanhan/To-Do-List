var app = new Vue({
	el: "#app",
	data: {
		matter: '',
		toDo_matter: [],
		done_matter: [],
	},

	methods: {
		addMatter: function() {
			if (this.matter.trim().length > 0) {
				this.toDo_matter.push(this.matter);
				this.matter = '';
				this.saveData();
			}
		},

		move_matter: function(index) {
			this.done_matter.push(this.toDo_matter[index]);
			this.delete_matter(index);
		},

		delete_matter: function(index) {
			this.toDo_matter.splice(index, 1);
			this.saveData();
		},

		recovery_matter: function(index) {
			this.toDo_matter.push(this.done_matter[index]);
			this.done_matter.splice(index, 1);
			this.saveData();
		},

		delete_doneMatter: function() {
			this.done_matter = [];
			this.saveData();
		},

		saveData: function() {
			window.localStorage.setItem('toDo_matter', JSON.stringify(this.toDo_matter));
			window.localStorage.setItem('done_matter', JSON.stringify(this.done_matter));
		},
	},

	mounted: function() {
		if (window.localStorage.getItem("toDo_matter") !== null && window.localStorage.getItem('done_matter') !== null) {
			this.toDo_matter = JSON.parse(window.localStorage.getItem("toDo_matter"));
			this.done_matter = JSON.parse(window.localStorage.getItem('done_matter'));
		}
    }
})
