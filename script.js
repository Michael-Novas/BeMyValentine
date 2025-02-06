const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML = "♎🤍♒";
gif.src = "https://i.pinimg.com/originals/73/51/6c/73516c26e721ac8daed8d181ac7a7a18.gif";
});

noBtn.addEventListener("mouseover", ()=> {
	const noBtnRect = noBtn.getBoundingClientRect();
	const maxX = window.innerWidth - noBtnRect.width;
	const maxY = window.innerHeight - noBtnRect.height;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.left = randomX + 'px';
	noBtn.style.top = randomY + 'px';
});
