const app = Vue.createApp({
    data() {
        return {
            newComment: {
                name: '',
                message: ''
            },
            comments: []
        };
    },
    methods: {
        addComment() {
            // Check if both name and message fields are filled
            if (this.newComment.name && this.newComment.message) {
                const timestamp = new Date().toLocaleString(); // Get the current timestamp
                const comment = {
                    name: this.newComment.name,
                    message: this.newComment.message,
                    timestamp: timestamp
                };

                // Push the new comment to the comments array
                this.comments.push(comment);

                // Clear the form fields after posting the comment
                this.newComment.name = '';
                this.newComment.message = '';
            } else {
                // Alert if either field is empty
                alert('Please fill in both the name and the comment!');
            }
        }
    }
});

// Mount the Vue app to the #app element
app.mount('#app');
