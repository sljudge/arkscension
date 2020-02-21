<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    public function itemable()
    {
        return $this->belongsTo('App\BlogArticle');
    }

    protected $fillable = [
        'blog_article_id', 'type', 'order', 'color', 'content'
    ];
}
