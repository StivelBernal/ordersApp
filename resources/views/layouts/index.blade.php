<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title')</title>
  <link rel="stylesheet" href="{{ mix("css/app.css") }}">
</head>
<body>

  @include('partials.header')
  
  <div class="content-wrapper">
    {{-- content --}}
    <div class="content-wrapper-view">
      @yield('contentIndex')
    </div>

    <div class="content-wrapper-bg"></div>
  </div>

  @include('partials.footer')

  
  <script src="{{ mix("js/app.js") }}"></script>
</body>
</html>