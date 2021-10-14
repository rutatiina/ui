<?php

namespace Rutatiina\UI;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\DB;
use Rutatiina\Tenant\Http\Middleware\TenantMiddleware;

class UIServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/routes.php');

        $this->loadViewsFrom(__DIR__.'/resources/views/limitless-bs4', 'ui.limitless');
        $this->publishes([__DIR__.'/resources/public' => public_path('/')], 'rutatiina/ui');
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //$this->app->make('Rutatiina\UI\Http\Controllers\UIController');
    }
}
