// const linear = document.querySelector('.linear')
// const followUp = document.querySelector('.follow-up')

// const animation = () => {
//     linear.style.animation = 'linear-flow 10s ease-in-out';
//     if (linear.getBoundingClientRect().left <= -1118) {
//         followUp.style.animation = 'linear-flow2 10s ease-in-out';
//     } else {
//         animation()
//     }
//     if (followUp.getBoundingClientRect().left <= -1118) {
//         linear.style.animation = 'linear-flow 10s ease-in-out'
//     } else {
//         animation()
//     }
// }
// animation()
const card = document.querySelector('.card')
card.addEventListener('click', () => { console.log('card') })