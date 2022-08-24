<?php

declare(strict_types=1);

namespace Rutatiina\UI\Http\Controllers;

use App\Http\Controllers\Controller;
use Orchid\Attachment\MimeTypes;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Illuminate\Support\Facades\File;

/**
 * Class ResourceController.
 */
class ResourceController extends Controller
{
    /**
     * @var MimeTypes
     */
    private $mimeTypes;

    /**
     * @var Finder
     */
    private $finder;

    /**
     * ResourceController constructor.
     *
     * @param MimeTypes $mimeTypes
     * @param Finder    $finder
     */
    public function __construct(MimeTypes $mimeTypes, Finder $finder)
    {
        $this->mimeTypes = $mimeTypes;
        $this->finder = $finder;
    }

    /**
     * Serve the requested resource.
     *
     * @param string    $package
     * @param string    $path
     * @param Dashboard $dashboard
     *
     * @return BinaryFileResponse
     */
    public function show(string $package, string $path)
    {
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
