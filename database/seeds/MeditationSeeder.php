<?php

use Illuminate\Database\Seeder;

class MeditationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quotes')->insert([
            'type' => 4,
            'order' => 1,
            'content' => 'As Meditation becomes more a part of who you are, moment to moment, it becomes effortless, joyous; something which you drop into. An opening of space… for higher wisdom, guidance and universal love to come through.',
            'color' => 1
        ]);
        DB::table('texts')->insert([
            'type' => 4,
            'order' => 0,
            'content' => 'I have been meditating for over 20 years; it has been a journey full of amazing and magical experiences and so much evolution and learning. I feel so passionately about the gifts that Meditation brings and feel honoured to be able to offer these gifts forward. Sharing what works Well and some of the pitfalls, as well as great Tools and Techniques but most of all an doing so with the Humble Energy of Love.',
        ]);
        DB::table('texts')->insert([
            'type' => 4,
            'order' => 2,
            'content' => 'If you would like to bring more focus to your Meditation Practice it can be really helpful to observe where you are currently and how you feel in relation to it, through asking questions. I have put a few examples which work well below:

            How would you describe your current Meditation Practice, in terms of Dedication and Frequency on a scale of 0 to 10?
            (0 being non-existent and 10 being it is an inherent part of who you are).
            How Easeful is your meditation practice, in terms of Focus and Enjoyment?
            (0 difficulty in staying focused and still and 10 easily dropping into connection).
            How much Benefit are you getting from meditation?
            (0 it causes stress and I am in my head efforting, 10 it brings me to a place of centered calm).',
        ]);
    }
}
