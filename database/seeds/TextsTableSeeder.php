<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TextsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('texts')->truncate();

        $faker = Faker::create();
        for($i=1; $i<=5; $i++){
            DB::table('texts')->insert([
                'type' => 5,
                'blog_article_id' => $i,
                'order' => 0,
                'content' => $faker->paragraphs($nb = rand(1,5), $asText = true)
            ]);
            $randInt = rand(1,3);
            if($randInt == 3){
                DB::table('texts')->insert([
                    'type' => 5,
                    'blog_article_id' => $i,
                    'order' => 2,
                    'content' => $faker->paragraphs($nb = rand(1,5), $asText = true)
                ]);
            }
        }
    }
}
