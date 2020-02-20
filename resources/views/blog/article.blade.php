@extends('layouts/admin')

@section('admin')

{{-- {{dd($order)}}  --}}

<?php
    if(sizeof($order) > 0) {
        $action = 'update';
    }else {
        $action = 'store';
    }
    $numberOfElems = sizeof($order) - 3;
    $text = 'text';
    $quote = 'quote';
?>

<div id="admin-side-panel" class="admin-side-panel">
    <div class="admin-side-panel--item admin-side-panel--item__head">Image</div>
    <div class="admin-side-panel--item admin-side-panel--item__head">Title</div>

    <hr>

    @for($i = 0; $i < $numberOfElems; $i++)
        @if ($order[$i] instanceof App\Text)
            <div class="admin-side-panel--item">
                Text
            </div>
        @elseif($order[$i] instanceof App\Quote)
            <div class="admin-side-panel--item">
                Quote
            </div>
        @endif
    @endfor
    
        <div id="add-text-btn" class="admin-side-panel--item admin-side-panel--item__add" onClick='addElem("Text");'>
            + Text
        </div>
        <div class="admin-side-panel--item admin-side-panel--item__add" onClick='addElem("Quote");'>
            + Quote
        </div>
</div>
<div id="admin-content-area" class="admin-content-area">
    <form method='POST' action="{{action('BlogArticleController@'.$action, ($action === 'update') ? $order['id'] : null)}}" enctype="multipart/form-data">
        @csrf
        <div class='img-form'>
            <div class='form-img--container'>
                <img class='form-img' src="{{url($order['item_photo_path']) ?? './img/logo.svg'}}"/>
            </div>
            <button class='blog-article-btn blog-article-btn--submit' type='submit'>
                Submit Changes
            </button>
        </div>
    </form>
    
    <form class="form-section" method='POST' action="{{action('BlogArticleController@'.$action, ($action === 'update') ? $order['id'] : null)}}" enctype="multipart/form-data">
        @csrf
        @if ($action === 'update')
            <input name="_method" type="hidden" value="put">
        @endif 
        <input id='blog-title' class='blog-title-input' name='title' type='text' value="{{$order['title'] ?? 'title'}}"/>
        <button class='blog-article-btn blog-article-btn--submit' type='submit'>
            Submit Changes
        </button>
    </form>
    
    @for($i = 0; $i < $numberOfElems; $i++)
    
        @if ($order[$i] instanceof App\Text)
            
            <form class="form-section" method='POST' action="{{action('TextController@'.$action, ($action === 'update') ? $order[$i]->id : null)}}" enctype="multipart/form-data">
                @csrf
                @if ($action === 'update')
                    <input name="_method" type="hidden" value="put">
                @endif 
                <label class='form-label' for="text-content">Text Content</label>
                <textarea id="{{'content-'.$i}}" name='content' class='blog-text-area blog-text-area--Text'>
                    {{$order[$i]->content}}
                </textarea>
                <div class="blog-article-btn-container">
                    <button class='blog-article-btn blog-article-btn--submit' type='submit'>
                        Submit Changes
                    </button>
            </form>
            <form method="POST" action="{{action('TextController@destroy', $order[$i]->id)}}">
                @csrf
                    <input name="_method" type="hidden" value="delete">
                    <button class='blog-article-btn blog-article-btn--delete' type='submit'>
                        Delete
                    </button>
                </div>
            </form>
            <br/><br/>
    
        @elseif($order[$i] instanceof App\Quote)
    
            <form class="form-section" method='POST' action="{{action('QuoteController@'.$action, ($action === 'update') ? $order[$i]->id : null)}}" enctype="multipart/form-data">
                @csrf
                @if ($action === 'update')
                    <input name="_method" type="hidden" value="put">
                @endif 
                <div>
                    <label class='form-label' for="quote-content">Quote Content</label>
                    <label for="color"></label>
                    <select name="color">
                        <option value="1">blue</option>
                        <option value="2">green</option>
                    </select>
                </div>
                <textarea id="{{'content-'.$i}}" name='content' class='blog-text-area blog-text-area--Quote'>
                    {{$order[$i]->content}}
                </textarea>
                <div class="blog-article-btn-container">
                    <button class='blog-article-btn blog-article-btn--submit' type='submit'>
                        Submit Changes
                    </button>
            </form>
            <form method="POST" action="{{action('QuoteController@destroy', $order[$i]->id)}}">
                @csrf  
                    <input name="_method" type="hidden" value="delete">
                    <button class='blog-article-btn blog-article-btn--delete' type='submit'>
                        Delete
                    </button>
                </div>
            </form>
            <br/><br/>
    
        @endif
    @endfor
    
    <script type="text/javascript" src="{{ URL::asset('js/helpers/highlightElem.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/helpers/addElemToContentArea.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/helpers/addElemToSidePanel.js') }}"></script>
    <script language="javascript">

        const submitForms = () => {
            const forms = document.forms
            for(let i = 0; i< forms.length; i++){
                forms[i].submit()
            }
        }

        const handleDeleteOfNewItem = (id) => {
            console.log('id', id)
            const element = document.getElementById(id)
            element.parentNode.removeChild(element)
        }
        
        const addElem = (typeOfElem) => {
            addElemToContentArea(typeOfElem)
            addElemToSidePanel(typeOfElem)
        }
        
        
    </script>
    <?php
        if (session('success')){
            $id = session('success');
            var_dump($id);
            echo('<script>highlightElement("'.$id.'", true)</script>');
        }
    ?>
    
    <button id='submitAllBtn' class='blog-article-btn blog-article-btn--submit' onClick="submitForms();">
        Submit All Changes
    </button>
</div>


  

@endsection