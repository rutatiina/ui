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
    <link href="../global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="js/core_guest.js" defer></script>
    <!-- /core JS files -->

</head>

<body>


    <!-- Page content -->
    <div id="app" class="page-content bg-dark">

        <!-- Main content -->
        <div class="content-wrapper">

            <!-- Content area -->
            <div class="content d-flex justify-content-center align-items-center">

                <!-- Password recovery form -->
                <form method="POST" action="{{ route('password.update') }}">
                    @csrf

                    <input type="hidden" name="token" value="{{ $token }}">

                    <div class="card mb-0 bg-transparent border-0 shadow-0">
                        <div class="card-body">
                            <div class="text-center mb-3">
                                <i class="icon-lock icon-2x text-warning border-warning border-0 rounded-round p-3 mb-3 mt-1"></i>
                                <h5 class="mb-0">{{ __('Reset Password') }}</h5>
                                <span class="d-block text-muted">Enter you new password</span>
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input id="email" type="email"
                                       class="form-control  @error('email') border-danger border-2 @enderror"
                                       name="email" value="{{ $email ?? old('email') }}"
                                       required autocomplete="email" autofocus>
                                <div class="form-control-feedback">
                                    <i class="icon-mention text-muted"></i>
                                </div>
                                @error('email')
                                <span class="form-text text-danger"><i class="icon-cancel-circle2 mr-2"></i> {{ $message }}</span>
                                @enderror
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="password"
                                       class="form-control  @error('password') border-danger border-2 @enderror"
                                       name="password"
                                       required autocomplete="new-password"
                                       placeholder="{{ __('Password') }}">
                                <div class="form-control-feedback">
                                    <i class="icon-user-lock text-muted"></i>
                                </div>
                                @error('password')
                                <span class="form-text text-danger"><i class="icon-cancel-circle2 mr-2"></i> {{ $message }}</span>
                                @enderror
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="password"
                                       class="form-control  @error('email') border-danger border-2 @enderror"
                                       name="password_confirmation"
                                       required autocomplete="email" autofocus
                                       placeholder="{{ __('Confirm Password') }}">
                                <div class="form-control-feedback">
                                    <i class="icon-user-lock text-muted"></i>
                                </div>
                            </div>

                            <button type="submit" class="btn bg-blue btn-block"><i class="icon-lock mr-2"></i> {{ __('Reset Password') }}</button>
                        </div>
                    </div>
                </form>
                <!-- /password recovery form -->

            </div>
            <!-- /content area -->


            <!-- Footer -->

            <!-- /footer -->

        </div>
        <!-- /main content -->

    </div>
    <!-- /page content -->

</body>
</html>
