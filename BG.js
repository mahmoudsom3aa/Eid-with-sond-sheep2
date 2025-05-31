const sheepContainer = document.getElementById('sheep-container');
  const sheepSound = document.getElementById('sheep-sound');

  function createSheep() {
    const sheep = document.createElement('div');
    sheep.classList.add('sheep');

    // إما رمز أو صورة:
     sheep.textContent = '🐑'; // ← لو عايز تستخدم الإيموجي

    const img = document.createElement('img');
   // img.src = 'sheep.png'; // ← غيّرها لرابط أو اسم صورة الخروف
    img.style.width = '40px';
    img.style.pointerEvents = 'auto'; // عشان الكلك يبقى على الأب مش الصورة
    sheep.appendChild(img);

    // مكان عشوائي
    sheep.style.left = Math.random() * 100 + 'vw';
    sheep.style.animationDuration = (Math.random() * 3 + 3) + 's';

    // لما تدوس على الخروف
    sheep.addEventListener('click', () => {
      sheepSound.currentTime = -1;
      sheepSound.play();
    });

    sheepContainer.appendChild(sheep);

 const duration = Math.random() * 4 + 4; // بين 4 و 8 ثواني
sheep.style.animationDuration = duration + 's';

// نحذف الخروف بعد ما الأنيميشن يخلص
setTimeout(() => {
  sheep.remove();
}, duration * 1000 + 500); // +500ms عشان نضمن إنه نزل تمامًا
  }

  setInterval(createSheep, 600);