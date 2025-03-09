let selectedSubject = '';
let submitClickCount = 0;
let currentUser = null; // Store current user data
let tempProfileImage = null; // Temporary storage for selected image

// Translation object for main site and in-game text
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
        'back-to-home-math-btn': 'Back to Home',
        'equation-title': 'Equation Math Quiz',
        'grade-text': 'Enter your level:',
        'matrix-mode': 'Matrix Mode',
        'killer-mode': 'Killer Mode',
        'start-quiz': 'Start Quiz',
        'game-back-btn': 'Back',
        'question-prefix': 'Solve for x:',
        'submit': 'Submit',
        'score': 'Score',
        'result-correct': 'Correct! Great job!',
        'result-incorrect': 'Incorrect!',
        'result-invalid': 'Please enter a number!',
        'result-secret': 'Secret Code 321432 Activated! You Win!',
        'game-over-text': 'Better luck next time!',
        'final-score': 'Final Score: {score} (High Score: {highScore})',
        'new-high-score': ' - New High Score!'
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
        'back-to-home-math-btn': 'العودة إلى الصفحة الرئيسية',
        'equation-title': 'اختبار المعادلات الرياضية',
        'grade-text': 'أدخل مستواك:',
        'matrix-mode': 'وضع المصفوفة',
        'killer-mode': 'وضع القتلة',
        'start-quiz': 'بدء الاختبار',
        'game-back-btn': 'رجوع',
        'question-prefix': 'حل لـ x:',
        'submit': 'إرسال',
        'score': 'الدرجة',
        'result-correct': 'صحيح! عمل رائع!',
        'result-incorrect': 'خطأ!',
        'result-invalid': 'من فضلك أدخل رقمًا!',
        'result-secret': 'تم تفعيل الكود السري 321432! لقد فزت!',
        'game-over-text': 'حظًا أفضل في المرة القادمة!',
        'final-score': 'الدرجة النهائية: {score} (أعلى درجة: {highScore})',
        'new-high-score': ' - درجة قياسية جديدة!'
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
        'back-to-home-math-btn': '返回首页',
        'equation-title': '方程数学测验',
        'grade-text': '输入你的等级：',
        'matrix-mode': '矩阵模式',
        'killer-mode': '杀手模式',
        'start-quiz': '开始测验',
        'game-back-btn': '返回',
        'question-prefix': '求解 x：',
        'submit': '提交',
        'score': '分数',
        'result-correct': '正确！干得漂亮！',
        'result-incorrect': '错误！',
        'result-invalid': '请输入一个数字！',
        'result-secret': '秘密代码 321432 激活！你赢了！',
        'game-over-text': '下次再接再厉！',
        'final-score': '最终得分：{score}（最高得分：{highScore}）',
        'new-high-score': ' - 新最高分！'
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
        'back-to-home-math-btn': 'Zurück nach Hause',
        'equation-title': 'Gleichungs-Mathematikquiz',
        'grade-text': 'Gib dein Level ein:',
        'matrix-mode': 'Matrix-Modus',
        'killer-mode': 'Killer-Modus',
        'start-quiz': 'Quiz starten',
        'game-back-btn': 'Zurück',
        'question-prefix': 'Löse für x:',
        'submit': 'Einreichen',
        'score': 'Punktzahl',
        'result-correct': 'Richtig! Gute Arbeit!',
        'result-incorrect': 'Falsch!',
        'result-invalid': 'Bitte gib eine Zahl ein!',
        'result-secret': 'Geheimer Code 321432 aktiviert! Du hast gewonnen!',
        'game-over-text': 'Besseres Glück beim nächsten Mal!',
        'final-score': 'Endpunktzahl: {score} (Höchstpunktzahl: {highScore})',
        'new-high-score': ' - Neue Höchstpunktzahl!'
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
        'back-to-home-math-btn': 'Вернуться домой',
        'equation-title': 'Математический тест на уравнения',
        'grade-text': 'Введите ваш уровень:',
        'matrix-mode': 'Режим матрицы',
        'killer-mode': 'Режим убийцы',
        'start-quiz': 'Начать тест',
        'game-back-btn': 'Назад',
        'question-prefix': 'Решите для x:',
        'submit': 'Отправить',
        'score': 'Счет',
        'result-correct': 'Правильно! Отличная работа!',
        'result-incorrect': 'Неправильно!',
        'result-invalid': 'Пожалуйста, введите число!',
        'result-secret': 'Секретный код 321432 активирован! Вы победили!',
        'game-over-text': 'Удачи в следующий раз!',
        'final-score': 'Итоговый счет: {score} (Рекорд: {highScore})',
        'new-high-score': ' - Новый рекорд!'
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
        'back-to-home-math-btn': 'Tillbaka till startsidan',
        'equation-title': 'Matematikquiz med ekvationer',
        'grade-text': 'Ange din nivå:',
        'matrix-mode': 'Matrisläge',
        'killer-mode': 'Dödarläge',
        'start-quiz': 'Starta quiz',
        'game-back-btn': 'Tillbaka',
        'question-prefix': 'Lös för x:',
        'submit': 'Skicka',
        'score': 'Poäng',
        'result-correct': 'Rätt! Bra jobbat!',
        'result-incorrect': 'Fel!',
        'result-invalid': 'Vänligen ange ett nummer!',
        'result-secret': 'Hemlig kod 321432 aktiverad! Du vann!',
        'game-over-text': 'Bättre lycka nästa gång!',
        'final-score': 'Slutpoäng: {score} (Högsta poäng: {highScore})',
        'new-high-score': ' - Nytt högsta poäng!'
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
    // Sync game language with main language
    document.getElementById('game-language').value = language;
    changeGameLanguage(language);
    updateLevelInfo(language); // Update level info with the selected language
}

