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
        $this->loadViewsFrom(__DIR__.'/resources/views/limitless-bs4', 'ui.limitless');
        $this->publishes([__DIR__.'/resources/public/template/l' => public_path('template/l')], 'rutatiina/ui/limitless');
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
