/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var App = function () {


    //
    // Setup module components
    //

    // Transitions
    // -------------------------

    // Disable all transitions
    var _transitionsDisabled = function() {
        $('body').addClass('no-transitions');
    };

    // Enable all transitions
    var _transitionsEnabled = function() {
        $('body').removeClass('no-transitions');
    };


    // Sidebars
    // -------------------------

    //
    // On desktop
    //

    // Resize main sidebar
    var _sidebarMainResize = function() {

        // Flip 2nd level if menu overflows
        // bottom edge of browser window
        var revertBottomMenus = function() {
            $('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function() {
                var totalHeight = 0,
                    $this = $(this),
                    navSubmenuClass = 'nav-group-sub',
                    navSubmenuReversedClass = 'nav-item-submenu-reversed';

                totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight();
                if($this.children('.' + navSubmenuClass).length) {
                    if(($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()) > document.body.clientHeight) {
                        $this.addClass(navSubmenuReversedClass)
                    }
                    else {
                        $this.removeClass(navSubmenuReversedClass)
                    }
                }
            });
        }

        // If sidebar is resized by default
        if($('body').hasClass('sidebar-xs')) {
            revertBottomMenus();
        }

        // Toggle min sidebar class
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main');
            revertBottomMenus();
        });
    };

    // Toggle main sidebar
    var _sidebarMainToggle = function() {
        $(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-main-hidden');
        });
    };

    // Toggle secondary sidebar
    var _sidebarSecondaryToggle = function() {
        $(document).on('click', '.sidebar-secondary-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-secondary-hidden');
        });
    };


    // Show right, resize main
    var _sidebarRightMainToggle = function() {
        $(document).on('click', '.sidebar-right-main-toggle', function (e) {
            e.preventDefault();

            // Right sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {

                // Make main sidebar mini
                $('body').addClass('sidebar-xs');

                // Hide children lists if they are opened, since sliding animation adds inline CSS
                $('.sidebar-main .nav-sidebar').children('.nav-item').children('.nav-group-sub').css('display', '');
            }
            else {
                $('body').removeClass('sidebar-xs');
            }
        });
    };

    // Show right, hide main
    var _sidebarRightMainHide = function() {
        $(document).on('click', '.sidebar-right-main-hide', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');
            
            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-main-hidden');
            }
            else {
                $('body').removeClass('sidebar-main-hidden');
            }
        });
    };

    // Toggle right sidebar
    var _sidebarRightToggle = function() {
        $(document).on('click', '.sidebar-right-toggle', function (e) {
            e.preventDefault();

            $('body').toggleClass('sidebar-right-visible');
        });
    };

    // Show right, hide secondary
    var _sidebarRightSecondaryToggle = function() {
        $(document).on('click', '.sidebar-right-secondary-toggle', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            $('body').toggleClass('sidebar-right-visible');

            // If visible
            if ($('body').hasClass('sidebar-right-visible')) {
                $('body').addClass('sidebar-secondary-hidden');
            }
            else {
                $('body').removeClass('sidebar-secondary-hidden');
            }
        });
    };


    // Toggle content sidebar
    var _sidebarComponentToggle = function() {
        $(document).on('click', '.sidebar-component-toggle', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-component-hidden');
        });
    };


    //
    // On mobile
    //

    // Expand sidebar to full screen on mobile
    var _sidebarMobileFullscreen = function() {
        $('.sidebar-mobile-expand').on('click', function (e) {
            e.preventDefault();
            var $sidebar = $(this).parents('.sidebar'),
                sidebarFullscreenClass = 'sidebar-fullscreen'

            if(!$sidebar.hasClass(sidebarFullscreenClass)) {
                $sidebar.addClass(sidebarFullscreenClass);
            }
            else {
                $sidebar.removeClass(sidebarFullscreenClass);
            }
        });
    };

    // Toggle main sidebar on mobile
    var _sidebarMobileMainToggle = function() {
        $('.sidebar-mobile-main-toggle').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right');

            if($('.sidebar-main').hasClass('sidebar-fullscreen')) {
                $('.sidebar-main').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle secondary sidebar on mobile
    var _sidebarMobileSecondaryToggle = function() {
        $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-right');

            // Fullscreen mode
            if($('.sidebar-secondary').hasClass('sidebar-fullscreen')) {
                $('.sidebar-secondary').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle right sidebar on mobile
    var _sidebarMobileRightToggle = function() {
        $('.sidebar-mobile-right-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-right').removeClass('sidebar-mobile-main sidebar-mobile-secondary');

            // Hide sidebar if in fullscreen mode on mobile
            if($('.sidebar-right').hasClass('sidebar-fullscreen')) {
                $('.sidebar-right').removeClass('sidebar-fullscreen');
            }
        });
    };

    // Toggle component sidebar on mobile
    var _sidebarMobileComponentToggle = function() {
        $('.sidebar-mobile-component-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('sidebar-mobile-component');
        });
    };


    // Navigations
    // -------------------------

    // Sidebar navigation
    var _navigationSidebar = function() {

        // Define default class names and options
        var navClass = 'nav-sidebar',
            navItemClass = 'nav-item',
            navItemOpenClass = 'nav-item-open',
            navLinkClass = 'nav-link',
            navSubmenuClass = 'nav-group-sub',
            navSlidingSpeed = 250;

        // Configure collapsible functionality
        $('.' + navClass).each(function() {
            $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
                e.preventDefault();

                // Simplify stuff
                var $target = $(this),
                    $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

                // Collapsible
                if($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                    $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
                else {
                    $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
                }

                // Accordion
                if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                    $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
                }
            });
        });

        // Disable click in disabled navigation items
        $(document).on('click', '.' + navClass + ' .disabled', function(e) {
            e.preventDefault();
        });

        // Scrollspy navigation
        $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
    };

    // Navbar navigation
    var _navigationNavbar = function() {

        // Prevent dropdown from closing on click
        $(document).on('click', '.dropdown-content', function(e) {
            e.stopPropagation();
        });

        // Disabled links
        $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        $('.dropdown-content a[data-toggle="tab"]').on('click', function(e) {
            $(this).tab('show');
        });
    };


    // Components
    // -------------------------

    // Tooltip
    var _componentTooltip = function() {

        // Initialize
        $('[data-popup="tooltip"]').tooltip();

        // Demo tooltips, remove in production
        var demoTooltipSelector = '[data-popup="tooltip-demo"]';
        if($(demoTooltipSelector).is(':visible')) {
            $(demoTooltipSelector).tooltip('show');
            setTimeout(function() {
                $(demoTooltipSelector).tooltip('hide');
            }, 2000);
        }
    };

    // Popover
    var _componentPopover = function() {
        $('[data-popup="popover"]').popover();
    };


    // Card actions
    // -------------------------

    // Reload card (uses BlockUI extension)
    var _cardActionReload = function() {
        $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                block = $target.closest('.card');
            
            // Block card
            $(block).block({ 
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
               $(block).unblock();
            }, 2000); 
        });
    };

    // Collapse card
    var _cardActionCollapse = function() {
        var $cardCollapsedClass = $('.card-collapsed');

        // Hide if collapsed by default
        $cardCollapsedClass.children('.card-header').nextAll().hide();

        // Rotate icon if collapsed by default
        $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180');

        // Collapse on click
        $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
            var $target = $(this),
                slidingSpeed = 150;

            e.preventDefault();
            $target.parents('.card').toggleClass('card-collapsed');
            $target.toggleClass('rotate-180');
            $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
        });
    };

    // Remove card
    var _cardActionRemove = function() {
        $('.card [data-action=remove]').on('click', function (e) {
            e.preventDefault();
            var $target = $(this),
                slidingSpeed = 150;

            // If not disabled
            if(!$target.hasClass('disabled')) {
                $target.closest('.card').slideUp({
                    duration: slidingSpeed,
                    start: function() {
                        $target.addClass('d-block');
                    },
                    complete: function() {
                        $target.remove();
                    }
                });
            }
        });
    };

    // Card fullscreen mode
    var _cardActionFullscreen = function() {
        $('.card [data-action=fullscreen]').on('click', function (e) {
            e.preventDefault();

            // Define vars
            var $target = $(this),
                cardFullscreen = $target.closest('.card'),
                overflowHiddenClass = 'overflow-hidden',
                collapsedClass = 'collapsed-in-fullscreen',
                fullscreenAttr = 'data-fullscreen';

            // Toggle classes on card
            cardFullscreen.toggleClass('fixed-top h-100 rounded-0');

            // Configure
            if (!cardFullscreen.hasClass('fixed-top')) {
                $target.removeAttr(fullscreenAttr);
                cardFullscreen.children('.' + collapsedClass).removeClass('show');
                $('body').removeClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none');
            }
            else {
                $target.attr(fullscreenAttr, 'active');
                cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass);
                $('body').addClass(overflowHiddenClass);
                $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none');
            }
        });
    };


    // Misc
    // -------------------------

    // Dropdown submenus. Trigger on click
    var _dropdownSubmenu = function() {

        // All parent levels require .dropdown-toggle class
        $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            // Remove "show" class in all siblings
            $(this).parent().siblings().removeClass('show').find('.show').removeClass('show');

            // Toggle submenu
            $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show');

            // Hide all levels when parent dropdown is closed
            $(this).parents('.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show');
            });
        });
    };

    // Header elements toggler
    var _headerElements = function() {

        // Toggle visible state of header elements
        $('.header-elements-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none');
        });

        // Toggle visible state of footer elements
        $('.footer-elements-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none');
        });
    };


    //
    // Return objects assigned to module
    //

    return {

        // Disable transitions before page is fully loaded
        initBeforeLoad: function() {
            _transitionsDisabled();
        },

        // Enable transitions when page is fully loaded
        initAfterLoad: function() {
            _transitionsEnabled();
        },

        // Initialize all sidebars
        initSidebars: function() {

            // On desktop
            _sidebarMainResize();
            _sidebarMainToggle();
            _sidebarSecondaryToggle();
            _sidebarRightMainToggle();
            _sidebarRightMainHide();
            _sidebarRightToggle();
            _sidebarRightSecondaryToggle();
            _sidebarComponentToggle();

            // On mobile
            _sidebarMobileFullscreen();
            _sidebarMobileMainToggle();
            _sidebarMobileSecondaryToggle();
            _sidebarMobileRightToggle();
            _sidebarMobileComponentToggle();
        },

        // Initialize all navigations
        initNavigations: function() {
            _navigationSidebar();
            _navigationNavbar();
        },

        // Initialize all components
        initComponents: function() {
            _componentTooltip();
            _componentPopover();
        },

        // Initialize all card actions
        initCardActions: function() {
            _cardActionReload();
            _cardActionCollapse();
            _cardActionRemove();
            _cardActionFullscreen();
        },

        // Dropdown submenu
        initDropdownSubmenu: function() {
            _dropdownSubmenu();
        },

        initHeaderElementsToggle: function() {
            _headerElements();
        },

        // Initialize core
        initCore: function() {
            App.initSidebars();
            App.initNavigations();
            App.initComponents();
            App.initCardActions();
            App.initDropdownSubmenu();
            App.initHeaderElementsToggle();
        }
    }
}();


