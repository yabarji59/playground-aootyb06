class NotificationManager {
    constructor() {
        this.container = this.createContainer();
        this.notifications = [];
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
        return container;
    }

    showNotification(message, type = 'badge') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = document.createElement('span');
        icon.className = 'notification-icon';
        icon.textContent = type === 'badge' ? '🏆' : '⭐';
        
        const content = document.createElement('div');
        content.className = 'notification-content';
        content.textContent = message;
        
        notification.appendChild(icon);
        notification.appendChild(content);
        
        this.container.appendChild(notification);
        this.notifications.push(notification);
        
        // Animation d'entrée
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Animation de sortie
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                this.container.removeChild(notification);
                this.notifications = this.notifications.filter(n => n !== notification);
            }, 500);
        }, 3000);
    }

    showBadgeNotification(badge) {
        this.showNotification(`Nouveau badge débloqué : ${badge.name} ${badge.icon}`, 'badge');
    }

    showLevelUpNotification(level) {
        this.showNotification(`Niveau supérieur ! Vous êtes maintenant ${level.name} ${level.badge}`, 'level');
    }
}

// Styles CSS pour les notifications
const styles = `
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.notification {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    transform: translateX(120%);
    transition: transform 0.3s ease-out;
    max-width: 300px;
}

.notification.show {
    transform: translateX(0);
}

.notification.hide {
    transform: translateX(120%);
}

.notification-icon {
    font-size: 24px;
    margin-right: 10px;
}

.notification-content {
    flex: 1;
    font-size: 14px;
    color: #333;
}

.notification.badge {
    border-left: 4px solid #4CAF50;
}

.notification.level {
    border-left: 4px solid #2196F3;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.notification.show .notification-icon {
    animation: bounce 1s ease infinite;
}
`;

// Ajout des styles au document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default NotificationManager; 