<?php

use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pages')->truncate();
        $pages = [
            ['Bowen Therapy', 'bowen_therapy'],
            ['Sound Healing', 'sound_healing'],
            ['Energy Balancing', 'energy_balancing'],
            ['Meditation', 'meditation']   
        ];
        foreach ($pages as $page){
            DB::table('pages')->insert([
                'name' => $page[0],
                'slug' => $page[1]
            ]);
        }
    }
}
