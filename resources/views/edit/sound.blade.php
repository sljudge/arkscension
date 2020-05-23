@extends('layouts/admin')

@section('admin')


<?php

    // if(isset($order) && sizeof($order) > 0) {
    //     $action = 'update';
    //     $numberOfElems = sizeof($order) - 3;
    // }else if($id = Session::get('id')){
    //     $action = 'update';
    //     $order = [
    //         'id' => $blogArticle->id,
    //         'title' => '',
    //         'item_photo_path' => ''
    //     ];
    //     $numberOfElems = 0;
    // }else {
    //     $action = 'store';
    // }

    $numberOfElems = sizeof($order);
?>

<div id="admin-side-panel" class="admin-side-panel">
    <div class="admin-side-panel--item admin-side-panel--item__head">Title</div>

    <hr>
    @if(sizeof($order) > 0)
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
    @endif
    
    <button id="add-text-btn" class="admin-side-panel--item admin-side-panel--item__add" onClick='addElem("Text");'>
        + Text
    </button>
    <button id="add-quote-btn" class="admin-side-panel--item admin-side-panel--item__add" onClick='addElem("Quote");'>
        + Quote
    </button>
</div>
<div id="admin-content-area" class="admin-content-area">

    <h2 class="admin-section-header">Sound Healing</h2>
    
    @if(sizeof($order) > 0)
        @for($i = 0; $i < $numberOfElems; $i++)
        
            @if ($order[$i] instanceof App\Text)
                
                <form class="form-section" method='POST' action="{{action('TextController@update', $order[$i]->id)}}" enctype="multipart/form-data">
                    @csrf
                    <input name="_method" type="hidden" value="put">

                    <label class='form-label' for="content">Text Content</label>
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
        
                <form class="form-section" method='POST' action="{{action('QuoteController@update', $order[$i]->id)}}" enctype="multipart/form-data">
                    @csrf
                    <input name="_method" type="hidden" value="put">

                    <label class='form-label' for="content">Quote Content</label>
                    <label for="color"></label>
                    <select name="color">
                        <option value="1" {{$order[$i]->color == 1 ? 'selected' : ''}}>Blue</option>
                        <option value="2" {{$order[$i]->color == 2 ? 'selected' : ''}}>Green</option>
                    </select>
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
    @endif
    
    <script type="text/javascript" src="{{ URL::asset('js/helpers/highlightElem.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/helpers/addElemToContentArea.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/helpers/addElemToSidePanel.js') }}"></script>
    <script language="javascript">

        const submitForms = async () => {
            const forms = document.getElementsByClassName('form-section')
            console.log('forms', forms)
            for(let i = 0; i< forms.length; i++){
                await forms[i].submit()
            }
        }

        const handleDeleteOfNewItem = (id) => {
            //content elem
            const contentElement = document.getElementById(id)
            contentElement.parentNode.removeChild(contentElement)
            //side panel elem
            const sideElement = document.getElementById(`side-panel-${id.slice(-2)}`)
            sideElement.parentNode.removeChild(sideElement)
            document.getElementById('add-quote-btn').disabled = false
            document.getElementById('add-text-btn').disabled = false
        }
        
        const addElem = (typeOfElem) => {
            document.getElementById('add-quote-btn').disabled = true
            document.getElementById('add-text-btn').disabled = true
            const contentId = addElemToContentArea(typeOfElem, 2)
            addElemToSidePanel(typeOfElem, contentId)
        }
        
        
    </script>
    <?php
        if (session('success')){
            $id = session('success');
            echo('<script>highlightElement("'.$id.'", true)</script>');
        }
    ?>
    
    {{-- <button id='submitAllBtn' class='blog-article-btn blog-article-btn--submit' onClick="submitForms();">
        Submit All Changes
    </button> --}}

</div>


  

@endsection