<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePriceTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_tables', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('header');
            $table->string('first_row_desc');
            $table->integer('first_row_price');
            $table->string('second_row_desc')->nullable();
            $table->integer('second_row_price')->nullable();
            $table->string('third_row_desc')->nullable();
            $table->integer('third_row_price')->nullable();
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
        Schema::dropIfExists('price_tables');
    }
}
