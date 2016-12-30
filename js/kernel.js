/*
    kernel.css v0.1.0
    GPL License
    github.com/ionogy/kernel.css
*/

window.onload = function() {
    'use strict';

    var kernel = kernel || {};

    kernel.toggled = false;

    kernel.toggleNav = function(e) {
        const navList = document.querySelector('.ion-header .ion-nav');

        this.toggled = !this.toggled;

        if (this.toggled) {
            const navMobile = document.createElement('nav');
            navMobile.innerHTML = navList.innerHTML;
            navMobile.className = 'ion-nav-mobile';
            navMobile.style['z-index'] = '1000';

            document.body.appendChild(navMobile);
        } else {
            document.querySelector('.ion-nav-mobile').remove();
        }
    };

    document.querySelector('.ion-header .nav-toggle').onclick =
        kernel.toggleNav;

    var sidebar, sidebarToggle;
    var sidebarIsExpanded = false;

    sidebar = document.querySelector('.ion-sidebar');
    sidebarToggle = document.querySelector('.ion-sidebar ul li:first-child');

    kernel.invokeSidebar = function() {
        if (sidebarIsExpanded) {
            sidebar.style.width = '60px';
        } else {
            sidebar.style.width = '220px';
        }

        sidebarIsExpanded = !sidebarIsExpanded;
    };

    sidebarToggle.onclick = function() {
        kernel.invokeSidebar();
    };
};