// Initialize module
// ------------------------------

/*
// When content is loaded
document.addEventListener('DOMContentLoaded', function() {
    App.initBeforeLoad();
    App.initCore();
});

// When page is fully loaded
window.addEventListener('load', function() {
    App.initAfterLoad();
});
*/

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
        var elementSidebarSecondaryExists = document.getElementById("rg-sidebar-secondary-fixed-content-scroll");
        if (elementSidebarSecondaryExists) {
            //console.log('elementSidebarSecondaryExists')
            var psa = new PerfectScrollbar('#rg-sidebar-secondary-fixed-content-scroll', {
                wheelSpeed: 2,
                wheelPropagation: true
            });
            //console.log('FixedSidebarSecondaryFixedCustomScroll loaded. sss');
        }
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


/* ------------------------------------------------------------------------------
 *
 *  # Select2 selects
 *
 *  Specific JS code additions for form_select2.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Select2Selects = function() {


    //
    // Setup module components-
    //

    // Select2 examples
    var _componentSelect2 = function() {

        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }


        //
        // Basic examples
        //

        // Default initialization
        $('.select').select2({
            minimumResultsForSearch: Infinity
        });

        // Select with search
        $('.select-search').select2();

        // Fixed width. Single select
        $('.select-fixed-single').select2({
            minimumResultsForSearch: Infinity,
            width: 250
        });

        // Fixed width. Multiple selects
        $('.select-fixed-multiple').select2({
            minimumResultsForSearch: Infinity,
            width: 400
        });


        //
        // Advanced examples
        //

        // Minimum input length
        $('.select-minimum').select2({
            minimumInputLength: 2,
            minimumResultsForSearch: Infinity
        });

        // Allow clear selection
        $('.select-clear').select2({
            placeholder: 'Select a State',
            allowClear: true
        });

        // Tagging support
        $('.select-multiple-tags').select2({
            tags: true
        });

        // Maximum input length
        $('.select-multiple-maximum-length').select2({
            tags: true,
            maximumInputLength: 5
        });

        // Tokenization
        $('.select-multiple-tokenization').select2({
            tags: true,
            tokenSeparators: [',', ' ']
        });

        // Maximum selection
        $('.select-multiple-limited').select2({
            maximumSelectionLength: 3
        });

        // Maximum selections allowed
        $('.select-multiple-maximum').select2({
            maximumSelectionSize: 3
        });


        //
        // Drag and drop selected items
        //

        // Initialize with tags
        $('.select-multiple-drag').select2({
            containerCssClass: 'sortable-target'
        });

        // Add jQuery UI Sortable support
        $('.sortable-target .select2-selection__rendered').sortable({
            containment: '.sortable-target',
            items: '.select2-selection__choice:not(.select2-search--inline)'
        });


        //
        // Single select with icons
        //

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = '<i class="icon-' + $(icon.element).data('icon') + '"></i>' + icon.text;

            return $icon;
        }

        // Initialize with options
        $('.select-icons').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; }
        });


    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSelect2();
        }
    }
}();


/* ------------------------------------------------------------------------------
 *
 *  # Date and time pickers
 *
 *  Demo JS code for picker_date.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DateTimePickers = function() {


    //
    // Setup module components
    //

    // Daterange picker
    /*
    var _componentDaterange = function() {
        if (!$().daterangepicker) {
            console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.daterange-basic').daterangepicker({
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light'
        });

        // Display week numbers
        $('.daterange-weeknumbers').daterangepicker({
            showWeekNumbers: true,
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light'
        });

        // Button class options
        $('.daterange-buttons').daterangepicker({
            applyClass: 'btn-success',
            cancelClass: 'btn-danger'
        });

        // Display time picker
        $('.daterange-time').daterangepicker({
            timePicker: true,
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light',
            locale: {
                format: 'MM/DD/YYYY h:mm a'
            }
        });

        // Show calendars on left
        $('.daterange-left').daterangepicker({
            opens: 'left',
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light'
        });

        // Single picker
        $('.daterange-single').daterangepicker({
            singleDatePicker: true
        });

        // Display date dropdowns
        $('.daterange-datemenu').daterangepicker({
            showDropdowns: true,
            opens: 'left',
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light'
        });

        // 10 minute increments
        $('.daterange-increments').daterangepicker({
            timePicker: true,
            opens: 'left',
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light',
            timePickerIncrement: 10,
            locale: {
                format: 'MM/DD/YYYY h:mm a'
            }
        });

        // Localization
        $('.daterange-locale').daterangepicker({
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-light',
            opens: 'left',
            ranges: {
                'Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ': [moment(), moment()],
                'Ð’Ñ‡ÐµÑ€Ð°': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ 7 Ð´Ð½ÐµÐ¹': [moment().subtract(6, 'days'), moment()],
                'ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ 30 Ð´Ð½ÐµÐ¹': [moment().subtract(29, 'days'), moment()],
                'Ð­Ñ‚Ð¾Ñ‚ Ð¼ÐµÑÑÑ†': [moment().startOf('month'), moment().endOf('month')],
                'ÐŸÑ€Ð¾ÑˆÐµÐ´ÑˆÐ¸Ð¹ Ð¼ÐµÑÑÑ†': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                applyLabel: 'Ð’Ð¿ÐµÑ€ÐµÐ´',
                cancelLabel: 'ÐžÑ‚Ð¼ÐµÐ½Ð°',
                startLabel: 'ÐÐ°Ñ‡Ð°Ð»ÑŒÐ½Ð°Ñ Ð´Ð°Ñ‚Ð°',
                endLabel: 'ÐšÐ¾Ð½ÐµÑ‡Ð½Ð°Ñ Ð´Ð°Ñ‚Ð°',
                customRangeLabel: 'Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð´Ð°Ñ‚Ñƒ',
                daysOfWeek: ['Ð’Ñ', 'ÐŸÐ½', 'Ð’Ñ‚', 'Ð¡Ñ€', 'Ð§Ñ‚', 'ÐŸÑ‚','Ð¡Ð±'],
                monthNames: ['Ð¯Ð½Ð²Ð°Ñ€ÑŒ', 'Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ', 'ÐœÐ°Ñ€Ñ‚', 'ÐÐ¿Ñ€ÐµÐ»ÑŒ', 'ÐœÐ°Ð¹', 'Ð˜ÑŽÐ½ÑŒ', 'Ð˜ÑŽÐ»ÑŒ', 'ÐÐ²Ð³ÑƒÑÑ‚', 'Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ', 'ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ', 'ÐÐ¾ÑÐ±Ñ€ÑŒ', 'Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ'],
                firstDay: 1
            }
        });


        //
        // Pre-defined ranges and callback
        //

        // Initialize with options
        $('.daterange-predefined').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2014',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: 'left',
                applyClass: 'btn-sm bg-slate',
                cancelClass: 'btn-sm btn-light'
            },
            function(start, end) {
                $('.daterange-predefined span').html(start.format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + end.format('MMMM D, YYYY'));
                $.jGrowl('Date range has been changed', { header: 'Update', theme: 'bg-primary', position: 'center', life: 1500 });
            }
        );

        // Display date format
        $('.daterange-predefined span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + moment().format('MMMM D, YYYY'));


        //
        // Inside button
        //

        // Initialize with options
        $('.daterange-ranges').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: 'left',
                applyClass: 'btn-sm bg-slate-600',
                cancelClass: 'btn-sm btn-light'
            },
            function(start, end) {
                $('.daterange-ranges span').html(start.format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + end.format('MMMM D, YYYY'));
            }
        );

        // Display date format
        $('.daterange-ranges span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + moment().format('MMMM D, YYYY'));
    };
    */

    // Pickadate picker
    var _componentPickadate = function() {

        if (!$().pickadate) {
            console.warn('Warning - picker.js and/or picker.date.js is not loaded.');
            return;
        }

        // Basic options
        $('.pickadate').pickadate({
            format: 'yyyy-mm-dd',
            formatSubmit: 'yyyy-mm-dd'
        });

        // Change day names
        $('.pickadate-strings').pickadate({
            weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            showMonthsShort: true
        });

        // Button options
        $('.pickadate-buttons').pickadate({
            today: '',
            close: '',
            clear: 'Clear selection'
        });

        // Accessibility labels
        $('.pickadate-accessibility').pickadate({
            labelMonthNext: 'Go to the next month',
            labelMonthPrev: 'Go to the previous month',
            labelMonthSelect: 'Pick a month from the dropdown',
            labelYearSelect: 'Pick a year from the dropdown',
            selectMonths: true,
            selectYears: true
        });

        // Localization
        $('.pickadate-translated').pickadate({
            monthsFull: ['Janvier', 'FÃ©vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'AoÃ»t', 'Septembre', 'Octobre', 'Novembre', 'DÃ©cembre'],
            weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            today: 'aujourd\'hui',
            clear: 'effacer',
            formatSubmit: 'yyyy/mm/dd'
        });

        // Format options
        $('.pickadate-format').pickadate({

            // Escape any â€œruleâ€ characters with an exclamation mark (!).
            format: 'You selecte!d: dddd, dd mmm, yyyy',
            formatSubmit: 'yyyy/mm/dd',
            hiddenPrefix: 'prefix__',
            hiddenSuffix: '__suffix'
        });

        // Editable input
        var $input_date = $('.pickadate-editable').pickadate({
            editable: true,
            onClose: function() {
                $('.datepicker').focus();
            }
        });
        var picker_date = $input_date.pickadate('picker');
        $input_date.on('click', function(event) {
            if (picker_date.get('open')) {
                picker_date.close();
            } else {
                picker_date.open();
            }
            event.stopPropagation();
        });

        // Dropdown selectors
        $('.pickadate-selectors').pickadate({
            selectYears: true,
            selectMonths: true
        });

        // Year selector
        $('.pickadate-year').pickadate({
            selectYears: 4
        });

        // Set first weekday
        $('.pickadate-weekday').pickadate({
            firstDay: 1
        });

        // Date limits
        $('.pickadate-limits').pickadate({
            min: [2014,3,20],
            max: [2014,7,14]
        });

        // Disable certain dates
        $('.pickadate-disable').pickadate({
            disable: [
                [2015,8,3],
                [2015,8,12],
                [2015,8,20]
            ]
        });

        // Disable date range
        $('.pickadate-disable-range').pickadate({
            disable: [
                5,
                [2013, 10, 21, 'inverted'],
                { from: [2014, 3, 15], to: [2014, 3, 25] },
                [2014, 3, 20, 'inverted'],
                { from: [2014, 3, 17], to: [2014, 3, 18], inverted: true }
            ]
        });

        // Events
        $('.pickadate-events').pickadate({
            onStart: function() {
                console.log('Hello there :)')
            },
            onRender: function() {
                console.log('Whoa.. rendered anew')
            },
            onOpen: function() {
                console.log('Opened up')
            },
            onClose: function() {
                console.log('Closed now')
            },
            onStop: function() {
                console.log('See ya.')
            },
            onSet: function(context) {
                console.log('Just set stuff:', context)
            }
        });
    };

    // Pickatime picker
    /*
    var _componentPickatime = function() {
        if (!$().pickatime) {
            console.warn('Warning - picker.js and/or picker.time.js is not loaded.');
            return;
        }

        // Default functionality
        $('.pickatime').pickatime();

        // Clear button
        $('.pickatime-clear').pickatime({
            clear: ''
        });

        // Time formats
        $('.pickatime-format').pickatime({

            // Escape any â€œruleâ€ characters with an exclamation mark (!).
            format: 'T!ime selected: h:i a',
            formatLabel: '<b>h</b>:i <!i>a</!i>',
            formatSubmit: 'HH:i',
            hiddenPrefix: 'prefix__',
            hiddenSuffix: '__suffix'
        });

        // Send hidden value
        $('.pickatime-hidden').pickatime({
            formatSubmit: 'HH:i',
            hiddenName: true
        });

        // Editable input
        var $input_time = $('.pickatime-editable').pickatime({
            editable: true,
            onClose: function() {
                $('.datepicker').focus();
            }
        });
        var picker_time = $input_time.pickatime('picker');
        $input_time.on('click', function(event) {
            if (picker_time.get('open')) {
                picker_time.close();
            } else {
                picker_time.open();
            }
            event.stopPropagation();
        });

        // Time intervals
        $('.pickatime-intervals').pickatime({
            interval: 150
        });


        // Time limits
        $('.pickatime-limits').pickatime({
            min: [7,30],
            max: [14,0]
        });

        // Using integers as hours
        $('.pickatime-limits-integers').pickatime({
            disable: [
                3, 5, 7
            ]
        });

        // Disable times
        $('.pickatime-disabled').pickatime({
            disable: [
                [0,30],
                [2,0],
                [8,30],
                [9,0]
            ]
        });

        // Disabling ranges
        $('.pickatime-range').pickatime({
            disable: [
                1,
                [1, 30, 'inverted'],
                { from: [4, 30], to: [10, 30] },
                [6, 30, 'inverted'],
                { from: [8, 0], to: [9, 0], inverted: true }
            ]
        });

        // Disable all with exeption
        $('.pickatime-disableall').pickatime({
            disable: [
                true,
                3, 5, 7,
                [0,30],
                [2,0],
                [8,30],
                [9,0]
            ]
        });

        // Events
        $('.pickatime-events').pickatime({
            onStart: function() {
                console.log('Hello there :)')
            },
            onRender: function() {
                console.log('Whoa.. rendered anew')
            },
            onOpen: function() {
                console.log('Opened up')
            },
            onClose: function() {
                console.log('Closed now')
            },
            onStop: function() {
                console.log('See ya.')
            },
            onSet: function(context) {
                console.log('Just set stuff:', context)
            }
        });
    };
    */

    // Anytime picker
    /*
    var _componentAnytime = function() {
        if (!$().AnyTime_picker) {
            console.warn('Warning - anytime.min.js is not loaded.');
            return;
        }

        // Basic usage
        $('#anytime-date').AnyTime_picker({
            format: '%W, %M %D in the Year %z %E',
            firstDOW: 1
        });

        // Time picker
        $('#anytime-time').AnyTime_picker({
            format: '%H:%i'
        });

        // Display hours only
        $('#anytime-time-hours').AnyTime_picker({
            format: '%l %p'
        });

        // Date and time
        $('#anytime-both').AnyTime_picker({
            format: '%M %D %H:%i',
        });

        // Custom display format
        $('#anytime-weekday').AnyTime_picker({
            format: '%W, %D of %M, %Z'
        });

        // Numeric date
        $('#anytime-month-numeric').AnyTime_picker({
            format: '%d/%m/%Z'
        });

        // Month and day
        $('#anytime-month-day').AnyTime_picker({
            format: '%D of %M'
        });

        // On demand picker
        $('#ButtonCreationDemoButton').on('click', function (e) {
            $('#ButtonCreationDemoInput').AnyTime_noPicker().AnyTime_picker().focus();
            e.preventDefault();
        });


        //
        // Date range
        //

        // Options
        var oneDay = 24*60*60*1000;
        var rangeDemoFormat = '%e-%b-%Y';
        var rangeDemoConv = new AnyTime.Converter({format:rangeDemoFormat});

        // Set today's date
        $('#rangeDemoToday').on('click', function (e) {
            $('#rangeDemoStart').val(rangeDemoConv.format(new Date())).trigger('change');
        });

        // Clear dates
        $('#rangeDemoClear').on('click', function (e) {
            $('#rangeDemoStart').val('').trigger('change');
        });

        // Start date
        $('#rangeDemoStart').AnyTime_picker({
            format: rangeDemoFormat
        });

        // On value change
        $('#rangeDemoStart').on('change', function(e) {
            try {
                var fromDay = rangeDemoConv.parse($('#rangeDemoStart').val()).getTime();

                var dayLater = new Date(fromDay+oneDay);
                dayLater.setHours(0,0,0,0);

                var ninetyDaysLater = new Date(fromDay+(90*oneDay));
                ninetyDaysLater.setHours(23,59,59,999);

                // End date
                $('#rangeDemoFinish')
                    .AnyTime_noPicker()
                    .removeAttr('disabled')
                    .val(rangeDemoConv.format(dayLater))
                    .AnyTime_picker({
                        earliest: dayLater,
                        format: rangeDemoFormat,
                        latest: ninetyDaysLater
                    });
            }

            catch(e) {

                // Disable End date field
                $('#rangeDemoFinish').val('').attr('disabled', 'disabled');
            }
        });
    };
    */

    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            //_componentDaterange();
            _componentPickadate();
            //_componentPickatime();
            //_componentAnytime();
        }
    }
}();


