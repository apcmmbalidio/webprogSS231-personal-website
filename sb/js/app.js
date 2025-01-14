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

// Mount the app to the #app element
app.mount('#app');
