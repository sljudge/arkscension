<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class QuotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quotes')->truncate();

        $faker = Faker::create();
        for($i=1; $i<=5; $i++){
            if($i == 1 || $i == 3 || $i == 4){
                DB::table('quotes')->insert([
                    'type' => 5,
                    'blog_article_id' => $i,
                    'order' => 1,
                    'content' => $faker->paragraphs($nb = 1, $asText = true),
                    'color' => 'blue'
                ]);
            }
        }
    }
}