/* ------------------------------------------------------------------------------
 *
 *  # Checkboxes and radios
 *
 *  Demo JS code for form_checkboxes_radios.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsCheckboxesRadios = function () {


    //
    // Setup components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-check-input-styled').uniform();


        //
        // Contextual colors
        //

        // Primary
        $('.form-check-input-styled-primary').uniform({
            wrapperClass: 'border-primary-600 text-primary-800'
        });

        // Danger
        $('.form-check-input-styled-danger').uniform({
            wrapperClass: 'border-danger-600 text-danger-800'
        });

        // Success
        $('.form-check-input-styled-success').uniform({
            wrapperClass: 'border-success-600 text-success-800'
        });

        // Warning
        $('.form-check-input-styled-warning').uniform({
            wrapperClass: 'border-warning-600 text-warning-800'
        });

        // Info
        $('.form-check-input-styled-info').uniform({
            wrapperClass: 'border-info-600 text-info-800'
        });

        // Custom color
        $('.form-check-input-styled-custom').uniform({
            wrapperClass: 'border-indigo-600 text-indigo-800'
        });
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

var InputsSwitchery = function () {


    //
    // Setup components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-check-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });

        // Colored switches
        var primary = document.querySelector('.form-check-input-switchery-primary');
        var switchery = new Switchery(primary, { color: '#2196F3' });

        var danger = document.querySelector('.form-check-input-switchery-danger');
        var switchery = new Switchery(danger, { color: '#EF5350' });

        var warning = document.querySelector('.form-check-input-switchery-warning');
        var switchery = new Switchery(warning, { color: '#FF7043' });

        var info = document.querySelector('.form-check-input-switchery-info');
        var switchery = new Switchery(info, { color: '#00BCD4'});
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
        }
    }
}();

var InputsBootstrapSwitch = function () {


    //
    // Setup components
    //

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-check-input-switch').bootstrapSwitch();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentBootstrapSwitch();
        }
    }
}();

// Setup module
// ------------------------------

var InputsBasic = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // File input
        $('.form-control-uniform').uniform();

        // Custom select
        $('.form-control-uniform-custom').uniform({
            fileButtonClass: 'action btn bg-blue',
            selectClass: 'uniform-select bg-pink-400 border-pink-400'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
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
    //InputsBasic.init();
    //Select2Selects.init(); //initiated in component mounted() when needed
    //DateTimePickers.init();
    //InputsCheckboxesRadios.initComponents();
});


String.prototype.UpperCaseFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

rg_round = function(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

rg_number = function(value) {

    if (isNaN(value)) {
        value = 0;
    }
    
    var v = rg_number_format(value, 5, '.', ''); //Maximum of 5 decimal places 
    
    return new Number(v);
    //return round(Value, 0); //Alwaya round off to zero decimal places
}

rg_amount_in_words = function(n) {

    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';

    /* Is number zero? */
    if( parseInt( string ) === 0 ) {
        return 'zero';
    }

    /* Array of units as words */
    units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

    /* Array of tens as words */
    tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    /* Array of scales as words */
    scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while( start > 0 ) {
        end = start;
        chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for( i = 0; i < chunksLen; i++ ) {

        chunk = parseInt( chunks[i] );

        if( chunk ) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split( '' ).reverse().map( parseFloat );

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if( ints[1] === 1 ) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if( ( word = scales[i] ) ) {
                words.push( word );
                //words.push( word + ',' );
            }

            /* Add unit word if array item exists */
            if( ( word = units[ ints[0] ] ) ) {
                words.push( word );
            }

            /* Add tens word if array item exists */
            if( ( word = tens[ ints[1] ] ) ) {
                words.push( word );
            }

            /* Add 'and' string after units or tens integer if: */
            if( ints[0] || ints[1] ) {

                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if( ints[2] || ! i && chunksLen ) {
                    words.push( and );
                }

            }

            /* Add hundreds word if array item exists */
            if( ( word = units[ ints[2] ] ) ) {
                words.push( word + ' hundred' );
            }

        }

    }
    
    _Words_ = words.reverse().join( ' ' );
    return _Words_[0].toUpperCase() + _Words_.slice(1);

}

