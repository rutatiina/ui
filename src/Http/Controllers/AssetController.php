<?php

declare(strict_types=1);

namespace Rutatiina\UI\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Finder;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Finder\SplFileInfo;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Class ResourceController.
 */
class AssetController extends Controller
{
    public function show()
    {
        //return __DIR__.'/../../resources/public/0.js';
        $filePathAndName = __DIR__.'/../../resources/public/css/app.css';
        $filePathAndName = __DIR__.'/../../resources/public/images/image.png';
        $mime = File::mimeType($filePathAndName);
        return response()->file($filePathAndName, [
            'Content-Type'  => $mime ?? 'text/plain',
            'Cache-Control' => 'public, max-age=31536000',
        ]);


        //Storage::readStream()


        /* Changing the separator for Windows operating systems */
        $path = str_replace('/', DIRECTORY_SEPARATOR, $path);

        $resource_path = resource_path('views/fusion-opl/assets/'.$package.'/'.$path);

        //return var_dumP(File::exists($file));

        /*
        $dir = $dashboard
            ->getPublicDirectory()
            ->get($package);

        abort_if($dir === null, 404);

        $resources = $this->finder
            ->ignoreUnreadableDirs()
            ->followLinks()
            ->in($dir)
            ->files()
            ->path(dirname($path))
            ->name(basename($path));

        $iterator = tap($resources->getIterator())->rewind();

        // Changing the separator for Windows operating systems
        $path = str_replace('/', DIRECTORY_SEPARATOR, $path);
        */

        $SplFileInfo = (new SplFileInfo($resource_path, resource_path('views/fusion-opl/assets/'.$package), resource_path('views/fusion-opl/assets/'.$package.'/'.$path)));

        $resource = collect([$SplFileInfo])
            ->filter(static function (SplFileInfo $file) use ($resource_path) {
                return $file->getRelativePathname() === $resource_path;
            })
            ->first();

        abort_if($resource === null, 404);

        $mime = $this->mimeTypes->getMimeType($resource->getExtension());

        return response()->file($resource->getRealPath(), [
            'Content-Type'  => $mime ?? 'text/plain',
            'Cache-Control' => 'public, max-age=31536000',
        ]);
    }
}
