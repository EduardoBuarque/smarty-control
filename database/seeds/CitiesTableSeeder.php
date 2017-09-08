<?php

use Illuminate\Database\Seeder;
use App\City;


class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\City::class, 5)->create();
    }
}
