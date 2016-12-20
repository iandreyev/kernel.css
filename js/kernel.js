/*
    kernel.css v0.1.0
    GPL License
    github.com/ionogy/kernel.css
*/

var essence = essence || {};

essence.toggled = false;

essence.toggleNav = function(e) {
    const navList = document.querySelector('.ion-header .ion-nav');

    this.toggled = !this.toggled;

    if (this.toggled) {
        const navMobile = document.createElement('div');
        navMobile.innerHTML = navList.innerHTML;
        navMobile.className = 'ion-nav-mobile';

        document.body.appendChild(navMobile);
    } else {
        document.querySelector('.ion-nav-mobile').remove();
    }
};

document.querySelector('.ion-header .nav-toggle').onclick =
    essence.toggleNav;
