<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    public function itemable()
    {
        return $this->belongsTo('App\BlogArticle');
    }
}
