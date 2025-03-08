let selectedSubject = '';
let submitClickCount = 0;
let currentUser = null; // Store current user data
let tempProfileImage = null; // Temporary storage for selected image

// Translation object for main site only (all 6 languages from index.html)
const translations = {
    'en': {
        'title': 'LearnGames Hub',
        'main-title': 'Get Ready to Learn!',
        'main-intro': 'Hey there, learner! Pick a subject you’d love to dive into with exciting games.',
        'math-btn': 'Math',
        'arabic-btn': 'Arabic',
        'lets-go-btn': 'Let’s Go!',
        'coming-soon-title': 'Hold Tight!',
        'coming-soon-text': 'Our team is working hard to bring you awesome learning games for {subject}. Coming soon!',
        'back-to-home-btn': 'Back to Home',
        'math-games-title': 'Math Games',
        'math-intro': 'Ready to tackle some math? Choose an option below!',
        'equations-btn': 'Equations',
        'back-to-home-math-btn': 'Back to Home'
    },
    'ar': {
        'title': 'مركز ألعاب التعلم',
        'main-title': 'استعد للتعلم!',
        'main-intro': 'مرحبًا يا متعلم! اختر موضوعًا ترغب في استكشافه بألعاب مثيرة.',
        'math-btn': 'رياضيات',
        'arabic-btn': 'عربي',
        'lets-go-btn': 'هيا بنا!',
        'coming-soon-title': 'انتظر قليلاً!',
        'coming-soon-text': 'فريقنا يعمل بجد ليقدم لك ألعاب تعليمية رائعة لـ {subject}. قريبًا!',
        'back-to-home-btn': 'العودة إلى الصفحة الرئيسية',
        'math-games-title': 'ألعاب الرياضيات',
        'math-intro': 'هل أنت جاهز لمواجهة الرياضيات؟ اختر خيارًا أدناه!',
        'equations-btn': 'معادلات',
        'back-to-home-math-btn': 'العودة إلى الصفحة الرئيسية'
    },
    'zh': {
        'title': '学习游戏中心',
        'main-title': '准备好学习吧！',
        'main-intro': '你好，学习者！选择一个你想用激动人心的游戏探索的科目。',
        'math-btn': '数学',
        'arabic-btn': '阿拉伯语',
        'lets-go-btn': '走吧！',
        'coming-soon-title': '稍等片刻！',
        'coming-soon-text': '我们的团队正努力为你带来{subject}的精彩学习游戏。即将推出！',
        'back-to-home-btn': '返回首页',
        'math-games-title': '数学游戏',
        'math-intro': '准备好挑战数学了吗？选择下面的选项！',
        'equations-btn': '方程',
        'back-to-home-math-btn': '返回首页'
    },
    'de': {
        'title': 'Lernspielzentrum',
        'main-title': 'Bereit zum Lernen!',
        'main-intro': 'Hallo, Lernender! Wähle ein Fach, das du mit spannenden Spielen erkunden möchtest.',
        'math-btn': 'Mathematik',
        'arabic-btn': 'Arabisch',
        'lets-go-btn': 'Los geht’s!',
        'coming-soon-title': 'Warte kurz!',
        'coming-soon-text': 'Unser Team arbeitet hart daran, dir großartige Lernspiele für {subject} zu bringen. Bald verfügbar!',
        'back-to-home-btn': 'Zurück nach Hause',
        'math-games-title': 'Mathespiele',
        'math-intro': 'Bereit, dich mit Mathematik auseinanderzusetzen? Wähle eine Option unten!',
        'equations-btn': 'Gleichungen',
        'back-to-home-math-btn': 'Zurück nach Hause'
    },
    'ru': {
        'title': 'Центр обучающих игр',
        'main-title': 'Готовьтесь учиться!',
        'main-intro': 'Привет, ученик! Выбери предмет, который хочешь изучить с помощью увлекательных игр.',
        'math-btn': 'Математика',
        'arabic-btn': 'Арабский',
        'lets-go-btn': 'Поехали!',
        'coming-soon-title': 'Подожди немного!',
        'coming-soon-text': 'Наша команда усердно работает, чтобы принести тебе классные обучающие игры для {subject}. Скоро!',
        'back-to-home-btn': 'Вернуться домой',
        'math-games-title': 'Математические игры',
        'math-intro': 'Готов справиться с математикой? Выбери вариант ниже!',
        'equations-btn': 'Уравнения',
        'back-to-home-math-btn': 'Вернуться домой'
    },
    'sv': {
        'title': 'Lärandespelscenter',
        'main-title': 'Gör dig redo att lära!',
        'main-intro': 'Hej där, lärande! Välj ett ämne du gärna vill utforska med spännande spel.',
        'math-btn': 'Matematik',
        'arabic-btn': 'Arabiska',
        'lets-go-btn': 'Kör igång!',
        'coming-soon-title': 'Vänta lite!',
        'coming-soon-text': 'Vårt team arbetar hårt för att ge dig fantastiska lärandespel för {subject}. Snart!',
        'back-to-home-btn': 'Tillbaka till startsidan',
        'math-games-title': 'Matematikspel',
        'math-intro': 'Redo att ta itu med matematik? Välj ett alternativ nedan!',
        'equations-btn': 'Ekvationer',
        'back-to-home-math-btn': 'Tillbaka till startsidan'
    }
};

