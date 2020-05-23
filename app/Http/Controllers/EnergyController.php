<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Text;
use App\Quote;

class EnergyController extends Controller
{
    public function index()
    {
        $texts = Text::where('type', 3)->get();
        $quotes = Quote::where('type', 3)->get();
        $order = [];
        array_push($order, ...$texts);
        array_push($order, ...$quotes);
        return $order;
    }

    public function edit()
    {
        $texts = Text::where('type', 3)->get();
        $quotes = Quote::where('type', 3)->get();
        $order = [];
        array_push($order, ...$texts);
        array_push($order, ...$quotes);
        usort($order, function ($a, $b) {return $a["order"] === $b["order"] ? 0 : $a["order"] < $b["order"] ? -1 : 1;});
        return view('edit/energy', compact('order'));
    }
}
