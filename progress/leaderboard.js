class Leaderboard {
    constructor() {
        this.users = [];
        this.loadLeaderboard();
    }

    async loadLeaderboard() {
        try {
            const storedData = localStorage.getItem('leaderboard');
            if (storedData) {
                this.users = JSON.parse(storedData);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du tableau de classement:', error);
        }
    }

    saveLeaderboard() {
        try {
            localStorage.setItem('leaderboard', JSON.stringify(this.users));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du tableau de classement:', error);
        }
    }

    updateUserScore(userId, points) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        
        if (userIndex === -1) {
            this.users.push({
                id: userId,
                points: points,
                badges: [],
                level: 1,
                lastUpdated: new Date().toISOString()
            });
        } else {
            this.users[userIndex].points += points;
            this.users[userIndex].lastUpdated = new Date().toISOString();
        }

        this.sortLeaderboard();
        this.saveLeaderboard();
        this.updateDisplay();
    }

    sortLeaderboard() {
        this.users.sort((a, b) => b.points - a.points);
    }

    getTopUsers(limit = 10) {
        return this.users.slice(0, limit);
    }

    getUserRank(userId) {
        return this.users.findIndex(user => user.id === userId) + 1;
    }

    updateDisplay() {
        const leaderboardElement = document.getElementById('leaderboard');
        if (!leaderboardElement) return;

        const topUsers = this.getTopUsers();
        
        leaderboardElement.innerHTML = `
            <h2>Tableau de Classement</h2>
            <div class="leaderboard-list">
                ${topUsers.map((user, index) => `
                    <div class="leaderboard-item ${index < 3 ? 'top-' + (index + 1) : ''}">
                        <div class="rank">${index + 1}</div>
                        <div class="user-info">
                            <div class="username">${user.id}</div>
                            <div class="stats">
                                <span class="points">${user.points} points</span>
                                <span class="level">Niveau ${user.level}</span>
                            </div>
                        </div>
                        <div class="badges">
                            ${user.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Styles CSS pour le tableau de classement
const styles = `
.leaderboard-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.leaderboard-item {
    display: flex;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.leaderboard-item:hover {
    transform: translateY(-2px);
}

.leaderboard-item.top-1 {
    background: linear-gradient(45deg, #FFD700, #FFA500);
    color: white;
}

.leaderboard-item.top-2 {
    background: linear-gradient(45deg, #C0C0C0, #A9A9A9);
    color: white;
}

.leaderboard-item.top-3 {
    background: linear-gradient(45deg, #CD7F32, #8B4513);
    color: white;
}

.rank {
    font-size: 24px;
    font-weight: bold;
    width: 40px;
    text-align: center;
}

.user-info {
    flex: 1;
    margin: 0 15px;
}

.username {
    font-weight: bold;
    font-size: 16px;
}

.stats {
    font-size: 14px;
    color: #666;
}

.stats span {
    margin-right: 10px;
}

.badges {
    display: flex;
    gap: 5px;
}

.badge {
    font-size: 20px;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.leaderboard-item {
    animation: slideIn 0.3s ease-out forwards;
}
`;

// Ajout des styles au document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Leaderboard; 