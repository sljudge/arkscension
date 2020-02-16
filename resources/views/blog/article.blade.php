@extends('layouts/admin')

@section('admin')

{{-- {{dd($order)}} --}}

<?php
    if(sizeof($order) > 0) {
        var_dump('update');
        $action = 'update';
    }else {
        var_dump('store');
        $action = 'store';
    }
?>

<form method='POST' action="{{action('BlogArticleController@'.$action, ($action === 'update') ? $order['id'] : null)}}" enctype="multipart/form-data">
    @csrf
    <div class='img-form'>
        <div class='form-img--container'>
            <img class='form-img' src="{{url($order['item_photo_path']) ?? './img/logo.svg'}}"/>
        </div>
        <button class='blog-article-submit-btn' type='submit'>
            Submit Changes
        </button>
    </div>
</form>

<form method='POST' action="{{action('BlogArticleController@'.$action, ($action === 'update') ? $order['id'] : null)}}" enctype="multipart/form-data">
    @csrf
    @if ($action === 'update')
        <input name="_method" type="hidden" value="put">
    @endif 
    <input id='blog-title' class='blog-title-input' name='title' type='text' value="{{$order['title'] ?? 'title'}}"/>
    <button class='blog-article-submit-btn' type='submit'>
        Submit Changes
    </button>
</form>

@for($i = 0; $i < sizeof($order) - 3; $i++)

    @if ($order[$i] instanceof App\Text)
        
        <form method='POST' action="{{action('TextController@'.$action, ($action === 'update') ? $order[$i]->id : null)}}" enctype="multipart/form-data">
            @csrf
            @if ($action === 'update')
                <input name="_method" type="hidden" value="put">
            @endif 
            <label class='form-label' for="text-content">Text Content</label>
            <textarea name='content' class='blog-text-area blog-text-area--text'>
                {{$order[$i]->content}}
            </textarea>
            <button class='blog-article-submit-btn' type='submit'>
                Submit Changes
            </button>
        </form>
        <br/><br/>

    @elseif($order[$i] instanceof App\Mandala)

        <form method='POST' action="{{action('MandalaController@'.$action, ($action === 'update') ? $order[$i]->id : null)}}" enctype="multipart/form-data">
            @csrf
            @if ($action === 'update')
                <input name="_method" type="hidden" value="put">
            @endif 
            <div>
                <label class='form-label' for="mandala-content">Mandala Content</label>
                <label for="color"></label>
                <select name="color">
                    <option value="blue">blue</option>
                    <option value="brown">brown</option>
                    <option value="pink">pink</option>
                </select>
            </div>
            <textarea name='content' class='blog-text-area blog-text-area--mandala'>
                {{$order[$i]->content}}
            </textarea>
            <button class='blog-article-submit-btn' type='submit'>
                Submit Changes
            </button>
        </form>
        <br/><br/>

    @endif
@endfor

<script language="javascript">
    const submitForms = () => {
        const forms = document.forms
        for(let i = 0; i< forms.length; i++){
            forms[i].submit()
        }
    }
</script>
<script type="text/javascript" src="{{ URL::asset('js/helpers/highlightElem.js') }}"></script>

<?php
    if (session('success')){
        $id = session('success');
        var_dump($id);
        echo('<script>highlightElement("'.$id.'", true)</script>');
    }
?>

<button class='blog-article-submit-btn' onClick="submitForms();">
    Submit All Changes
</button>

  

@endsection