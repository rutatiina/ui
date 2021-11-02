<!DOCTYPE html>
<html lang="en">
<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <base href="{{ url('template/l/layout_2-ltr-default') }}/">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{env('APP_NAME')}}</title>

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
<div id="app" class="page-content">

    <!-- Main content -->
    <div class="content-wrapper">

        <!-- Content area -->
        <div class="content d-flex p-0 ">

            <div class="row">
                <div class="col d-flex justify-content-center align-items-center bg-dark" style="min-width: 380px;max-width: 450px;">
                    <!-- Login card -->
                    <form class="login-form" action="{{ route('login') }}" method="post">
                        @csrf
                        <div class="card-body">
                            <div class="text-center mb-3">
                                <i class="icon-stats-bars2 icon-2x rounded-round p-3 mb-3 mt-1"></i>
                                <h5 class="mb-0">Login to your account</h5>
                                <span class="d-block text-muted">Your credentials</span>
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="text"
                                       class="form-control border-0 {{ $errors->has('email') ? 'border-danger' : '' }}"
                                       placeholder="Email"
                                       name="email"
                                       value="{{ old('email') }}" required>
                                <div class="form-control-feedback">
                                    <i class="icon-user text-muted"></i>
                                </div>
                                @if($errors->has('email'))
                                    <label id="username-error" class="validation-invalid-label" for="username">{{$errors->first('email')}}</label>
                                @endif
                            </div>

                            <div class="form-group form-group-feedback form-group-feedback-left">
                                <input type="password"
                                       class="form-control border-0 {{ $errors->has('password') ? 'border-danger' : '' }}"
                                       placeholder="Password"
                                       name="password" required>
                                <div class="form-control-feedback">
                                    <i class="icon-lock2 text-muted"></i>
                                </div>
                            </div>

                            <div class="form-group d-flex align-items-center">
                                <div class="form-check mb-0">
                                    <label class="form-check-label">
                                        <input type="checkbox" name="remember" class="form-input-styled" checked data-fouc>
                                        Remember
                                    </label>
                                </div>

                                <a href="{{ route('password.request') }}" class="ml-auto">Forgot password?</a>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Sign in<i class="icon-circle-right2 ml-2"></i></button>
                            </div>

                            {{--
                            <div class="form-group text-center text-muted content-divider">
                                <span class="px-2">or sign in with</span>
                            </div>

                            <div class="form-group text-center">
                                <button type="button" class="btn btn-outline bg-indigo border-indigo text-indigo btn-icon rounded-round border-2"><i class="icon-facebook"></i></button>
                                <button type="button" class="btn btn-outline bg-pink-300 border-pink-300 text-pink-300 btn-icon rounded-round border-2 ml-2"><i class="icon-dribbble3"></i></button>
                                <button type="button" class="btn btn-outline bg-slate-600 border-slate-600 text-slate-600 btn-icon rounded-round border-2 ml-2"><i class="icon-github"></i></button>
                                <button type="button" class="btn btn-outline bg-info border-info text-info btn-icon rounded-round border-2 ml-2"><i class="icon-twitter"></i></button>
                            </div>
                            --}}

                            <div class="form-group text-center text-muted content-divider">
                                <span class="px-2 bg-dark">Don't have an account?</span>
                            </div>

                            <div class="form-group">
                                <a href="/register" class="btn btn-dark btn-block border-light">Sign up now</a>
                            </div>

                            <span class="form-text text-center text-muted">
                                By continuing, you're confirming that you've read our
                                <a href="#">Terms &amp; Conditions</a> and
                                <a href="#">Cookie Policy</a>
                            </span>
                        </div>
                    </form>
                    <!-- /login card -->
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

</body>
</html>
