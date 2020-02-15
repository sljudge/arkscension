@extends('layouts/admin')

@section('admin')

{{-- {{dd($articles)}} --}}

@foreach ($articles as $article)

<div class='blogListItem'>
    <a href={{action('BlogArticleController@show', $article->id)}}>
        <h2>{{$article->title}}</h2>
    </a>
    {{$article->updated_at}}
</div>

@endforeach

@endsection