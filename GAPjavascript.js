let btntop = document.querySelector('.upicon')

document.addEventListener('scroll', function () {
    if (scrollY > window.innerHeight) {
        btntop.style.display = 'flex';

    }
    else {
        btntop.style.display = 'none';
    }
})

let topPanel = document.querySelector('.upicon');
let topPanelHeight = topPanel.offsetHeight;
let topPanelEnd = topPanel.getBoundingClientRect().top + topPanelHeight;

window.addEventListener('scroll', function () {
    if (this.scrollY >= topPanelEnd && this.scrollY <= topPanelEnd + topPanelHeight) {
        topPanel.style.transform = 'translateY(-'
            + (this.scrollY - topPanelEnd) / topPanelHeight * 100
            + '%)';
    }
    else if (this.scrollY < topPanelEnd) {
        topPanel.style.transform = 'translateY(0%)'
    }
    else if (this.scrollY > topPanelEnd) {
        topPanel.style.transform = 'translateY(-100%)'
    }
    else{
        console.log('it work')
    }
})