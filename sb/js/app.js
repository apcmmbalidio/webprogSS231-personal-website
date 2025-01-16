const app = Vue.createApp({
    data() {
        return {
            newComment: {
                name: '',
                message: '',
            },
            comments: [],
        };
    },
    methods: {
        addComment() {
            if (this.newComment.name.trim() && this.newComment.message.trim()) {
                const timestamp = new Date().toLocaleString();
                this.comments.push({
                    name: this.newComment.name,
                    message: this.newComment.message,
                    timestamp: timestamp,
                });
                this.newComment.name = '';
                this.newComment.message = '';
            } else {
                alert('Please fill in both the name and the comment!');
            }
        },
    },
});

// Mount the Vue app
app.mount('#app');
