<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BlogArticle;

class BlogArticleController extends Controller
{
    /**
     * Display blog articles for admin area
     */
    public function get()
    {
        $articles = BlogArticle::with('texts')->with('quotes')->get();
        return $articles;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = BlogArticle::with('texts')->with('quotes')->get();
        return view('blog/articlesList', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        var_dump($request->title);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $article = BlogArticle::with('texts')->with('quotes')->findOrFail($id);
        $numberOfElements = sizeof($article->texts) + sizeof($article->quotes);
        $order = [
            'id' => $article->id,
            'title' => $article->title,
            'item_photo_path' => $article->item_photo_path
        ];
        foreach($article->texts as $text){
            $order[$text->order] = $text;
        }
        foreach($article->quotes as $quote){
            $order[$quote->order] = $quote;
        }
        return view('blog/article', compact('order'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $item = BlogArticle::findOrFail($id);
        $item->title = $request->title;
        $item->save();
        return back()->with('success', 'blog-title');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    
}
