const categories = ["History", "Science", "Geography", "Sports", "Entertainment"];
const points = [1000000, 2000000, 3000000, 4000000, 5000000];

const questions = {
    round1: [
        { category: "History", question: "Who was the first president of the United States?", points: 1000000 },
        { category: "History", question: "In which year did World War II end?", points: 2000000 },
        { category: "History", question: "What was the name of the first human-made satellite to orbit Earth?", points: 3000000 },
        { category: "History", question: "Which empire was ruled by Genghis Khan?", points: 4000000 },
        { category: "History", question: "What treaty ended World War I?", points: 5000000 },
        { category: "Science", question: "What is the chemical symbol for water?", points: 1000000 },
        { category: "Science", question: "What gas do plants absorb from the atmosphere?", points: 2000000 },
        { category: "Science", question: "How many planets are in our solar system?", points: 3000000 },
        { category: "Science", question: "Who developed the theory of general relativity?", points: 4000000 },
        { category: "Science", question: "What part of the brain controls balance and coordination?", points: 5000000 },
        { category: "Geography", question: "What is the capital of the United States?", points: 1000000 },
        { category: "Geography", question: "What continent is the Sahara Desert located on?", points: 2000000 },
        { category: "Geography", question: "What country has the most time zones?", points: 3000000 },
        { category: "Geography", question: "What U.S. state has the longest coastline?", points: 4000000 },
        { category: "Geography", question: "Which river is the longest in the world?", points: 5000000 },
        { category: "Sports", question: "What is the national sport of Canada?", points: 1000000 },
        { category: "Sports", question: "What sport does Serena Williams play?", points: 2000000 },
        { category: "Sports", question: "What is the diameter of a basketball hoop in inches?", points: 3000000 },
        { category: "Sports", question: "Who holds the record for the most home runs in MLB history?", points: 4000000 },
        { category: "Sports", question: "What country hosted the 2016 Summer Olympics?", points: 5000000 },
        { category: "Entertainment", question: "Who sang 'Thriller'?", points: 1000000 },
        { category: "Entertainment", question: "What movie franchise features a character named Jack Sparrow?", points: 2000000 },
        { category: "Entertainment", question: "Who directed the movie 'Inception'?", points: 3000000 },
        { category: "Entertainment", question: "What is the name of the wizard school in 'Harry Potter'?", points: 4000000 },
        { category: "Entertainment", question: "Who won the Best Actor Oscar in 2020?", points: 5000000 },
    ],
    round2: [
        { category: "History", question: "Who wrote the Declaration of Independence?", points: 1000000 },
        { category: "History", question: "What year did the Titanic sink?", points: 2000000 },
        { category: "History", question: "Who was the first woman to fly solo across the Atlantic Ocean?", points: 3000000 },
        { category: "History", question: "What was the name of the first human to travel into space?", points: 4000000 },
        { category: "History", question: "Which city was divided by a wall until 1989?", points: 5000000 },
        { category: "Science", question: "What is the hardest natural substance on Earth?", points: 1000000 },
        { category: "Science", question: "What is the primary gas in Earth's atmosphere?", points: 2000000 },
        { category: "Science", question: "What type of blood cells fight infection?", points: 3000000 },
        { category: "Science", question: "What element does 'O' represent on the periodic table?", points: 4000000 },
        { category: "Science", question: "Who invented the telephone?", points: 5000000 },
        { category: "Geography", question: "Which country has the largest population in the world?", points: 1000000 },
        { category: "Geography", question: "What is the tallest mountain in the world?", points: 2000000 },
        { category: "Geography", question: "What country has a maple leaf on its flag?", points: 3000000 },
        { category: "Geography", question: "What city is known as the 'Big Apple'?", points: 4000000 },
        { category: "Geography", question: "What is the capital of Australia?", points: 5000000 },
        { category: "Sports", question: "How many players are on a basketball team on the court at a time?", points: 1000000 },
        { category: "Sports", question: "What color jersey is worn by the winner of the Tour de France?", points: 2000000 },
        { category: "Sports", question: "Which sport is known as 'the beautiful game'?", points: 3000000 },
        { category: "Sports", question: "How many minutes are in a rugby match?", points: 4000000 },
        { category: "Sports", question: "What sport is the 'Stanley Cup' awarded for?", points: 5000000 },
        { category: "Entertainment", question: "Who starred in the movie 'Forrest Gump'?", points: 1000000 },
        { category: "Entertainment", question: "What is the name of the fictional land in 'The Lion King'?", points: 2000000 },
        { category: "Entertainment", question: "Who wrote the 'Game of Thrones' book series?", points: 3000000 },
        { category: "Entertainment", question: "What Disney princess sings 'Let It Go'?", points: 4000000 },
        { category: "Entertainment", question: "What is the highest-grossing film of all time (as of 2024)?", points: 5000000 },
    ],
    round3: [
        { category: "History", question: "Who was the first man on the moon?", points: 1000000 },
        { category: "History", question: "What war was fought between the North and South regions of the United States?", points: 2000000 },
        { category: "History", question: "Who was the longest-reigning British monarch?", points: 3000000 },
        { category: "History", question: "What was the name of the first Roman emperor?", points: 4000000 },
        { category: "History", question: "What was the ancient capital of Japan?", points: 5000000 },
        { category: "Science", question: "What planet is closest to the sun?", points: 1000000 },
        { category: "Science", question: "What is the symbol for gold on the periodic table?", points: 2000000 },
        { category: "Science", question: "What organ in the human body produces insulin?", points: 3000000 },
        { category: "Science", question: "Which gas is used to fill balloons to make them float?", points: 4000000 },
        { category: "Science", question: "What is the powerhouse of the cell?", points: 5000000 },
        { category: "Geography", question: "What is the capital of Japan?", points: 1000000 },
        { category: "Geography", question: "What is the largest desert in the world?", points: 2000000 },
        { category: "Geography", question: "Which country is known as the Land of the Rising Sun?", points: 3000000 },
        { category: "Geography", question: "What mountain range separates Europe from Asia?", points: 4000000 },
        { category: "Geography", question: "What river runs through Egypt?", points: 5000000 },
        { category: "Sports", question: "What is the most-watched sporting event in the world?", points: 1000000 },
        { category: "Sports", question: "Which country won the first FIFA World Cup in 1930?", points: 2000000 },
        { category: "Sports", question: "In which sport would you perform a slam dunk?", points: 3000000 },
        { category: "Sports", question: "What sport is played on a field with 11 players on each team?", points: 4000000 },
        { category: "Sports", question: "Who is considered the fastest man in the world?", points: 5000000 },
        { category: "Entertainment", question: "Who created the cartoon character Mickey Mouse?", points: 1000000 },
        { category: "Entertainment", question: "What is the name of the fictional detective created by Sir Arthur Conan Doyle?", points: 2000000 },
        { category: "Entertainment", question: "Which movie features the quote 'I'll be back'?", points: 3000000 },
        { category: "Entertainment", question: "What animated film features a young girl named Mulan?", points: 4000000 },
        { category: "Entertainment", question: "Who is known as the King of Pop?", points: 5000000 },
    ]
};

