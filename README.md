Welcome to the Ion framework!

Table of contents
-----------------
 1. INTRODUCTION
 2. INSTALLATION
 3. CONTRIBUTE
 4. CONTACT
 5. CHANGELOG


INTRODUCTION
============

What is it?
-----------
The ion framework is a unintrusive, lightweight and semantic css and javascript framework
inspired by the material design spec. It uses prefixes for all it's classes. It is meant to be
a foundation to your projects, and not a complete product.

Features
--------
 * Includes all the main colors specified in the material design colors spec.
 * Grid system based on flexbox.
 * Navigation with four preset sizes (ion-header-xs, ion-header-sm, ion-header-lg, ion-header-xl).
 * Cubic-bezier transitions.

Why was it created?
-------------------

The framework was orginally created for the Ionogy Spicy project, which can be found here:
https://ionogy.com/spicy
We needed a framework that could be used for creating everything from websites to webapps, and the likes.
It also had to be customizable in order to let users
style their application how they wanted, but no other frameworks fit those requirements well enough.
That is why it was decided to release it as a standalone package.

It is far from finished
------------------------
The ion framework is an ever evolving project, and will
continue to be improved upon. We hope you will enjoy it :)

INSTALLATION
============
Simple. Just include these tags in your html.
```
<link rel="stylesheet" type="text/css" href="css/ion-framework.css" />
<script type="text/javascript" src="ion-framework.js" />
```

Code sample
-----------
```
  <header class="ion-header ion-header-sm ion-bg-white">
    <div class="ion-header-brand">Ion</div>
    <div class="ion-container">
      <nav class="ion-nav">
        <ul>
          <li class="ion-nav-active-state"><a href="#">Home</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Wiki</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      <nav class="ion-nav ion-float-right">
        <ul>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
  </header>
```

CONTRIBUTE
==========

If you like the project and would like to contribute, you can
do so at github.

Contributing code
-----------------

Contributing design
-------------------
If you're a designer

Writing documentation
---------------------
We always appreciate if you help out improving the documentation.
I have probably made lots of typos :)

How do i contribute code to the project?
----------------------------------------
Required software:
 * git

Useful links
------------
 * Github page: http://github.com/ionogy/ion-framework
 * Bug reporter: http://...

Documentation
-------------
As of now the documentation can be found at: http://github.com/ionogy/ion-framework/README.md
It also comes bundled with this Framework.

License
-------
Please read the file called LICENSE.txt

CONTACT
=======
Jim Christian:
 - jimchristian@hotmail.no

CHANGELOG
---------
Please read the file called CHANGELOG.txt
