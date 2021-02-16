<?php

use Illuminate\Database\Seeder;

class BlocksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blocks')->truncate();
        $path = database_path('seed_files/blocks.json');
        if(file_exists($path)){
            $blocks = json_decode(file_get_contents($path));
            foreach($blocks as $block){
                DB::table('blocks')->insert([
                    'page_id' => $block->page_id,
                    'order' => $block->order,
                    'block' => json_encode($block->block),
                ]);
            }
        }
    }
}
