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
        addComment() {
            const timestamp = new Date().toLocaleString();
            this.comments.push({
                ...this.newComment,
                timestamp
            });
            this.newComment.name = '';
            this.newComment.message = '';
        }
    }
});
