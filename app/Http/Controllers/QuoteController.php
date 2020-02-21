<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quote;
use App\Text;
use App\BlogArticle;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //FIND ORDER
        $article = BlogArticle::with('texts')->with('quotes')->findOrFail($request->blog_article_id);
        $order = fix_order($article);

        $item = Quote::create([
            'blog_article_id' => $request->blog_article_id,
            'type' => $request->type,
            'order' => $order,
            'color' => $request->color,
            'content' => $request->content,
        ]);
        $item->save();
        $DOM_id = 'content-'.$request->order;
        return back()->with('success', $DOM_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $item = Quote::findOrFail($id);
        $item->content = $request->content;
        $item->color = $request->color;
        $item->save();
        $DOM_id = 'content-quote-'.$id;
        return back()->with('success', $DOM_id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quote = Quote::findOrFail($id);
        $quote->delete();

        //FIND ORDER
        $article = BlogArticle::with('texts')->with('quotes')->findOrFail($quote->blog_article_id);
        fix_order($article);

        return back()->with('delete', 'Quote has been deleted');
    }
}
