<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogArticle extends Model
{
    public function texts()
    {
        return $this->hasMany('App\Text');
    }

    public function quotes()
    {
        return $this->hasMany('App\Quote');
    }
}
