<?php

use Illuminate\Database\Seeder;

class SoundSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('texts')->insert([
            'type' => 2,
            'order' => 0,
            'content' => serialize([
                'Sound healing uses sound frequencies to bring Balance, Harmony and Health to the Physical Body and Organs as well as the Emotional, Mental and Spiritual Bodies.',
                'I work with my voice, as well as sound bowls, cymbals and gong. The healing is very relaxing and often incorporates colour healing, guided meditation and energy healing.',
                'How Does Sound Healing Work?',
                'Everything is made up of unique sound frequencies, including the human body which is made up of 70% water and makes it a very good conductor of sound. Every organ, bone and cell in the body has its own resonant frequency. Together they are a composition of ebbing and flowing frequencies. When one organ in the body is out of balance it will affect the whole body. Through the resonance of sound it is possible to bring the body back into harmony.',
                'I have trained with Chloe Goodchild, Denise Linn, Lorraine Murray of Connected Kids and Jay & Kestrel of Bridget Healing.'
            ])
        ]);
    }
}
