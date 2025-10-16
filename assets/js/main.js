/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SWIPER TESTIMONIALS & RECOMMENDATIONS ===============*/
let swiperTestimonials = new Swiper(".testimonials__swiper", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".testimonials__pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.education__card`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
  interval: 150,
});

sr.reveal(`.achievement__spotlight`, {
  delay: 200,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

/*=============== NEW SECTIONS ANIMATIONS ===============*/
sr.reveal(`.story__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 150,
});

sr.reveal(`.stories__view-more`, {
  delay: 300,
  scale: 0.9,
  origin: "bottom",
  distance: "20px",
});

sr.reveal(`.cert__category`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
  interval: 150,
});

sr.reveal(`.achievements__sidebar`, {
  delay: 200,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.blog__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

sr.reveal(`.testimonials__swiper`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.games__tabs`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.game__content`, {
  delay: 200,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});
/*=============== SKILLS PROGRESS ANIMATION ===============*/
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.skills__progress-bar');
  
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress-width', progress + '%');
    
    // Add animation class when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.style.width = progress + '%';
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(bar);
  });
}

// Initialize progress bars animation
document.addEventListener('DOMContentLoaded', animateProgressBars);

/*=============== ENHANCED ANIMATIONS ===============*/
function initEnhancedAnimations() {
  // Add floating animation to certain elements
  const floatingElements = document.querySelectorAll('.stories__icon, .cert__badge');
  floatingElements.forEach(el => {
    el.classList.add('floating');
  });

  // Add gradient text effect to section titles
  const sectionTitles = document.querySelectorAll('.section__title');
  sectionTitles.forEach(title => {
    title.classList.add('gradient-text');
  });

  // Add hover lift effect to cards
  const cards = document.querySelectorAll('.stories__card, .cert__item, .blog__card, .testimonial__card');
  cards.forEach(card => {
    card.classList.add('hover-lift');
  });
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', initEnhancedAnimations);

/*=============== SMOOTH SCROLL FOR NAVIGATION ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/*=============== DYNAMIC TYPING EFFECT ===============*/
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect for home greeting
document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.querySelector('.home__greeting');
  if (greeting) {
    setTimeout(() => {
      typeWriter(greeting, "Hello, I'm", 150);
    }, 1000);
  }
});

/*=============== PARALLAX EFFECT ===============*/
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.stories__travel, .achievements__sidebar');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/*=============== COUNTER ANIMATION ===============*/
function animateCounters() {
  const counters = document.querySelectorAll('.stat__number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/\D/g, ''));
    const suffix = counter.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 100;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + suffix;
          }, 20);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);/*====
=========== GAMES FUNCTIONALITY ===============*/

// Game Tab Switching
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for all elements to be ready
  setTimeout(() => {
    const gameTabs = document.querySelectorAll('.games__tab');
    const gameContents = document.querySelectorAll('.game__content');

    if (gameTabs.length > 0) {
      gameTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active classes
          gameTabs.forEach(t => t.classList.remove('active-tab'));
          gameContents.forEach(c => c.classList.remove('active-game'));
          
          // Add active class to clicked tab
          tab.classList.add('active-tab');
          
          // Show corresponding game content
          const gameId = tab.getAttribute('data-game');
          const gameElement = document.getElementById(gameId);
          if (gameElement) {
            gameElement.classList.add('active-game');
          }
        });
      });
    }

    // Initialize games with error handling
    try {
      initTicTacToe();
    } catch (error) {
      console.error('Tic Tac Toe initialization error:', error);
    }
    
    try {
      initSudoku();
    } catch (error) {
      console.error('Sudoku initialization error:', error);
    }
  }, 100);
});

/*=============== TIC TAC TOE GAME ===============*/
function initTicTacToe() {
  let currentPlayer = 'X';
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  const cells = document.querySelectorAll('.ttt-cell');
  const currentPlayerDisplay = document.getElementById('current-player');
  const statusDisplay = document.getElementById('ttt-status');
  const resetButton = document.getElementById('ttt-reset');

  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-index'));
    
    if (gameBoard[cellIndex] !== '' || !gameActive) return;
    
    gameBoard[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add(currentPlayer.toLowerCase());
    
    checkResult();
  }

  function checkResult() {
    let roundWon = false;
    let winningCells = [];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        roundWon = true;
        winningCells = [a, b, c];
        break;
      }
    }

    if (roundWon) {
      statusDisplay.textContent = `Player ${currentPlayer} wins! 🎉`;
      statusDisplay.style.color = '#10b981';
      gameActive = false;
      
      // Highlight winning cells
      winningCells.forEach(index => {
        cells[index].classList.add('winner');
      });
      return;
    }

    if (!gameBoard.includes('')) {
      statusDisplay.textContent = "It's a tie! 🤝";
      statusDisplay.style.color = '#f59e0b';
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.textContent = currentPlayer;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    statusDisplay.style.color = 'var(--text-color)';
  }

  function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayerDisplay.textContent = currentPlayer;
    statusDisplay.textContent = "Your turn!";
    statusDisplay.style.color = 'var(--text-color)';
    
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('x', 'o', 'winner');
    });
  }

  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetButton.addEventListener('click', resetGame);
}

/*=============== SUDOKU GAME ===============*/
function initSudoku() {
  console.log('Initializing Sudoku...');
  let sudokuGrid = [];
  let solutionGrid = [];
  let selectedCell = null;
  let difficulty = 'easy';

  const board = document.getElementById('sudoku-board');
  const statusDisplay = document.getElementById('sudoku-status');
  const numberButtons = document.querySelectorAll('.number-btn');
  const difficultyButtons = document.querySelectorAll('#sudoku-easy, #sudoku-medium, #sudoku-hard');
  const resetButton = document.getElementById('sudoku-reset');

  console.log('Sudoku elements found:', {
    board: !!board,
    statusDisplay: !!statusDisplay,
    numberButtons: numberButtons.length,
    difficultyButtons: difficultyButtons.length,
    resetButton: !!resetButton
  });

  // Pre-made Sudoku puzzles for reliability
  const puzzles = {
    easy: [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]
    ],
    medium: [
      [0,0,0,6,0,0,4,0,0],
      [7,0,0,0,0,3,6,0,0],
      [0,0,0,0,9,1,0,8,0],
      [0,0,0,0,0,0,0,0,0],
      [0,5,0,1,8,0,0,0,3],
      [0,0,0,3,0,6,0,4,5],
      [0,4,0,2,0,0,0,6,0],
      [9,0,3,0,0,0,0,0,0],
      [0,2,0,0,0,0,1,0,0]
    ],
    hard: [
      [0,0,0,0,0,0,6,8,0],
      [0,0,0,0,4,6,0,0,0],
      [7,0,0,0,0,0,0,0,9],
      [0,5,0,0,0,0,0,0,0],
      [0,0,0,1,0,6,0,0,0],
      [3,0,0,0,0,8,0,0,0],
      [0,0,0,0,0,0,0,2,0],
      [0,0,0,5,2,0,0,0,0],
      [0,4,0,0,0,0,5,0,0]
    ]
  };

  function createBoard() {
    console.log('Creating Sudoku board...');
    if (!board) {
      console.error('Sudoku board element not found!');
      return;
    }
    
    board.innerHTML = '';
    for (let i = 0; i < 81; i++) {
      const cell = document.createElement('div');
      cell.classList.add('sudoku__cell');
      cell.setAttribute('data-index', i);
      cell.addEventListener('click', () => selectCell(cell, i));
      board.appendChild(cell);
    }
    console.log('Sudoku board created with 81 cells');
  }

  function generateSudoku() {
    // Use pre-made puzzle
    const puzzle = puzzles[difficulty];
    sudokuGrid = puzzle.map(row => [...row]);
    
    // Create solution by solving the puzzle
    solutionGrid = puzzle.map(row => [...row]);
    solveSudoku(solutionGrid);
    
    displayGrid();
  }

  function solveSudoku(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(grid, row, col, num)) {
              grid[row][col] = num;
              if (solveSudoku(grid)) {
                return true;
              }
              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isValidMove(grid, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num) return false;
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (grid[x][col] === num) return false;
    }
    
    // Check 3x3 box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] === num) return false;
      }
    }
    
    return true;
  }

  function displayGrid() {
    if (!board) return;
    
    const cells = board.querySelectorAll('.sudoku__cell');
    if (cells.length === 0) return;
    
    cells.forEach((cell, index) => {
      const row = Math.floor(index / 9);
      const col = index % 9;
      const value = sudokuGrid[row][col];
      
      cell.textContent = value === 0 ? '' : value;
      cell.classList.remove('given', 'error', 'selected');
      
      if (value !== 0) {
        cell.classList.add('given');
      }
    });
    
    if (statusDisplay) {
      statusDisplay.textContent = 'Select a cell and choose a number!';
      statusDisplay.style.color = 'var(--text-color)';
    }
  }

  function selectCell(cell, index) {
    if (!cell || !statusDisplay) return;
    
    // Remove previous selection
    const allCells = board.querySelectorAll('.sudoku__cell');
    allCells.forEach(c => c.classList.remove('selected'));
    
    // Don't select given cells
    if (cell.classList.contains('given')) {
      statusDisplay.textContent = 'Cannot modify given numbers!';
      return;
    }
    
    cell.classList.add('selected');
    selectedCell = index;
    statusDisplay.textContent = 'Cell selected! Choose a number.';
  }

  function placeNumber(num) {
    if (!statusDisplay) return;
    
    if (selectedCell === null) {
      statusDisplay.textContent = 'Please select a cell first!';
      return;
    }
    
    const cell = board.querySelector(`[data-index="${selectedCell}"]`);
    if (!cell || cell.classList.contains('given')) return;
    
    const row = Math.floor(selectedCell / 9);
    const col = selectedCell % 9;
    
    // Clear cell if num is 0 (erase)
    if (num === 0) {
      sudokuGrid[row][col] = 0;
      cell.textContent = '';
      cell.classList.remove('error');
      statusDisplay.textContent = 'Number erased!';
      return;
    }
    
    // Check if move is valid
    if (isValidMove(sudokuGrid, row, col, num)) {
      sudokuGrid[row][col] = num;
      cell.textContent = num;
      cell.classList.remove('error');
      statusDisplay.textContent = 'Good move!';
      
      // Check if puzzle is complete
      if (isPuzzleComplete()) {
        statusDisplay.textContent = 'Congratulations! Puzzle solved! 🎉';
        statusDisplay.style.color = '#10b981';
      }
    } else {
      cell.classList.add('error');
      statusDisplay.textContent = 'Invalid move! Try again.';
      setTimeout(() => {
        cell.classList.remove('error');
        statusDisplay.textContent = 'Select a cell and choose a number!';
      }, 1500);
    }
  }

  function isPuzzleComplete() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (sudokuGrid[row][col] === 0) return false;
      }
    }
    return true;
  }

  // Event listeners with error checking
  if (difficultyButtons.length > 0) {
    difficultyButtons.forEach(button => {
      button.addEventListener('click', () => {
        difficulty = button.id.split('-')[1];
        generateSudoku();
        if (statusDisplay) {
          statusDisplay.textContent = `New ${difficulty} puzzle generated!`;
          statusDisplay.style.color = 'var(--text-color)';
        }
      });
    });
  }

  if (numberButtons.length > 0) {
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        const num = parseInt(button.getAttribute('data-number'));
        placeNumber(num);
      });
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      generateSudoku();
      selectedCell = null;
      if (statusDisplay) {
        statusDisplay.textContent = 'New game started!';
        statusDisplay.style.color = 'var(--text-color)';
      }
    });
  }

  // Initialize with error checking
  try {
    createBoard();
    generateSudoku();
  } catch (error) {
    console.error('Sudoku initialization error:', error);
    if (statusDisplay) {
      statusDisplay.textContent = 'Error loading Sudoku. Please refresh the page.';
    }
  }
}
/*
=============== SUDOKU TEST FUNCTION ===============*/
function testSudoku() {
  console.log('Testing Sudoku...');
  const board = document.getElementById('sudoku-board');
  const status = document.getElementById('sudoku-status');
  
  if (!board) {
    alert('Sudoku board not found!');
    return;
  }
  
  if (!status) {
    alert('Sudoku status not found!');
    return;
  }
  
  // Clear and recreate board
  board.innerHTML = '';
  
  // Simple test puzzle
  const testPuzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
  ];
  
  // Create cells
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement('div');
    cell.classList.add('sudoku__cell');
    cell.setAttribute('data-index', i);
    
    const row = Math.floor(i / 9);
    const col = i % 9;
    const value = testPuzzle[row][col];
    
    if (value !== 0) {
      cell.textContent = value;
      cell.classList.add('given');
    }
    
    board.appendChild(cell);
  }
  
  status.textContent = 'Test Sudoku loaded successfully!';
  status.style.color = '#10b981';
  
  console.log('Test Sudoku created successfully');
}/*=========
====== STORIES SECTION FUNCTIONALITY ===============*/
document.addEventListener('DOMContentLoaded', function() {
  initStoriesSection();
});

function initStoriesSection() {
  // Initialize image sliders
  initImageSliders();
  
  // Initialize view more functionality
  initViewMore();
}

/*=============== IMAGE SLIDER FUNCTIONALITY ===============*/
function initImageSliders() {
  const storyCards = document.querySelectorAll('.story__card');
  
  storyCards.forEach(card => {
    const images = card.querySelectorAll('.story__img');
    const dots = card.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    
    if (images.length <= 1) return; // Skip if only one image
    
    // Dot click functionality
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoSlide();
      });
    });
    
    // Auto slide functionality
    function autoSlide() {
      currentSlide = (currentSlide + 1) % images.length;
      showSlide(currentSlide);
    }
    
    function showSlide(index) {
      // Hide all images
      images.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Show current image
      images[index].classList.add('active');
      dots[index].classList.add('active');
      
      currentSlide = index;
    }
    
    function startAutoSlide() {
      slideInterval = setInterval(autoSlide, 4000); // Change slide every 4 seconds
    }
    
    function resetAutoSlide() {
      clearInterval(slideInterval);
      startAutoSlide();
    }
    
    // Start auto sliding
    startAutoSlide();
    
    // Pause on hover
    card.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    card.addEventListener('mouseleave', () => {
      startAutoSlide();
    });
  });
}

/*=============== VIEW MORE FUNCTIONALITY ===============*/
function initViewMore() {
  const viewMoreBtn = document.getElementById('view-more-stories');
  const hiddenCards = document.querySelectorAll('.story__card--hidden');
  let isExpanded = false;
  
  if (!viewMoreBtn) return;
  
  viewMoreBtn.addEventListener('click', () => {
    if (!isExpanded) {
      // Show hidden cards
      hiddenCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.display = 'flex';
          card.classList.add('show', 'animate-in');
        }, index * 100); // Stagger animation
      });
      
      // Update button
      viewMoreBtn.querySelector('.btn-text').textContent = 'Show Less';
      viewMoreBtn.classList.add('rotated');
      isExpanded = true;
      
    } else {
      // Hide cards
      hiddenCards.forEach(card => {
        card.style.display = 'none';
        card.classList.remove('show', 'animate-in');
      });
      
      // Update button
      viewMoreBtn.querySelector('.btn-text').textContent = 'View More Stories';
      viewMoreBtn.classList.remove('rotated');
      isExpanded = false;
      
      // Scroll back to stories section
      document.getElementById('stories').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

/*=============== STORIES INTERSECTION OBSERVER ===============*/
function initStoriesObserver() {
  const storyCards = document.querySelectorAll('.story__card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  storyCards.forEach(card => {
    observer.observe(card);
  });
}

// Initialize observer
document.addEventListener('DOMContentLoaded', initStoriesObserver);