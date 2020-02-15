<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMandalasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mandalas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('type');
            $table->integer('blog_article_id')->nullable();
            $table->integer('order');
            $table->mediumText('content');
            $table->string('color');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mandalas');
    }
}
