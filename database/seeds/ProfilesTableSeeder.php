<?php

use Illuminate\Database\Seeder;

class ProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('profiles')->insert([
            'name' => 'Administrador'
        ]);

        DB::table('profiles')->insert([
            'name' => 'Funcionário'
        ]);
    }
}