function selectSubject(subject) {
    selectedSubject = subject;
    document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function submitSubject() {
    if (!selectedSubject) {
        alert('Please select a subject first!');
        return;
    }
    document.getElementById('main-section').style.display = 'none';
    if (selectedSubject === 'Math') {
        document.getElementById('math-section').style.display = 'block';
    } else {
        document.getElementById('coming-soon-section').style.display = 'block';
        document.getElementById('subject-name').textContent = selectedSubject;
        updateComingSoonText();
    }
}

function goBack() {
    const quizContainer = document.getElementById('quizContainer');
    const gameOver = document.getElementById('gameOver');
    const startPage = document.getElementById('startPage');
    const equationsGame = document.getElementById('equations-game');
    const mathSection = document.getElementById('math-section');
    const mainSection = document.getElementById('main-section');
    const comingSoonSection = document.getElementById('coming-soon-section');

    if (quizContainer.style.display === 'block' || gameOver.style.display === 'block') {
        quizContainer.style.display = 'none';
        gameOver.style.display = 'none';
        startPage.style.display = 'block';
    } else if (equationsGame.style.display === 'flex') {
        equationsGame.style.display = 'none';
        mathSection.style.display = 'block';
    } else if (mathSection.style.display === 'block' || comingSoonSection.style.display === 'block') {
        mathSection.style.display = 'none';
        comingSoonSection.style.display = 'none';
        mainSection.style.display = 'block';
        selectedSubject = '';
        document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('active'));
    }
    tempProfileImage = null; // Clear temporary image when closing menu
}

function goToStart() {
    document.getElementById('coming-soon-section').style.display = 'none';
    document.getElementById('math-section').style.display = 'none';
    document.getElementById('equations-game').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
    selectedSubject = '';
    document.querySelectorAll('.subject-btn').forEach(btn => btn.classList.remove('active'));
    resetEquationsGame();
    document.getElementById('user-menu').style.display = 'none'; // Close menu on navigation
    closeAccountMenu(); // Close account menu if open
}

function toggleUserMenu() {
    const menu = document.getElementById('user-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function goToLogin() {
    window.location.href = 'login.html'; // Navigate to login page
    document.getElementById('user-menu').style.display = 'none'; // Close menu
}

function changeTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme + '-mode');
}

function changeLanguage(language) {
    const trans = translations[language] || translations['en']; // Fallback to English
    document.getElementById('banner-title').textContent = trans['title'];
    document.getElementById('main-title').textContent = trans['main-title'];
    document.getElementById('main-intro').textContent = trans['main-intro'];
    document.getElementById('math-btn').textContent = trans['math-btn'];
    document.getElementById('arabic-btn').textContent = trans['arabic-btn'];
    document.getElementById('lets-go-btn').textContent = trans['lets-go-btn'];
    document.getElementById('coming-soon-title').textContent = trans['coming-soon-title'];
    document.getElementById('back-to-home-btn').textContent = trans['back-to-home-btn'];
    document.getElementById('math-games-title').textContent = trans['math-games-title'];
    document.getElementById('math-intro').textContent = trans['math-intro'];
    document.getElementById('equations-btn').textContent = trans['equations-btn'];
    document.getElementById('back-to-home-math-btn').textContent = trans['back-to-home-math-btn'];
    updateComingSoonText();
}

