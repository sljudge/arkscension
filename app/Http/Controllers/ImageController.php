<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BlogArticle;

class ImageController extends Controller
{
    public function update(Request $request, $id)
    {
        $path = $request->file('blog_article_image')->store('uploads');
        $blogArticle = BlogArticle::findOrFail($id);
        $blogArticle->item_photo_path = '/img/'.$path;
        $blogArticle->save();
        return back()->with('success', 'blog-article-image');
    }

    public function store(Request $request)
    {
        $path = $request->file('blog_article_image')->store('uploads');
        $blogArticle = BlogArticle::create([
            'item_photo_path' => '/img/'.$path
        ]);
        $blogArticle->save();
        return redirect('admin/blog/'.$blogArticle->id.'/edit')->with(['id' => $blogArticle->id]);
    }
}
