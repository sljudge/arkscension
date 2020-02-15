@extends('layouts/admin')

@section('admin')

<?php
    $content = [];
?>

<form method="POST" action="{{action('BlogArticleController@store')}}" enctype="multipart/form-data">

    @csrf

    <input class='blog-title-input' name='title' type='text' value="{{$article->title ?? 'title'}}"/>

    @foreach ($article->texts as $text)

        <textarea name='content' class='blog-text-area'>
            {{$text->content}}
        </textarea>

    @endforeach

    <button class='blog-article-submit-btn' type='submit'>
        Submit Changes
    </button>

</form>

@endsection