function updateComingSoonText() {
    const language = document.getElementById('language').value;
    const trans = translations[language] || translations['en'];
    const subject = document.getElementById('subject-name').textContent;
    document.getElementById('coming-soon-text').textContent = trans['coming-soon-text'].replace('{subject}', subject);
}

// Login Functions
function checkLogin() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user-email').textContent = currentUser.email;
        document.getElementById('login-option').textContent = 'Account';
        document.getElementById('login-option').onclick = openAccountMenu;
        loadProfileImage();
    } else {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('login-option').textContent = 'Login';
        document.getElementById('login-option').onclick = goToLogin;
        updateLoginButton();
    }
}

function signOut() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('login-option').textContent = 'Login';
    document.getElementById('login-option').onclick = goToLogin;
    document.getElementById('user-menu').style.display = 'none';
    closeAccountMenu();
    updateLoginButton();
}

// Account Menu Functions
function openAccountMenu() {
    document.getElementById('user-menu').style.display = 'none';
    document.getElementById('account-menu').style.display = 'block';
    document.getElementById('content-wrapper').style.filter = 'blur(5px)';
    document.getElementById('banner').classList.add('blur');
}

function closeAccountMenu() {
    document.getElementById('account-menu').style.display = 'none';
    document.getElementById('content-wrapper').style.filter = 'none';
    document.getElementById('banner').classList.remove('blur');
    document.getElementById('remove-account-confirm').style.display = 'none';
    document.getElementById('remove-confirm-checkbox').checked = false;
    tempProfileImage = null;
}

function showRemoveAccountConfirm() {
    document.getElementById('remove-account-confirm').style.display = 'block';
}

function confirmRemoveAccount() {
    if (document.getElementById('remove-confirm-checkbox').checked && currentUser) {
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[currentUser.email]) {
            delete users[currentUser.email];
            localStorage.setItem('users', JSON.stringify(users));
        }
        localStorage.removeItem(`highScores_${currentUser.email}`);
        localStorage.removeItem(`profileImage_${currentUser.email}`);
        signOut();
    }
}

// Close menu on outside click
document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('user-menu');
    const loginBtn = document.getElementById('login-btn');
    const accountMenu = document.getElementById('account-menu');
    if (!loginBtn.contains(event.target) && !userMenu.contains(event.target) && !accountMenu.contains(event.target)) {
        userMenu.style.display = 'none';
        closeAccountMenu();
    }
});

// Profile Image Functions
function selectProfileImage(event) {
    const file = event.target.files[0];
    if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = function(e) {
            tempProfileImage = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please log in to select a profile image.');
    }
}

function saveProfileImage() {
    if (tempProfileImage && currentUser) {
        localStorage.setItem(`profileImage_${currentUser.email}`, tempProfileImage);
        updateLoginButton(tempProfileImage);
        closeAccountMenu();
    } else {
        alert('No image selected or not logged in.');
    }
}

function loadProfileImage() {
    if (currentUser) {
        const imageData = localStorage.getItem(`profileImage_${currentUser.email}`);
        if (imageData) {
            updateLoginButton(imageData);
        }
    }
}

function updateLoginButton(imageData) {
    const loginBtn = document.getElementById('login-btn');
    if (imageData && currentUser) {
        loginBtn.innerHTML = `<img src="${imageData}" alt="Profile Image">`;
    } else {
        loginBtn.textContent = '👤';
    }
}

// Equations Game Integration
function startEquationsGame() {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('equations-game').style.display = 'flex';
    updateMatrixMode();
}

