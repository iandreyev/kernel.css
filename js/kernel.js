/*
    kernel.css v0.3.0
    MIT License
    github.com/ionogy/kernel.css
*/

var kernel = kernel || {};

(function(app) {
    'use strict';

    var navIsToggled = false;

    app.toggleNav = function(e) {
        var navList = document.querySelector('.ion-header .ion-nav');

        navIsToggled = !navIsToggled;

        if (navIsToggled) {
            const navMobile = document.createElement('nav');
            navMobile.innerHTML = navList.innerHTML;
            navMobile.className = 'ion-nav-mobile';
            navMobile.style['z-index'] = '1000';

            document.body.appendChild(navMobile);
        } else {
            document.querySelector('.ion-nav-mobile').remove();
        }
    };

    var sidebar = document.querySelector('.ion-sidebar');
    var sidebarIsToggled = false;

    app.toggleSidebar = function() {
        if (sidebarIsToggled) {
            sidebar.style.width = '60px';
        } else {
            sidebar.style.width = '220px';
        }

        sidebarIsToggled = !sidebarIsToggled;
    };

    app.init = function() {
        var navToggle = document.querySelector('.ion-header .nav-toggle');
        var sidebarToggle = document.querySelector('.ion-sidebar ul li:first-child');

        if (navToggle) {
            navToggle.onclick = app.toggleNav;
        }

        if (sidebarToggle) {
            sidebarToggle.onclick = app.toggleSidebar;
        }
    };
})(kernel);

window.onload = kernel.init;
