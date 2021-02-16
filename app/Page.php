<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = array('name', 'slug', 'blocks');

    public function blocks()
    {
        return $this->hasMany('App\Block');
    }
}