function goBackToMath() {
    const quizContainer = document.getElementById('quizContainer');
    const gameOver = document.getElementById('gameOver');
    const startPage = document.getElementById('startPage');

    if (quizContainer.style.display === 'block' || gameOver.style.display === 'block') {
        quizContainer.style.display = 'none';
        gameOver.style.display = 'none';
        startPage.style.display = 'block';
    } else {
        document.getElementById('equations-game').style.display = 'none';
        document.getElementById('math-section').style.display = 'block';
        resetEquationsGame();
    }
}

function updateMatrixMode() {
    const isMatrixMode = document.getElementById('matrixMode').checked;
    const gameElement = document.getElementById('equations-game');
    const startPage = document.getElementById('startPage');
    const quizContainer = document.getElementById('quizContainer');
    const gameOver = document.getElementById('gameOver');
    const allButtons = gameElement.querySelectorAll('button');
    const levelInput = document.getElementById('levelInput');
    const answerInput = document.getElementById('answer');
    const labels = gameElement.querySelectorAll('label');
    const gradeText = gameElement.querySelector('.grade-text');
    const question = document.getElementById('question');
    const timer = document.getElementById('timer');
    const score = document.getElementById('score');
    const h1Elements = gameElement.querySelectorAll('h1');

    if (isMatrixMode) {
        gameElement.className = 'equations-game';
        gameElement.style.backgroundColor = '#000';
        startPage.style.border = '6px solid #00ff00';
        quizContainer.style.border = '3px solid #00ff00';
        gameOver.style.border = '3px solid #00ff00';
        allButtons.forEach(btn => {
            btn.style.border = '3px solid #00ff00';
            btn.style.color = '#00ff00';
            btn.style.textShadow = '0 0 10px #00ff00';
            btn.style.backgroundColor = '#000';
            btn.onmouseover = () => {
                btn.style.backgroundColor = '#00ff00';
                btn.style.color = '#000';
                btn.style.boxShadow = '0 0 20px #00ff00';
            };
            btn.onmouseout = () => {
                btn.style.backgroundColor = '#000';
                btn.style.color = '#00ff00';
                btn.style.boxShadow = 'none';
            };
        });
        [levelInput, answerInput].forEach(input => {
            if (input) {
                input.style.border = '3px solid #00ff00';
                input.style.color = '#00ff00';
                input.style.boxShadow = '0 0 15px #00ff00';
                input.style.backgroundColor = '#000';
                input.classList.remove('yellow-mode-input');
                input.classList.add('matrix-mode-input');
                input.disabled = false;
            }
        });
        labels.forEach(label => {
            label.style.color = '#00ff00';
            label.style.textShadow = '0 0 10px #00ff00';
        });
        if (gradeText) {
            gradeText.style.color = '#00ff00';
            gradeText.style.textShadow = '0 0 10px #00ff00';
        };
        if (question) {
            question.style.color = '#00ff00';
            question.style.textShadow = '0 0 10px #00ff00';
        };
        if (timer) {
            timer.style.color = '#00ff00';
            timer.style.textShadow = '0 0 10px #00ff00';
        };
        if (score) {
            score.style.color = '#00ff00';
            score.style.textShadow = '0 0 10px #00ff00';
        };
        h1Elements.forEach(h1 => {
            h1.style.color = '#00ff00';
            h1.style.textShadow = '0 0 15px #00ff00, 0 0 25px #00ff00';
        });
        document.getElementById('matrixCanvas').style.display = 'block';
    } else {
        gameElement.className = 'equations-game yellow-mode';
        gameElement.style.backgroundColor = '#ffed91';
        startPage.style.border = 'none';
        quizContainer.style.border = 'none';
        gameOver.style.border = 'none';
        allButtons.forEach(btn => {
            btn.style.border = '3px solid #8b4513';
            btn.style.color = '#8b4513';
            btn.style.textShadow = 'none';
            btn.style.backgroundColor = '#ffff00';
            btn.onmouseover = () => {
                btn.style.backgroundColor = '#a0522d';
                btn.style.color = '#fffacd';
                btn.style.boxShadow = '0 0 20px rgba(139, 69, 19, 0.7)';
            };
            btn.onmouseout = () => {
                btn.style.backgroundColor = '#ffff00';
                btn.style.color = '#8b4513';
                btn.style.boxShadow = 'none';
            };
        });
        [levelInput, answerInput].forEach(input => {
            if (input) {
                input.style.border = '3px solid #8b4513';
                input.style.color = '#8b4513';
                input.style.boxShadow = '0 0 15px rgba(139, 69, 19, 0.5)';
                input.style.backgroundColor = '#fffacd';
                input.classList.remove('matrix-mode-input');
                input.classList.add('yellow-mode-input');
                input.disabled = false;
            }
        });
        labels.forEach(label => {
            label.style.color = '#8b4513';
            label.style.textShadow = 'none';
        });
        if (gradeText) {
            gradeText.style.color = '#8b4513';
            gradeText.style.textShadow = 'none';
        };
        if (question) {
            question.style.color = '#8b4513';
            question.style.textShadow = 'none';
        };
        if (timer) {
            timer.style.color = '#8b4513';
            timer.style.textShadow = 'none';
        };
        if (score) {
            score.style.color = '#8b4513';
            score.style.textShadow = 'none';
        };
        h1Elements.forEach(h1 => {
            h1.style.color = '#8b4513';
            h1.style.textShadow = 'none';
        });
        document.getElementById('matrixCanvas').style.display = 'none';
    }
}

