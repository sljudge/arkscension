<?php

namespace App\Http\Controllers;

use App\Page;
use App\Block;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::all();
        return $pages;
    }

    /**
     * Create a new blank page.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $page = Page::create([
            'name' => $request->name,
            'slug' => $request->slug
        ]);
        $page->save();
        return $page;
    }

    /**
     * Update blocks for specified page.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function updateBlocks(Request $request, Page $page, $id)
    {
        $page = Page::findOrFail($id);
        $page->blocks = $request->getContent();
        $page->save();
        return $page;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page, $id)
    {
        $page = Page::findOrFail($id);
        $page->delete();
    }
}
