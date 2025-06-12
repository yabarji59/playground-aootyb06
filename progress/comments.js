class CommentSystem {
    constructor() {
        this.comments = [];
        this.container = null;
        this.currentUser = null;
    }

    init(containerId, user) {
        this.container = document.getElementById(containerId);
        this.currentUser = user;
        this.loadComments();
        this.render();
        this.setupEventListeners();
    }

    loadComments() {
        const savedComments = localStorage.getItem('playground_comments');
        if (savedComments) {
            this.comments = JSON.parse(savedComments);
        }
    }

    saveComments() {
        localStorage.setItem('playground_comments', JSON.stringify(this.comments));
    }

    addComment(text, section) {
        const comment = {
            id: Date.now(),
            text,
            section,
            user: this.currentUser,
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: []
        };

        this.comments.push(comment);
        this.saveComments();
        this.render();
        this.showNotification('Commentaire ajouté avec succès !');
    }

    addReply(commentId, text) {
        const comment = this.comments.find(c => c.id === commentId);
        if (comment) {
            comment.replies.push({
                id: Date.now(),
                text,
                user: this.currentUser,
                timestamp: new Date().toISOString(),
                likes: 0
            });
            this.saveComments();
            this.render();
            this.showNotification('Réponse ajoutée avec succès !');
        }
    }

    likeComment(commentId) {
        const comment = this.comments.find(c => c.id === commentId);
        if (comment) {
            comment.likes++;
            this.saveComments();
            this.render();
        }
    }

    deleteComment(commentId) {
        this.comments = this.comments.filter(c => c.id !== commentId);
        this.saveComments();
        this.render();
        this.showNotification('Commentaire supprimé avec succès !');
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="comments-section">
                <h3>Commentaires</h3>
                <div class="comment-form">
                    <textarea id="comment-text" placeholder="Ajouter un commentaire..."></textarea>
                    <select id="comment-section">
                        <option value="variables">Variables</option>
                        <option value="arrays">Tableaux</option>
                        <option value="conditions">Conditions</option>
                        <option value="loops">Boucles</option>
                        <option value="functions">Fonctions</option>
                    </select>
                    <button id="submit-comment">Publier</button>
                </div>
                <div class="comments-list">
                    ${this.renderComments()}
                </div>
            </div>
        `;
    }

    renderComments() {
        return this.comments
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map(comment => `
                <div class="comment" data-id="${comment.id}">
                    <div class="comment-header">
                        <span class="user">${comment.user}</span>
                        <span class="section">${comment.section}</span>
                        <span class="timestamp">${this.formatDate(comment.timestamp)}</span>
                    </div>
                    <div class="comment-content">${comment.text}</div>
                    <div class="comment-actions">
                        <button class="like-btn" data-id="${comment.id}">
                            <span class="likes">${comment.likes}</span> ❤️
                        </button>
                        <button class="reply-btn" data-id="${comment.id}">Répondre</button>
                        ${this.currentUser === comment.user ? 
                            `<button class="delete-btn" data-id="${comment.id}">Supprimer</button>` : 
                            ''}
                    </div>
                    <div class="replies">
                        ${this.renderReplies(comment)}
                    </div>
                </div>
            `).join('');
    }

    renderReplies(comment) {
        return comment.replies
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            .map(reply => `
                <div class="reply" data-id="${reply.id}">
                    <div class="reply-header">
                        <span class="user">${reply.user}</span>
                        <span class="timestamp">${this.formatDate(reply.timestamp)}</span>
                    </div>
                    <div class="reply-content">${reply.text}</div>
                    <div class="reply-actions">
                        <button class="like-btn" data-id="${reply.id}">
                            <span class="likes">${reply.likes}</span> ❤️
                        </button>
                    </div>
                </div>
            `).join('');
    }

    setupEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.matches('#submit-comment')) {
                const text = document.getElementById('comment-text').value;
                const section = document.getElementById('comment-section').value;
                if (text.trim()) {
                    this.addComment(text, section);
                    document.getElementById('comment-text').value = '';
                }
            }

            if (e.target.matches('.like-btn')) {
                const commentId = parseInt(e.target.dataset.id);
                this.likeComment(commentId);
            }

            if (e.target.matches('.delete-btn')) {
                const commentId = parseInt(e.target.dataset.id);
                if (confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
                    this.deleteComment(commentId);
                }
            }

            if (e.target.matches('.reply-btn')) {
                const commentId = parseInt(e.target.dataset.id);
                const replyText = prompt('Votre réponse :');
                if (replyText) {
                    this.addReply(commentId, replyText);
                }
            }
        });
    }

    formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Styles CSS
const styles = `
    .comments-section {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .comment-form {
        margin-bottom: 20px;
    }

    .comment-form textarea {
        width: 100%;
        min-height: 100px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        resize: vertical;
    }

    .comment-form select {
        padding: 8px;
        margin-right: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .comment-form button {
        padding: 8px 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .comment-form button:hover {
        background: #0056b3;
    }

    .comment {
        margin-bottom: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 4px;
    }

    .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 0.9em;
        color: #666;
    }

    .comment-content {
        margin-bottom: 10px;
        line-height: 1.5;
    }

    .comment-actions {
        display: flex;
        gap: 10px;
    }

    .comment-actions button {
        padding: 5px 10px;
        background: none;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
    }

    .comment-actions button:hover {
        background: #f0f0f0;
    }

    .replies {
        margin-left: 20px;
        margin-top: 10px;
    }

    .reply {
        padding: 10px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background: #28a745;
        color: white;
        border-radius: 4px;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Ajouter les styles au document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Exporter la classe
window.CommentSystem = CommentSystem; 