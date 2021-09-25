@if ($errors->any() || session('success'))
    <div class="mb-4"></div>
@endif

@if ($errors->any())
    @foreach ($errors->all() as $error)
        <div class="alert bg-danger text-white alert-styled-left alert-dismissible">
            <button type="button" class="close" data-dismiss="alert"><span>×</span></button>
            {{ $error }}
        </div>
    @endforeach

@endif

@if (session('success'))
    <div class="alert bg-success text-white alert-styled-left alert-dismissible">
        <button type="button" class="close" data-dismiss="alert"><span>×</span></button>
        {{ session('success') }}
    </div>
@endif

@if ($errors->any() || session('success'))
    <div class="mb-4"></div>
@endif