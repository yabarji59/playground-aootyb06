class ProgressManager {
    constructor() {
        this.badges = [];
        this.levels = [];
        this.points = {};
        this.currentUser = {
            points: 0,
            level: 1,
            badges: [],
            completedExercises: [],
            quizScores: {},
            exerciseTimes: {},
            hintsUsed: {},
            retryCounts: {}
        };
        this.loadProgressData();
    }

    async loadProgressData() {
        try {
            const response = await fetch('/progress/badges.json');
            const data = await response.json();
            this.badges = data.badges;
            this.levels = data.levels;
            this.points = data.points;
        } catch (error) {
            console.error('Erreur lors du chargement des données de progression:', error);
        }
    }

    completeExercise(exerciseId, time) {
        if (!this.currentUser.completedExercises.includes(exerciseId)) {
            this.currentUser.completedExercises.push(exerciseId);
            this.currentUser.exerciseTimes[exerciseId] = time;
            this.addPoints(this.points.complete_exercise);
            this.checkBadges();
            this.checkLevel();
        }
    }

    completeQuiz(quizId, score) {
        this.currentUser.quizScores[quizId] = score;
        if (score === 100) {
            this.addPoints(this.points.quiz_perfect_score);
        } else if (score >= 80) {
            this.addPoints(this.points.quiz_good_score);
        }
        this.checkBadges();
        this.checkLevel();
    }

    useHint(exerciseId) {
        this.currentUser.hintsUsed[exerciseId] = (this.currentUser.hintsUsed[exerciseId] || 0) + 1;
        this.addPoints(this.points.use_hint);
        this.checkBadges();
    }

    retryExercise(exerciseId) {
        this.currentUser.retryCounts[exerciseId] = (this.currentUser.retryCounts[exerciseId] || 0) + 1;
        this.addPoints(this.points.retry_exercise);
        this.checkBadges();
    }

    addPoints(points) {
        this.currentUser.points += points;
        this.checkLevel();
    }

    checkLevel() {
        const newLevel = this.levels.find(level => 
            this.currentUser.points >= level.required_points
        );
        if (newLevel && newLevel.level > this.currentUser.level) {
            this.currentUser.level = newLevel.level;
            this.showLevelUpNotification(newLevel);
        }
    }

    checkBadges() {
        this.badges.forEach(badge => {
            if (!this.currentUser.badges.includes(badge.id) && this.hasEarnedBadge(badge)) {
                this.currentUser.badges.push(badge.id);
                this.showBadgeNotification(badge);
            }
        });
    }

    hasEarnedBadge(badge) {
        switch (badge.condition) {
            case 'complete_exercise':
                return this.currentUser.completedExercises.includes(badge.exercise);
            case 'quiz_score':
                return this.currentUser.quizScores[badge.quiz] === badge.score;
            case 'complete_all_exercises':
                return this.hasCompletedAllExercisesInCategory(badge.category);
            case 'complete_exercises_count':
                return this.currentUser.completedExercises.length >= badge.count;
            case 'all_quiz_perfect':
                return this.hasAllPerfectQuizScores();
            case 'exercise_time':
                return this.hasCompletedExerciseInTime(badge.time);
            case 'hints_usage':
                return this.hasUsedFewHints(badge.max_hints);
            case 'retry_count':
                return this.hasRetriedEnough(badge.min_retries);
            default:
                return false;
        }
    }

    hasCompletedAllExercisesInCategory(category) {
        // Implémentation à compléter selon la structure des exercices
        return false;
    }

    hasAllPerfectQuizScores() {
        return Object.values(this.currentUser.quizScores).every(score => score === 100);
    }

    hasCompletedExerciseInTime(maxTime) {
        return Object.values(this.currentUser.exerciseTimes).some(time => time <= maxTime);
    }

    hasUsedFewHints(maxHints) {
        return Object.values(this.currentUser.hintsUsed).every(hints => hints <= maxHints);
    }

    hasRetriedEnough(minRetries) {
        return Object.values(this.currentUser.retryCounts).some(retries => retries >= minRetries);
    }

    showLevelUpNotification(level) {
        // Implémentation de la notification de niveau supérieur
        console.log(`Niveau supérieur ! Vous êtes maintenant ${level.name} ${level.badge}`);
    }

    showBadgeNotification(badge) {
        // Implémentation de la notification de badge
        console.log(`Nouveau badge débloqué : ${badge.name} ${badge.icon}`);
    }

    getProgress() {
        return {
            points: this.currentUser.points,
            level: this.currentUser.level,
            badges: this.currentUser.badges,
            completedExercises: this.currentUser.completedExercises.length,
            quizScores: this.currentUser.quizScores
        };
    }
}

// Export pour utilisation dans d'autres fichiers
export default ProgressManager; 