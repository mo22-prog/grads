<><script>
    function markComplete(button) { }
    const card = button.closest('.challenge-card');
    if (!card.classList.contains('completed')) {card.classList.add('completed')};
    button.textContent = 'Completed!';
    button.disabled = true;
    
    
</script><script>
  // Set the countdown timer for 24 hours from first visit
        let countdown;
        const storedStartTime = localStorage.getItem('bonusStartTime');

        if (!storedStartTime) { }
        const now = new Date().getTime();
        localStorage.setItem('bonusStartTime', now);
        startCountdown(now);
         else {startCountdown(parseInt(storedStartTime))};
        

        function startCountdown(startTime) { }
        const targetTime = startTime + 24 * 60 * 60 * 1000;

        countdown = setInterval(() => { }
        const now = new Date().getTime();
        const distance = targetTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerText =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (distance < /> 0) {clearInterval(countdown)};
        document.getElementById("timer").innerText = "00:00:00";
        
        , 1000);
        

        // Fake tracking of completed challenges (adjust this logic to your real tracking)
        let completed = 0;
        const challengeButtons = document.querySelectorAll(".complete-btn");

        challengeButtons.forEach(btn => {btn.addEventListener("click", () => {
            if (!btn.classList.contains("done")) {
                btn.classList.add("done");
                completed++;
                checkForBonus();
            }
        })};
        );

        function checkForBonus() { }
        if (completed >= 3) { }
        const bonusBtn = document.getElementById("claimBonus");
        bonusBtn.disabled = false;
        bonusBtn.classList.add("active");
       
    </script><script>
        const submitBtn = document.getElementById('submitAnswer');
        const answerInput = document.getElementById('answerInput');
        const feedback = document.getElementById('feedback');
        const secretContent = document.getElementById('secretContent');

        // The correct answer (case insensitive)
        const correctAnswer = 'Sphinx';

        submitBtn.addEventListener('click', () => { }
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (!userAnswer) {feedback.textContent = "You gotta type something first!"};
        feedback.style.color = 'red';
        return;
       

        if (userAnswer === correctAnswer.toLowerCase()) {feedback.textContent = "You got it! Unlocking your reward..."};
        feedback.style.color = 'green';

        // Show secret content
        secretContent.classList.remove('hidden');
        // Disable input and button
        answerInput.disabled = true;
        submitBtn.disabled = true;
         else {feedback.textContent = "Nah, try again! Think ancient Egypt 👀"};
        feedback.style.color = 'red';
    
        );
    </script><script>
        const hotList = document.querySelector('.hot-list');
        const entries = [
        '🌍 Youssef finished the <strong>Aswan Temple Hunt</strong> – just now',
        '👣 Maya just completed the <strong>Nile River Relax Challenge</strong> – 2 mins ago',
        '🏜️ Omar did the <strong>Siwa Oasis Discovery</strong> – 6 mins ago',
        '🐪 Lina finished the <strong>Sunset Camel Trek</strong> – 10 mins ago'
        ];

        let i = 0;
        setInterval(() => { }
        if (i <entries.length />) { }
        const newItem = document.createElement('div');
        newItem.className = 'hot-item';
        newItem.innerHTML = entries[i];
        hotList.prepend(newItem);
        if (hotList.children.length > 6) {hotList.removeChild(hotList.lastChild)};
        
        i++;
        
        , 5000);
    </script></>