let currentRound = 1;
let currentQuestion = null;
let scores = [0, 0, 0]; // Scores for Group 1, Group 2, Group 3

function startRound(round) {
    currentRound = round;
    loadRound(currentRound);
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
}

function loadRound(round) {
    const categoryRow = document.getElementById('category-row');
    const board = document.getElementById('game-board');

    categoryRow.innerHTML = ''; // Clear previous categories
    board.innerHTML = ''; // Clear previous board

    // Load categories
    categories.forEach(category => {
        const categoryCell = document.createElement('div');
        categoryCell.textContent = category;
        categoryRow.appendChild(categoryCell);
    });

    // Load question buttons in columns
    points.forEach((point, rowIndex) => {
        categories.forEach((category, colIndex) => {
            const questionData = questions[`round${round}`].find(q => q.category === category && q.points === point);
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = point;
            cell.onclick = () => showQuestion(questionData, cell);
            board.appendChild(cell);
        });
    });
}

function showQuestion(q, cell) {
    if (cell.classList.contains('clicked')) return; // Prevent re-clicking

    currentQuestion = q;
    cell.classList.add('clicked');

    document.getElementById('question-text').textContent = q.question;
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
}

function awardPoints(group) {
    scores[group - 1] += currentQuestion.points;
    updateScores();
    goBack();
}

function updateScores() {
    document.getElementById('score-group1').textContent = scores[0];
    document.getElementById('score-group2').textContent = scores[1];
    document.getElementById('score-group3').textContent = scores[2];
}

function goBack() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
}

function returnToLandingPage() {
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
}

