new Vue({
    el: '#app',
    data: {
        newComment: {
            name: '',
            message: ''
        },
        comments: []
    },
    methods: {
        addComment: function() {
            if (this.newComment.name && this.newComment.message) {
                const timestamp = new Date().toLocaleString();
                const comment = {
                    name: this.newComment.name,
                    message: this.newComment.message,
                    timestamp: timestamp
                };

                this.comments.push(comment); 

                // Clear the form fields after posting the comment
                this.newComment.name = '';  
                this.newComment.message = ''; 
            } else {
                alert('Please fill in both the name and the comment!');
            }
        }
    }
});
