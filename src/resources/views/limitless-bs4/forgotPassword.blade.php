<!DOCTYPE html>
<html lang="en">
<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <base href="{{ url('template/l/layout_2-ltr-default') }}/">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Accounting</title>

    <!-- Global stylesheets -->
    <!--<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet">
    <link href="/web/assets/template/l/global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
    <link href="{{ rgMix('/css/template/styles.css') }}" rel="stylesheet" type="text/css">
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="{{ rgMix('/js/template/core_guest.js') }}" defer></script>
    <!-- /core JS files -->

</head>

<body>


<!-- Page content -->
<div id="app" class="page-content">

    <!-- Main content -->
    <div class="content-wrapper">

        <!-- Content area -->
        <div class="content d-flex p-0 ">

            <div class="row">
                <div class="col d-flex justify-content-center align-items-center bg-dark" style="min-width: 380px;max-width: 450px;">

                    <!-- Password recovery form -->
                    <form class="login-form" action="{{ route('password.email') }}" method="post">
                        @csrf
                        <div class="card bg-transparent border-0 shadow-0 mb-0">
                            <div class="card-body">
                                <div class="text-center mb-3">
                                    <i class="icon-spinner11 icon-2x text-warning border-warning border-0 rounded-round p-3 mb-3 mt-1"></i>
                                    <h5 class="mb-0">Password recovery</h5>
                                    <span class="d-block text-muted">We'll send you instructions in email</span>
                                </div>

                                <div class="form-group form-group-feedback form-group-feedback-right">
                                    <input type="email" name="email"
                                           class="form-control  @error('email') border-danger border-2 @enderror"
                                           placeholder="{{ __('E-Mail Address') }}">
                                    <div class="form-control-feedback">
                                        <i class="icon-mail5 text-muted"></i>
                                    </div>
                                    @error('email')
                                    <span class="form-text text-danger"><i class="icon-cancel-circle2 mr-2"></i> {{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> {{ __('Send Password Reset Link') }}</button>
                                </div>

                                <div class="form-group text-center text-muted content-divider">
                                    <span class="px-2 bg-dark">Already have an account?</span>
                                </div>

                                <div class="form-group">
                                    <a href="/" class="btn btn-dark btn-block border-light">Sign in now</a>
                                </div>

                            </div>
                        </div>
                    </form>
                    <!-- /password recovery form -->

                </div>
                <div class="col-auto d-flex justify-content-center align-items-center" style="min-width: 960px;max-width: 1280px">

                    <div class="d-block">
                        <div class="row">
                            <div class="d-block" style="font-size: 150%">Simplified</div>
                        </div>
                        <div class="row">
                            <div class="d-block font-weight-bolder" style="font-size: 500%">Accounting</div>
                        </div>
                        <div class="row">
                            <div class="d-block font-weight-bold" style="font-size: 150%">Invoicing, Billing, Expenses ...</div>
                        </div>
                    </div>


                </div>
            </div>



        </div>
        <!-- /content area -->


        <!-- Footer -->

        <!-- /footer -->

    </div>
    <!-- /main content -->

</div>
<!-- /page content -->

<script>

    var LoginRegistration = function () {


        //
        // Setup module components
        //

        // Uniform
        var _componentUniform = function() {
            if (!$().uniform) {
                console.warn('Warning - uniform.min.js is not loaded.');
                return;
            }

            // Initialize
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


    // Initialize module
    // ------------------------------

    document.addEventListener('DOMContentLoaded', function() {
        LoginRegistration.initComponents();
    });

</script>

</body>
</html>