function changeGameLanguage(language) {
    const trans = translations[language] || translations['en'];
    const equationTitle = document.getElementById('equation-title');
    const gradeText = document.querySelector('.grade-text');
    const matrixLabel = document.querySelector('label[for="matrixMode"]');
    const killerLabel = document.querySelector('label[for="killerMode"]');
    const startQuizBtn = document.querySelector('#startPage button[onclick="startQuiz()"]');
    const backBtnStart = document.querySelector('#startPage .game-back-btn');
    const submitBtn = document.querySelector('#quizContainer button[onclick="checkAnswer()"]');
    const backBtnQuiz = document.querySelector('#quizContainer .game-back-btn');
    const backBtnGameOver = document.querySelector('#gameOver .game-back-btn');

    equationTitle.textContent = trans['equation-title'];
    gradeText.textContent = trans['grade-text'];
    matrixLabel.textContent = trans['matrix-mode'];
    killerLabel.textContent = trans['killer-mode'];
    startQuizBtn.textContent = trans['start-quiz'];
    backBtnStart.textContent = trans['game-back-btn'];
    submitBtn.textContent = trans['submit'];
    backBtnQuiz.textContent = trans['game-back-btn'];
    backBtnGameOver.textContent = trans['game-back-btn'];
    document.getElementById('levelInput').placeholder = trans['grade-text']; // Update placeholder
    document.getElementById('answer').placeholder = trans['question-prefix']; // Update placeholder
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
    // Sync game language with main language on game start
    const mainLanguage = document.getElementById('language').value;
    document.getElementById('game-language').value = mainLanguage;
    changeGameLanguage(mainLanguage);
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
let a, b, c, d, correctAnswer, level, score = 0, timerInterval, timeLeft;

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
    const isMatrixMode = document.getElementById('matrixMode').checked;
    const highScore = loadHighScore(isKillerMode);
    const trans = translations[document.getElementById('game-language').value] || translations['en'];
    let finalScoreText = trans['final-score'].replace('{score}', score).replace('{highScore}', highScore);
    if (score > highScore) {
        finalScoreText += trans['new-high-score'];
    }
    document.getElementById('finalScore').textContent = finalScoreText;
    document.querySelector('#gameOver p:nth-child(2)').textContent = trans['game-over-text'];
    // Set text color to green in Matrix Mode and Killer Mode
    if (isMatrixMode && isKillerMode) {
        document.querySelectorAll('#gameOver p').forEach(p => {
            p.style.color = '#00ff00';
            p.style.textShadow = '0 0 10px #00ff00';
        });
    }
    saveHighScore(score, isKillerMode);
    clearInterval(timerInterval);
}

