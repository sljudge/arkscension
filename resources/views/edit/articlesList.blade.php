@extends('layouts/admin')

@section('admin')

{{-- {{dd($articles)}} --}}

<a href={{action('BlogArticleController@create')}} >
    <div class='blog-list-item' style="background-image: url({{url('/img/logo.svg')}})">
        <div class='blog-list-item-details'>
            <h2>New Blog Article</h2>
            <span class="add-icon"><i class="fas fa-plus-circle"></i></span>
        </div>
    </div>
</a>


@foreach ($articles as $article)
    <a href={{action('BlogArticleController@edit', $article->id)}} >
        <div class='blog-list-item' style="background-image: url({{url($article->item_photo_path)}})">
            <div class='blog-list-item-details'>
                <h2>{{$article->title}}</h2>
                {{$article->updated_at}}
            </div>
        </div>
    </a>
@endforeach

@endsection