
const timerEl = document.getElementById('timer');

// تاريخ بداية العيد (مثال: 6 يونيو 2025، الساعة 00:00:00)
const eidDate = new Date('2025-06-06T00:00:00');

function updateTimer() {
  const now = new Date();
  const diff = eidDate - now;

  if (diff <= 0) {
    timerEl.textContent = "عيد سعيد! 🎉";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))+1;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)+6;
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60)+5;

  timerEl.textContent = `${days} : ${hours} : ${minutes} : ${seconds} `;
}

updateTimer(); // عرض أولي
const timerInterval = setInterval(updateTimer, 1000);