function generateQuestion() {
    if (!level) return;
    const trans = translations[document.getElementById('game-language').value] || translations['en'];
    let questionText = '';

    if (level <= 9) {
        // Linear equations (levels 1-9)
        const base = Math.min(level, 9);
        const multiplier = Math.floor(level / 3) + 1;
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
        questionText = `${trans['question-prefix']} ${a}x ${b >= 0 ? '+' : ''} ${b} = ${c}`;
    } else if (level === 10) {
        // Start quadratic equations (level 10)
        a = Math.floor(Math.random() * 3) + 1; // Coefficient of x²
        b = Math.floor(Math.random() * 10) - 5; // Coefficient of x
        c = Math.floor(Math.random() * 10) - 5; // Constant term
        const discriminant = b * b - 4 * a * c;
        if (discriminant >= 0) {
            correctAnswer = (-b + Math.sqrt(discriminant)) / (2 * a); // Positive root
        } else {
            correctAnswer = -b / (2 * a); // Approximate real part for simplicity
        }
        questionText = `${trans['question-prefix']} ${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c} = 0`;
    } else if (level === 11) {
        // Add a random constant to quadratic (level 11)
        a = Math.floor(Math.random() * 3) + 1;
        b = Math.floor(Math.random() * 10) - 5;
        c = Math.floor(Math.random() * 10) - 5;
        d = Math.floor(Math.random() * 5) - 2; // New constant
        const discriminant = b * b - 4 * a * (c + d);
        if (discriminant >= 0) {
            correctAnswer = (-b + Math.sqrt(discriminant)) / (2 * a);
        } else {
            correctAnswer = -b / (2 * a);
        }
        questionText = `${trans['question-prefix']} ${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}x ${d >= 0 ? '+' : ''} ${d} = 0`;
    } else if (level === 12) {
        // Introduce cubic term (level 12)
        a = Math.floor(Math.random() * 2) + 1;
        b = Math.floor(Math.random() * 5) - 2;
        c = Math.floor(Math.random() * 5) - 2;
        d = Math.floor(Math.random() * 3) - 1; // Cubic coefficient
        correctAnswer = Math.round((-b + Math.cbrt(b * b - 4 * a * c)) / (2 * a)); // Simplified cubic root approximation
        questionText = `${trans['question-prefix']} ${d}x³ ${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c} = 0`;
    } else if (level === 13) {
        // Add another constant to cubic (level 13)
        a = Math.floor(Math.random() * 2) + 1;
        b = Math.floor(Math.random() * 5) - 2;
        c = Math.floor(Math.random() * 5) - 2;
        d = Math.floor(Math.random() * 3) - 1;
        const e = Math.floor(Math.random() * 4) - 2; // New constant
        correctAnswer = Math.round((-b + Math.cbrt(b * b - 4 * a * (c + e))) / (2 * a));
        questionText = `${trans['question-prefix']} ${d}x³ ${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}x ${e >= 0 ? '+' : ''} ${e} = 0`;
    } else if (level >= 14 && level <= 20) {
        // Increase complexity with random coefficients and terms (levels 14-20)
        a = Math.floor(Math.random() * 4) + 1;
        b = Math.floor(Math.random() * 10) - 5;
        c = Math.floor(Math.random() * 10) - 5;
        d = Math.floor(Math.random() * 3) - 1;
        const e = Math.floor(Math.random() * 4) - 2;
        const f = Math.floor(Math.random() * 3) - 1; // Additional term for higher levels
        correctAnswer = Math.round((-b + Math.sqrt(b * b - 4 * a * (c + e + f))) / (2 * a)); // Approximate solution
        questionText = `${trans['question-prefix']} ${d}x³ ${a}x² ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}x ${e >= 0 ? '+' : ''} ${e}x ${f >= 0 ? '+' : ''} ${f} = 0`;
    }

    document.getElementById('question').textContent = questionText;
    const answerInput = document.getElementById('answer');
    answerInput.value = '';
    answerInput.disabled = false;
    answerInput.focus();
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
    document.getElementById('score').textContent = `${trans['score']}: ${score}`;
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('quizContainer').style.pointerEvents = 'auto';
    startTimer();
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');
    const isKillerMode = document.getElementById('killerMode').checked;
    const isMatrixMode = document.getElementById('matrixMode').checked;
    const trans = translations[document.getElementById('game-language').value] || translations['en'];

    submitClickCount++;
    if (submitClickCount === 6) {
        score++;
        resultElement.textContent = trans['result-secret'];
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
        resultElement.textContent = trans['result-invalid'];
        resultElement.className = 'wrong matrix-fall';
        resultElement.style.color = isMatrixMode ? '#ff4500' : '#8b0000';
        startMatrix('#ff4500');
        if (isKillerMode) endGame(trans['result-invalid'] + ' ' + trans['game-over-text']);
        return;
    }

    if (Math.abs(userAnswer - correctAnswer) < 0.01 || (level >= 10 && Math.abs(userAnswer + (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)) < 0.01)) {
        score++;
        resultElement.textContent = trans['result-correct'];
        resultElement.className = 'correct matrix-fall';
        resultElement.style.color = isMatrixMode ? '#00ff00' : '#8b4513';
        startMatrix('#00ff00');
        clearInterval(timerInterval);
        setTimeout(generateQuestion, 2500);
    } else {
        resultElement.textContent = trans['result-incorrect'];
        resultElement.className = 'wrong matrix-fall';
        resultElement.style.color = isMatrixMode ? '#ff4500' : '#8b0000';
        startMatrix('#ff4500');
        if (isKillerMode) {
            endGame(trans['result-incorrect'] + ' ' + trans['game-over-text']);
        } else {
            setTimeout(generateQuestion, 2500);
        }
    }
}