rg_time = function() {
    //  discuss at: http://phpjs.org/functions/time/
    // original by: GeekFG (http://geekfg.blogspot.com)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: metjay
    // improved by: HKM
    //   example 1: timeStamp = time();
    //   example 1: timeStamp > 1000000000 && timeStamp < 2000000000
    //   returns 1: true

    return Math.floor(new Date()
        .getTime() / 1000);
}

rg_empty = function(mixed_var) {
    //  discuss at: http://phpjs.org/functions/empty/
    // original by: Philippe Baumann
    //    input by: Onno Marsman
    //    input by: LH
    //    input by: Stoyan Kyosev (http://www.svest.org/)
    // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Onno Marsman
    // improved by: Francesco
    // improved by: Marc Jansen
    // improved by: Rafal Kukawski
    //   example 1: empty(null);
    //   returns 1: true
    //   example 2: empty(undefined);
    //   returns 2: true
    //   example 3: empty([]);
    //   returns 3: true
    //   example 4: empty({});
    //   returns 4: true
    //   example 5: empty({'aFunc' : function () { alert('humpty'); } });
    //   returns 5: false

    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, '', '0'];

    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixed_var === emptyValues[i]) {
            return true;
        }
    }

    if (typeof mixed_var === 'object') {
        for (key in mixed_var) {
            // TODO: should we check for own properties only?
            //if (mixed_var.hasOwnProperty(key)) {
            return false;
            //}
        }
        return true;
    }
    return false;
}

