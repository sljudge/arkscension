<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://kit.fontawesome.com/2af9b70016.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <title>Arkscension</title>

  <style>
    * {
      box-sizing: border-box;
    }

    html {
      margin: 0;
      padding: 0;
      font-size: 15px;
      font-family: 'Roboto', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      min-width: 100vw;
      max-width: 100vw;
      background-color: rgba(0,0,0,0.2);
      text-rendering: optimizeLegibility;
    }

    .container {
        padding: 2rem;
    }
  </style>

</head>

<body>

    @include('inc/nav')
    @include('inc/messages')

    <div class='container'>

        @yield('admin')
        
    </div>


</body>

</html>