<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{env('APP_NAME')}} @yield('title')</title>

    <base href="{{ url('template/l/layout_2-ltr-default') }}/">

    <!-- Global stylesheets -->
    {{--<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">--}}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet">
    <link href="../global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <!-- /global stylesheets -->

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Core JS files -->
    <script src="js/core.js" defer></script>
    @yield('core_js')
<!-- /core JS files -->

    <!-- Theme JS files -->
    <script src="js/theme.js" defer></script>
    @yield('theme_js')

    <script src="js/scripts.js" defer></script>
@yield('page_js')
<!-- /theme JS files -->

</head>

<body class="navbar-top sidebar-right-visible bg-transparent">

    <div id="app" class="h-100">

        <form ref="form-logout" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>

        <!-- Main navbar -->
        <main-navbar></main-navbar>
        <!-- /main navbar -->


        <!-- Page content -->
        <div class="page-content" style="min-height: 95vh;">

            <!-- Main sidebar -->
            <main-sidebar></main-sidebar>
            <!-- /main sidebar -->

            <router-view name="sidebar-left"></router-view>

{{--            <loading v-if="$root.loading"></loading>--}}

            <router-view></router-view>

            <non-router-view v-if="$route.name === 'any-other-link'"  inline-template>
                <div id="content-wrapper" class="content-wrapper">
                    are we now in class #########<br>
                    this seems real
                </div>
            </non-router-view>

            <router-view name="sidebar-right"></router-view>

        </div>
        <!-- /page content -->

    </div>

    <style>
        .width-270px {
            width: 270px !important;
        }

        .width-56px {
            width: 56px !important;
        }

        .ui-pnotify {
            width: 600px !important;
        }
    </style>

    {{--
    <script>
        jQuery(document).ready(function() {
            jQuery('.sidebar-secondary').perfectScrollbar();
        });
    </script>
    --}}

</body>
</html>
