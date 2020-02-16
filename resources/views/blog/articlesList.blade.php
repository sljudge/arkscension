@extends('layouts/admin')

@section('admin')

{{-- {{dd($articles)}} --}}

@foreach ($articles as $article)

<div class='blog-list-item'>
    <a href={{action('BlogArticleController@edit', $article->id)}}>
        <h2>{{$article->title}}</h2>
    </a>
    {{$article->updated_at}}
</div>

@endforeach

@endsection