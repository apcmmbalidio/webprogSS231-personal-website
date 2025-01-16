const commentApp = Vue.createApp({
    data() {
      return {
        newComment: {
          name: '',
          message: ''
        },
        comments: [] // Array to store the list of comments
      };
    },
    methods: {
      addComment() {
        // Validate that name and message fields are filled
        if (this.newComment.name && this.newComment.message) {
          const timestamp = new Date().toLocaleString(); // Get current date and time
          const comment = {
            name: this.newComment.name,
            message: this.newComment.message,
            timestamp: timestamp
          };
  
          this.comments.push(comment); // Add new comment to the array
  
          // Clear the input fields after submission
          this.newComment.name = '';
          this.newComment.message = '';
        } else {
          alert('Please fill out both fields!');
        }
      }
    }
  });
  
  // Mount the Vue app to the designated HTML element
  commentApp.mount('#commentApp');
  