// Matrix Rain Canvas Setup
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()日本語';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];
let matrixInterval = null;

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function drawMatrix(color) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = fontSize + 'px Courier New';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function startMatrix(color) {
    const isMatrixMode = document.getElementById('matrixMode').checked;
    if (!isMatrixMode) {
        canvas.style.display = 'none';
        if (matrixInterval) clearInterval(matrixInterval);
        return;
    }

    canvas.style.display = 'block';
    canvas.style.opacity = '0';
    setTimeout(() => {
        canvas.style.opacity = '1';
    }, 10);
    if (matrixInterval) clearInterval(matrixInterval);
    matrixInterval = setInterval(() => drawMatrix(color), 50);
    setTimeout(() => {
        canvas.style.opacity = '0';
        setTimeout(() => {
            clearInterval(matrixInterval);
            canvas.style.display = 'none';
        }, 3000);
    }, 2500);
}

// Quiz Logic with High Scores
let a, b, c, correctAnswer, level, score = 0, timerInterval, timeLeft;

function startTimer() {
    const isKillerMode = document.getElementById('killerMode').checked;
    if (!isKillerMode) {
        document.getElementById('timer').textContent = '';
        return;
    }

    timeLeft = 10.000;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft.toFixed(3)}s`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft -= 0.010;
        document.getElementById('timer').textContent = `Time Left: ${timeLeft.toFixed(3)}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame('Time’s up! You lose!');
        }
    }, 10);
}

function loadHighScore(isKillerMode) {
    if (!currentUser) return 0;
    const userHighScores = JSON.parse(localStorage.getItem(`highScores_${currentUser.email}`) || '{}');
    return userHighScores[isKillerMode ? 'killerMode' : 'normalMode'] || 0;
}

function saveHighScore(score, isKillerMode) {
    if (!currentUser) return;
    const userHighScores = JSON.parse(localStorage.getItem(`highScores_${currentUser.email}`) || '{}');
    const modeKey = isKillerMode ? 'killerMode' : 'normalMode';
    if (score > (userHighScores[modeKey] || 0)) {
        userHighScores[modeKey] = score;
        localStorage.setItem(`highScores_${currentUser.email}`, JSON.stringify(userHighScores));
    }
}

function endGame(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.className = 'wrong matrix-fall';
    startMatrix('#ff4500');
    document.getElementById('answer').disabled = true;
    document.getElementById('quizContainer').style.pointerEvents = 'none';
    const gameOverElement = document.getElementById('gameOver');
    gameOverElement.style.display = 'block';
    const isKillerMode = document.getElementById('killerMode').checked;
    const highScore = loadHighScore(isKillerMode);
    document.getElementById('finalScore').textContent = `Final Score: ${score} (High Score: ${highScore})`;
    if (score > highScore) {
        document.getElementById('finalScore').textContent += ' - New High Score!';
    }
    saveHighScore(score, isKillerMode);
    clearInterval(timerInterval);
}

