<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class BlogArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blog_articles')->truncate();

        $faker = Faker::create();
        for($i=0; $i<5; $i++){
            DB::table('blog_articles')->insert([
                'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                'article' => $faker->paragraphs($nb = 5, $asText = true),
                'item_photo_path' => $faker->imageUrl($width = 640, $height = 480, 'cats'),
            ]);
        }
    }
}
