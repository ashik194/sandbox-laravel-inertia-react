<?php

use App\Http\Middleware\AdminCheck;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\ClientCheck;
use App\Http\Middleware\ClientMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'admin' => AdminMiddleware::class,
            'client' => ClientMiddleware::class,
            'admincheck' => AdminCheck::class,
            'clientcheck' => ClientCheck::class,
        ]);
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        //
    })
    
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