function startQuiz() {
    level = parseInt(document.getElementById('levelInput').value);
    if (level < 1 || level > 20 || isNaN(level)) {
        alert('Please enter a valid level between 1 and 20.');
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

// Level Information
const levelDescriptions = {
    'en': {
        1: 'Basic linear equations: ax + b = c',
        2: 'Linear equations with larger coefficients',
        3: 'Linear equations with negative constants',
        4: 'Linear equations with mixed signs',
        5: 'Linear equations with increased difficulty',
        6: 'Linear equations with random coefficients',
        7: 'Linear equations with larger ranges',
        8: 'Linear equations with complex constants',
        9: 'Linear equations with maximum complexity before quadratics',
        10: 'Introduction to quadratic equations: ax² + bx + c = 0',
        11: 'Quadratic equations with an additional constant term',
        12: 'Introduction to cubic equations: ax³ + bx² + cx + d = 0',
        13: 'Cubic equations with an extra constant',
        14: 'Higher-order equations with random coefficients',
        15: 'Increased complexity with additional terms',
        16: 'Equations with larger coefficient ranges',
        17: 'Mixed polynomial equations with varying degrees',
        18: 'Complex equations with multiple terms',
        19: 'Highly challenging polynomial equations',
        20: 'Maximum difficulty with all previous elements'
    },
    'ar': {
        1: 'معادلات خطية أساسية: ax + b = c',
        2: 'معادلات خطية بمعاملات أكبر',
        3: 'معادلات خطية بثوابت سالبة',
        4: 'معادلات خطية بتوقيعات مختلطة',
        5: 'معادلات خطية بصعوبة متزايدة',
        6: 'معادلات خطية بمعاملات عشوائية',
        7: 'معادلات خطية بنطاقات أكبر',
        8: 'معادلات خطية بثوابت معقدة',
        9: 'معادلات خطية بأقصى تعقيد قبل المعادلات التربيعية',
        10: 'مقدمة في المعادلات التربيعية: ax² + bx + c = 0',
        11: 'معادلات تربيعية بثابت إضافي',
        12: 'مقدمة في المعادلات التكعيبية: ax³ + bx² + cx + d = 0',
        13: 'معادلات تكعيبية بثابت إضافي',
        14: 'معادلات ترتيب أعلى بمعاملات عشوائية',
        15: 'تعقيد متزايد بمصطلحات إضافية',
        16: 'معادلات بنطاقات معاملات أكبر',
        17: 'معادلات متعددة الحدود بدرجات مختلفة',
        18: 'معادلات معقدة بمصطلحات متعددة',
        19: 'معادلات متعددة الحدود ذات تحدي عالي',
        20: 'أقصى صعوبة مع جميع العناصر السابقة'
    },
    'zh': {
        1: '基本线性方程：ax + b = c',
        2: '线性方程具有较大系数',
        3: '线性方程带有负常数',
        4: '线性方程带有混合符号',
        5: '线性方程难度增加',
        6: '线性方程具有随机系数',
        7: '线性方程具有较大范围',
        8: '线性方程带有复杂常数',
        9: '线性方程在二次方程前的最大复杂性',
        10: '引入二次方程：ax² + bx + c = 0',
        11: '二次方程带有额外常数项',
        12: '引入三次方程：ax³ + bx² + cx + d = 0',
        13: '三次方程带有额外常数',
        14: '高阶方程具有随机系数',
        15: '增加复杂性与额外项',
        16: '方程具有更大系数范围',
        17: '混合多项式方程具有不同次数',
        18: '复杂方程具有多个项',
        19: '高挑战性多项式方程',
        20: '包含所有先前元素的最高难度'
    },
    'de': {
        1: 'Grundlegende lineare Gleichungen: ax + b = c',
        2: 'Lineare Gleichungen mit größeren Koeffizienten',
        3: 'Lineare Gleichungen mit negativen Konstanten',
        4: 'Lineare Gleichungen mit gemischten Vorzeichen',
        5: 'Lineare Gleichungen mit erhöhter Schwierigkeit',
        6: 'Lineare Gleichungen mit zufälligen Koeffizienten',
        7: 'Lineare Gleichungen mit größeren Bereichen',
        8: 'Lineare Gleichungen mit komplexen Konstanten',
        9: 'Lineare Gleichungen mit maximaler Komplexität vor Quadratischen',
        10: 'Einführung in quadratische Gleichungen: ax² + bx + c = 0',
        11: 'Quadratische Gleichungen mit einem zusätzlichen konstanten Term',
        12: 'Einführung in kubische Gleichungen: ax³ + bx² + cx + d = 0',
        13: 'Kubische Gleichungen mit einem zusätzlichen konstanten Term',
        14: 'Höherwertige Gleichungen mit zufälligen Koeffizienten',
        15: 'Erhöhte Komplexität mit zusätzlichen Termen',
        16: 'Gleichungen mit größeren Koeffizientenbereichen',
        17: 'Gemischte Polynomgleichungen mit unterschiedlichen Graden',
        18: 'Komplexe Gleichungen mit mehreren Termen',
        19: 'Hochkomplexe Polynomgleichungen',
        20: 'Maximale Schwierigkeit mit allen vorherigen Elementen'
    },
    'ru': {
        1: 'Основные линейные уравнения: ax + b = c',
        2: 'Линейные уравнения с большими коэффициентами',
        3: 'Линейные уравнения с отрицательными константами',
        4: 'Линейные уравнения с смешанными знаками',
        5: 'Линейные уравнения с повышенной сложностью',
        6: 'Линейные уравнения с случайными коэффициентами',
        7: 'Линейные уравнения с большими диапазонами',
        8: 'Линейные уравнения с сложными константами',
        9: 'Линейные уравнения с максимальной сложностью перед квадратичными',
        10: 'Введение в квадратные уравнения: ax² + bx + c = 0',
        11: 'Квадратные уравнения с дополнительным постоянным членом',
        12: 'Введение в кубические уравнения: ax³ + bx² + cx + d = 0',
        13: 'Кубические уравнения с дополнительным постоянным членом',
        14: 'Уравнения более высокого порядка с случайными коэффициентами',
        15: 'Увеличенная сложность с дополнительными членами',
        16: 'Уравнения с большими диапазонами коэффициентов',
        17: 'Смешанные полиномиальные уравнения с разными степенями',
        18: 'Сложные уравнения с несколькими членами',
        19: 'Высоко сложные полиномиальные уравнения',
        20: 'Максимальная сложность со всеми предыдущими элементами'
    },
    'sv': {
        1: 'Grundläggande linjära ekvationer: ax + b = c',
        2: 'Linjära ekvationer med större koefficienter',
        3: 'Linjära ekvationer med negativa konstanter',
        4: 'Linjära ekvationer med blandade tecken',
        5: 'Linjära ekvationer med ökad svårighetsgrad',
        6: 'Linjära ekvationer med slumpmässiga koefficienter',
        7: 'Linjära ekvationer med större intervall',
        8: 'Linjära ekvationer med komplexa konstanter',
        9: 'Linjära ekvationer med maximal komplexitet före kvadratiska',
        10: 'Introduktion till kvadratiska ekvationer: ax² + bx + c = 0',
        11: 'Kvadratiska ekvationer med en extra konstantterm',
        12: 'Introduktion till kubiska ekvationer: ax³ + bx² + cx + d = 0',
        13: 'Kubiska ekvationer med en extra konstant',
        14: 'Högre ordningens ekvationer med slumpmässiga koefficienter',
        15: 'Ökad komplexitet med ytterligare termer',
        16: 'Ekvationer med större koefficientintervall',
        17: 'Blandade polynomekvationer med olika grader',
        18: 'Komplexa ekvationer med flera termer',
        19: 'Högst utmanande polynomekvationer',
        20: 'Maximal svårighetsgrad med alla tidigare element'
    }
};

function toggleLevelInfo() {
    const levelInfo = document.getElementById('levelInfo');
    const isVisible = levelInfo.style.display === 'block';
    levelInfo.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        updateLevelInfo(document.getElementById('game-language').value);
    }
}

function updateLevelInfo(language) {
    const trans = levelDescriptions[language] || levelDescriptions['en'];
    const levelDetails = document.getElementById('levelDetails');
    let html = '';
    for (let i = 1; i <= 20; i++) {
        html += `<p><strong>Level ${i}:</strong> ${trans[i]}</p>`;
    }
    levelDetails.innerHTML = html;
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
    document.getElementById('levelInfo').style.display = 'none'; // Hide level info on reset
}

// Ensure login check and language load on page load
window.onload = function() {
    updateMatrixMode();
    changeLanguage('en'); // Default to English
    checkLogin(); // Check if user is logged in
    loadProfileImage();
};
