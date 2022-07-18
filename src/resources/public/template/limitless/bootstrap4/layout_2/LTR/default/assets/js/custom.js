/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------
 *
 *  # Layout - fixed navbar and sidebar with custom scrollbar
 *
 *  Demo JS code for layout_fixed_sidebar_custom.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FixedSidebarCustomScroll = function() {


    //
    // Setup module components
    //

    // Perfect scrollbar
    var _componentPerfectScrollbar = function() {
        if (typeof PerfectScrollbar == 'undefined') {
            console.warn('Warning - perfect_scrollbar.min.js is not loaded.');
            return;
        }

        // Initialize
        var ps = new PerfectScrollbar('.sidebar-fixed .sidebar-content', {
            wheelSpeed: 2,
            wheelPropagation: true
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentPerfectScrollbar();
        }
    }
}();

/* ------------------------------------------------------------------------------
 *
 *  # Hideable navbar
 *
 *  Demo JS code for navbar_hideable.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NavbarHideable = function() {


    //
    // Setup module components
    //

    // Headroom.js
    var _componentHeadroom = function() {
        if (typeof Headroom == 'undefined') {
            console.warn('Warning - headroom.min.js is not loaded.');
            return;
        }

        // Define elements
        var navbarTop = document.querySelector('.navbar-slide-top'),
            navbarBottom = document.querySelector('.navbar-slide-bottom');


        //
        // Top navbar
        //

        if (navbarTop) {

            // Construct an instance of Headroom, passing the element
            var headroomTop = new Headroom(navbarTop, {
                offset: navbarTop.offsetHeight,
                tolerance: {
                    up: 10,
                    down: 10
                },
                onUnpin : function() {
                    $('.headroom').find('.show').removeClass('show');
                }
            });

            // Initialise
            headroomTop.init();
        }



        //
        // Bottom navbar
        //

        if (navbarBottom) {

            // Construct an instance of Headroom, passing the element
            var headroomBottom = new Headroom(navbarBottom, {
                offset: navbarBottom.offsetHeight,
                tolerance: {
                    up: 10,
                    down: 10
                },
                onUnpin : function() {
                    $('.headroom').find('.show').removeClass('show');
                }
            });

            // Initialise
            headroomBottom.init();
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHeadroom();
        }
    }
}();

/* ------------------------------------------------------------------------------
 *
 *  # Secondary sidebar
 *
 *  Demo JS code for secondary sidebar pages
 *
 * ---------------------------------------------------------------------------- */

// Setup module
// ------------------------------
var SidebarSecondary = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-input-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
        }
    }
}();

/* ------------------------------------------------------------------------------
 *
 *  # Layout - fixed navbar and sidebar with custom scrollbar
 *
 *  Demo JS code for layout_fixed_sidebar_custom.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FixedSidebarSecondaryFixedCustomScroll = function() {


    //
    // Setup module components
    //

    // Perfect scrollbar
    var _componentPerfectScrollbarSidebarSecondaryFixed = function() {
        if (typeof PerfectScrollbar == 'undefined') {
            console.warn('Warning - perfect_scrollbar.min.js is not loaded.');
            return;
        }

        // Initialize
        var psa = new PerfectScrollbar('#rg-sidebar-secondary-fixed-content-scroll', {
            wheelSpeed: 2,
            wheelPropagation: true
        });
        //console.log('FixedSidebarSecondaryFixedCustomScroll loaded. sss');
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentPerfectScrollbarSidebarSecondaryFixed();
        }
    }
}();



// Initialize modules
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FixedSidebarCustomScroll.init();
    FixedSidebarSecondaryFixedCustomScroll.init();
    NavbarHideable.init();
    SidebarSecondary.initComponents();
});