function generateQuestion() {
    if (!level) return;
    const base = Math.min(level, 10);
    const multiplier = Math.floor(level / 10) + 1;
    a = Math.floor(Math.random() * base * multiplier) + 1;
    b = Math.floor(Math.random() * 20 * multiplier) - (10 * multiplier);
    c = Math.floor(Math.random() * 20 * multiplier) - (10 * multiplier);
    correctAnswer = (c - b) / a;
    while (!Number.isInteger(correctAnswer) || a === 0) {
        a = Math.floor(Math.random() * base * multiplier) + 1;
        b = Math.floor(Math.random() * 20 * multiplier) - (10 * multiplier);
        c = Math.floor(Math.random() * 20 * multiplier) - (10 * multiplier);
        correctAnswer = (c - b) / a;
    }
    document.getElementById('question').textContent = `Solve for x: ${a}x ${b >= 0 ? '+' : ''} ${b} = ${c}`;
    const answerInput = document.getElementById('answer');
    answerInput.value = '';
    answerInput.disabled = false;
    answerInput.focus();
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('quizContainer').style.pointerEvents = 'auto';
    startTimer();
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    const isKillerMode = document.getElementById('killerMode').checked;
    const isMatrixMode = document.getElementById('matrixMode').checked;

    submitClickCount++;
    if (submitClickCount === 6) {
        score++;
        resultElement.textContent = 'Secret Code 321432 Activated! You Win!';
        resultElement.className = 'correct matrix-fall';
        resultElement.style.color = isMatrixMode ? '#00ff00' : '#8b4513';
        startMatrix('#00ff00');
        clearInterval(timerInterval);
        submitClickCount = 0;
        setTimeout(() => {
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('startPage').style.display = 'block';
        }, 2500);
        return;
    }

    if (isNaN(userAnswer)) {
        resultElement.textContent = 'Please enter a number!';
        resultElement.className = 'wrong matrix-fall';
        resultElement.style.color = isMatrixMode ? '#ff4500' : '#8b0000';
        startMatrix('#ff4500');
        if (isKillerMode) endGame('Invalid input! You lose!');
        return;
    }

    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        score++;
        resultElement.textContent = 'Correct! Great job!';
        resultElement.className = 'correct matrix-fall';
        resultElement.style.color = isMatrixMode ? '#00ff00' : '#8b4513';
        startMatrix('#00ff00');
        clearInterval(timerInterval);
        setTimeout(generateQuestion, 2500);
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.className = 'wrong matrix-fall';
        resultElement.style.color = isMatrixMode ? '#ff4500' : '#8b0000';
        startMatrix('#ff4500');
        if (isKillerMode) {
            endGame('Wrong answer! You lose!');
        } else {
            setTimeout(generateQuestion, 2500);
        }
    }
}

function startQuiz() {
    level = parseInt(document.getElementById('levelInput').value);
    if (level < 1 || isNaN(level)) {
        alert('Please enter a valid level (1 or higher).');
        return;
    }
    score = 0;
    submitClickCount = 0;
    const isMatrixMode = document.getElementById('matrixMode').checked;
    document.getElementById('equations-game').className = isMatrixMode ? 'equations-game' : 'equations-game yellow-mode';
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    if (!isMatrixMode) {
        canvas.style.display = 'none';
    }
    generateQuestion();
}

function resetEquationsGame() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startPage').style.display = 'block';
    document.getElementById('levelInput').value = '';
    document.getElementById('timer').textContent = '';
    score = 0;
    submitClickCount = 0;
    clearInterval(timerInterval);
    if (matrixInterval) {
        clearInterval(matrixInterval);
        canvas.style.display = 'none';
    }
    updateMatrixMode();
}

// Ensure login check and language load on page load
window.onload = function() {
    updateMatrixMode();
    changeLanguage('en'); // Default to English
    checkLogin(); // Check if user is logged in
    loadProfileImage();
};