<?php

use Illuminate\Database\Seeder;

class BowenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quotes')->insert([
            'type' => 1,
            'order' => 1,
            'content' => 'I believe that we are each responsible for taking care of our own health, growth and being. And I recognise that sometimes life brings things up for us; processes from which we can learn and grow, but which can be difficult to navigate. In such times we sometimes feel a pull to reach out for help and honour ourselves through doing that.',
            'color' => 2
        ]);
        DB::table('texts')->insert([
            'type' => 1,
            'order' => 0,
            'content' => 'Bowen is a relaxing, gentle and potentially powerful Holistic Therapy understanding that each part of our being connects to and influences another.

            Often releasing and improving Physical Conditions and bringing balance with Emotional and Mind Based imbalances too. In my understanding Physical, Emotional, Mental and Spiritual health and vibrancy are all interconnected, and as such I often see more fluidity with Spiritual and Energetical bodies as things start to come more in-balance and free.
            
            Bowen brings potential for remembering and releasing old trauma and old injuries. And for highlighting and releasing areas where you may feel stuck in life. It has massive potential for bringing focus, insight and balance for moving forward positively, with improved health, vibrancy, calm and clarity.',
        ]);
        DB::table('texts')->insert([
            'type' => 1,
            'order' => 2,
            'content' => 'Some people use Bowen Therapy to treat physical conditions and imbalances, which is great.

            Others are ready for more in-depth work, including emotional, mental and energetical layers. These are accessed through tuning deeply into the body and using it’s natural insight and guidance to work with what is presenting in a multi-layered way.
            
            Bowen is great following a deep process and can help shift blocked energy which is ready to be released. It is also great for realigning and activating, so that you can move forward from a freer space.',
        ]);
    }
}
