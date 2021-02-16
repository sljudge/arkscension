@extends('layouts.app')

@section('csrf')
<meta name="csrf-token" content="{{csrf_token()}}">
@endsection

@section('content')

<div id="editorjs"></div>

<script type='module' src="{{mix('js/editor.js')}}"></script>

@endsection