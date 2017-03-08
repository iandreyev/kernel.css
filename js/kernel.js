/*
    kernel.css v0.3.2
    MIT License
    github.com/ionogy/kernel.css
*/

var kernel = kernel || {};

(function(app) {
    'use strict';

    app.closeNotice = function(e) {
        var parent = e.currentTarget.parentNode;
        parent.remove();
    }

    var navIsToggled = false;

    /**
    * Toogle header navigation.
    **/

    app.toggleNav = function(e) {
        var navList = e.currentTarget.parentNode.querySelector('.ion-nav');

        navIsToggled = !navIsToggled;

        if (navIsToggled) {
            var navMobile = document.createElement('nav');
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

    /**
    * Toggle the sidebar.
    **/

    app.toggleSidebar = function() {
        if (sidebarIsToggled) {
            sidebar.style.width = '60px';
        } else {
            sidebar.style.width = '220px';
        }

        sidebarIsToggled = !sidebarIsToggled;
    };

    /**
    * Initializes dom elements.
    **/

    app.init = function() {
        var navToggle = document.querySelectorAll('.ion-header .nav-toggle');
        var sidebarToggle = document.querySelector('.ion-sidebar ul li:first-child');
        var notice = document.querySelectorAll('.ion-notice .material-icons');

        if (navToggle) {
            navToggle.forEach(function(element) {
                element.onclick = app.toggleNav;
            });
        }

        if (sidebarToggle) {
            sidebarToggle.onclick = app.toggleSidebar;
        }

        if (notice) {
            notice.forEach(function(element) {
                element.onclick = app.closeNotice;
            });
        }
    };
})(kernel);

window.onload = kernel.init;
