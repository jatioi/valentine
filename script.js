
    // Section navigation
    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }

    // Cat interaction
    const valentineMessages = [
      "Happy Valentine's Day! ",
      "You're purfect! ",
      "You're Precious!",
      "Don't Forget to take rest okay?",
      "Let's go out if you're free or just cuddle if you want :p"
    
    ];

    let messageIndex = 0;

    function catSpeak() {
      const speech = document.getElementById('catSpeech');
      speech.style.opacity = '1';
      speech.textContent = valentineMessages[messageIndex];
      messageIndex = (messageIndex + 1) % valentineMessages.length;
      
      // Create hearts
      createHearts();
      
      // Reset speech bubble after delay
      setTimeout(() => {
        speech.style.opacity = '0';
      }, 2000);
    }

    const cat = document.getElementById('cat');
    const popup = document.getElementById('valentine-popup');
    let clickCount = 0;
    let isGiggling = false;

    function createHeart(x, y) {
      const heart = document.createElement('div');
      heart.className = 'floating-hearts';
      heart.innerHTML = '❤️';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    }

    function giggle() {
      if (!isGiggling) {
        isGiggling = true;
        cat.classList.add('giggling');
        
        // Create floating hearts
        const rect = cat.getBoundingClientRect();
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            createHeart(rect.left + Math.random() * rect.width, rect.top);
          }, i * 200);
        }

        setTimeout(() => {
          cat.classList.remove('giggling');
          isGiggling = false;
        }, 1000);
      }
    }

    function closePopup() {
      popup.classList.remove('show');
      cat.classList.remove('holding-flower');
      clickCount = 0;
    }

    function handleClick() {
      clickCount++;
      giggle();

      if (clickCount === 7) {
        setTimeout(() => {
          cat.classList.add('holding-flower');
          popup.classList.add('show');
        }, 1000);
      }
    }

    cat.addEventListener('click', handleClick);
    cat.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleClick();
    });

    // Heart creation
    function createHearts() {
      const container = document.querySelector('.cat-container');
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => heart.remove(), 3000);
      }
    }

    // Auto-create hearts around Snoopy
    setInterval(() => {
      const container = document.querySelector('.snoopy-container');
      if (document.getElementById('snoopy').classList.contains('active')) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
      }
    }, 500);

    // Make flower interactive
    document.querySelector('.flower').addEventListener('click', function() {
      const container = document.querySelector('.flower-container');
      for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = 50 + Math.cos(i * Math.PI / 4) * 100 + '%';
        heart.style.top = 50 + Math.sin(i * Math.PI / 4) * 100 + '%';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
      }
    });

    function openEnvelope() {
        document.querySelector(".wrapper").classList.add("open");
        setTimeout(() => {
            document.getElementById("options").classList.remove("hidden");
        }, 1000);
    }
    
    function chooseOption(choice) {
        document.getElementById("options").classList.add("hidden");
    
        if (choice === "eatout") {
            document.getElementById("vietnamese").classList.remove("hidden");
        } else {
            document.getElementById("availability").classList.remove("hidden");
        }
    }
    
    function showRecommendation() {
        document.getElementById("vietnamese").classList.add("hidden");
        document.getElementById("recommendation").classList.remove("hidden");
    }
    
    function showScreenshotMessage() {
        document.getElementById("availability").classList.add("hidden");
        document.getElementById("screenshot").classList.remove("hidden");
    }
    