rg_debug = function(text) {
    var debug = false;
    try {
        debug = localStorage.getItem("debug");
    } catch (err) {}
    if (debug == 'true') {
        console.log(text);
    }
}

rg_str_to_number = function(value) {
    var v = value.replace(/[^\d.-]/g, '');
    return rg_number(v);
}

rg_number_format = function(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +      input by: Amirouche
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    // *    example 13: number_format('1 000,50', 2, '.', ' ');
    // *    returns 13: '100 050.00'
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

rg_thousand_separate = function() {

    if (arguments.length == 1) {
        var V = arguments[0].value;
        V = V.replace(/,/g, '');
        var R = new RegExp('(-?[0-9]+)([0-9]{3})');
        while (R.test(V)) {
            V = V.replace(R, '$1,$2');
        }
        arguments[0].value = V;
    } else if (arguments.length == 2) {
        var V = document.getElementById(arguments[0]).value;
        var R = new RegExp('(-?[0-9]+)([0-9]{3})');
        while (R.test(V)) {
            V = V.replace(R, '$1,$2');
        }
        document.getElementById(arguments[1]).innerHTML = V;
    } else return false;
}

rg_nl2br = function(str, is_xhtml) {
    //  discuss at: http://phpjs.org/functions/nl2br/
    // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Philip Peterson
    // improved by: Onno Marsman
    // improved by: Atli Þór
    // improved by: Brett Zamir (http://brett-zamir.me)
    // improved by: Maximusya
    // bugfixed by: Onno Marsman
    // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    //    input by: Brett Zamir (http://brett-zamir.me)
    //   example 1: nl2br('Kevin\nvan\nZonneveld');
    //   returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
    //   example 2: nl2br("\nOne\nTwo\n\nThree\n", false);
    //   returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
    //   example 3: nl2br("\nOne\nTwo\n\nThree\n", true);
    //   returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'

    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display

    return (str + '')
        .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

rg_date_diff = function(pivot, date) {
    //pivot = Pivot Date e.g. expirty, date = other date
    //Negative value means date is before pivot date
    //Positive value means date is greator than pivot date.

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var pivot_ms = Date.parse(pivot); // pivot.getTime();
    var date_ms = Date.parse(date); //date.getTime();

    // Calculate the difference in milliseconds
    //var difference_ms = Math.abs(pivot_ms - date_ms);
    var difference_ms = date_ms - pivot_ms;

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY);
}

rg_is_decimal = function(Number) {
    return (Number % 1 == 0 ? false : true);
}

rg_toggle_full_screen = function (elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

rg_copy_to_clipboard = function(text) {
    // Copies a string to the clipboard. Must be called from within an
    // event handler such as click. May return false if it failed, but
    // this is not always possible. Browser support for Chrome 43+,
    // Firefox 42+, Safari 10+, Edge and IE 10+.
    // IE: The clipboard feature may be disabled by an administrator. By
    // default a prompt is shown the first time the clipboard is
    // used (per session).

    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

rg_auto_grow = function (element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

//>>generate the FormData
rgFormDataNullFix = function(value) {
    if (value === null) {
        return '';
    }
    else {
        return value;
    }
}
rgFormDataIterator = function(formData, _object_, _namePrefix_) {
    // console.log('formDataIterator:: ')
    // console.log('_namePrefix_', _namePrefix_)
    // console.log('#0', _object_)

    if (Array.isArray(_object_)) {
        // console.log('#1', _object_[key])
        _object_.forEach((item, index) => {
            // console.log('#2', item);
            //if item id object or array iterator
            if (typeof item == 'object' || Array.isArray(item)) {
                if (_namePrefix_ === '') {
                    return rgFormDataIterator(formData, item, key + '[]')
                }
                else {
                    return rgFormDataIterator(formData, item, _namePrefix_ + '['+key+']' + '[]')
                }
            } else {
                formData.append(_namePrefix_ + '['+key+']' + '[]', rgFormDataNullFix(item))
            }
        })
    }
    else if (typeof _object_ == 'object') {

        Object.keys(_object_).forEach((key) => {
            // console.log('#3', _object_[key])
            if (_object_[key] === null) {
                if (_namePrefix_ === '') {
                    formData.append(key, rgFormDataNullFix(_object_[key]))
                }
                else {
                    formData.append(_namePrefix_ + '[' + key + ']', rgFormDataNullFix(_object_[key]))
                }
            }
            else if (Array.isArray(_object_[key])) {
                // console.log('#4', _object_[key])
                _object_[key].forEach((item, index) => {
                    // console.log('#5', item)
                    //if item id object or array iterator
                    if (typeof item == 'object' || Array.isArray(item)) {
                        // console.log('#6', item)
                        if (_namePrefix_ === '') {
                            return rgFormDataIterator(formData, item, key + '[' + index + ']')
                        }
                        else {
                            return rgFormDataIterator(formData, item, _namePrefix_ + '[' + key + ']' + '[' + index + ']')
                        }
                    } else {
                        // console.log('#7', item)
                        if (_namePrefix_ === '') {
                            formData.append(key + '[' + index + ']', rgFormDataNullFix(item))
                        }
                        else {
                            formData.append(_namePrefix_ + '[' + key + '][' + index + ']', rgFormDataNullFix(item))
                        }
                    }
                })
            }
            else if (typeof _object_[key] == 'object') {
                // console.log('#8', _object_[key])
                if (_namePrefix_ === '') {
                    return rgFormDataIterator(formData, _object_[key], key)
                }
                else {
                    return rgFormDataIterator(formData, _object_[key], _namePrefix_ + '[' + key + ']')
                }
            }
            else {
                // console.log('#9 ----- ')
                // console.log('#9', _object_[key])
                // console.log('#9: key: ', key)
                // console.log('#9: _namePrefix_: ', _namePrefix_)
                // console.log('#9 ----- ')
                if (_namePrefix_ === '')
                {
                    formData.append(key, rgFormDataNullFix(_object_[key]))
                }
                else {
                    formData.append(_namePrefix_ + '[' + key + ']', rgFormDataNullFix(_object_[key]))
                }
            }
        })

    }
    else {
        console.log('this is not allowed')
    }

}
rgFormData = function(payload) {

    // console.log(this.payload);
    let formData = new FormData();

    // formData.append('_token', this.$root.csrf_token.content);

    rgFormDataIterator(formData, payload, '');
    return formData;

}
//<<generate the FormData







