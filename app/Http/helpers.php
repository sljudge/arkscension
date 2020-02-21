<?php

use App\Text;
use App\Quote;


if(! function_exists('fixOrder')) {
    function fix_order($article){
        //Merge texts and quotes in order to sort 
        $texts = [];
        array_push($texts, ...$article->texts);
        $quotes = [];
        array_push($quotes, ...$article->quotes);
        $elems = array_merge($texts, $quotes);
        //sort
        usort($elems, function ($a, $b) {return $a["order"] === $b["order"] ? 0 : $a["order"] < $b["order"] ? -1 : 1;});
        //Loop through elems and correct order where necessary
        for($i = 0; $i < sizeof($elems); $i++){
            $elem = $elems[$i];
            if($elem->order !== $i){
                if($elem instanceof App\Text){
                    $item = Text::findOrFail($elem->id);
                    $item->order = $i;
                    $item->save();
                }else if($elem instanceof App\Quote){
                    $item = Quote::findOrFail($elem->id);
                    $item->order = $i;
                    $item->save();
                }
            }
        }
        return sizeof($elems);
    }
}

?>