<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mandala extends Model
{
    public function itemable()
    {
        return $this->belongsTo('App\BlogArticle');
    }
}
