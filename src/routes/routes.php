<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['web']], function() {
    Route::prefix('docs')->group(function () {
        Route::get('/', 'DocsController@index')->name('docs.index');
    });
});

Route::group(['middleware' => ['web', 'auth']], function() {

    //line bellow to be deleted after fully moving to vue
    Route::get('datatables/empty', 'DatatableController@empty')->name('datatables.empty');

});


Route::group(['middleware' => ['web', 'auth', 'tenant']], function() {

    Route::get('/app', function () {
        return view('ui.limitless::layout_2-ltr-default.appVue');
    });

    Route::resource('api', 'ApiController');

    # ui routes-------------------------
    Route::get('ui/menu/{menuName}', 'Rutatiina\UI\Http\Controllers\MenuController@menu');
    # /ui routes-------------------------

    //> load vue ui on refresh for any settings link
    Route::get('ui/menu/{menuName}', 'Rutatiina\UI\Http\Controllers\MenuController@menu');
    //< ***

});


Route::get('external-assets', 'Rutatiina\UI\Http\Controllers\AssetController@show');

//http://qbuks.test/laravel_mix/js/template/scripts.js
Route::get('web/assets/{one?}/{two?}/{three?}', 'Rutatiina\UI\Http\Controllers\AssetController@templateAssets');