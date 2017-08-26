<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Alécio Santana da Silva',
            'email' => 'aleciosantana@gmail.com',
            'password' => bcrypt('alecio'),
            'account_status' => 1,
            'profile_id' => 1,
            'remember_token' => str_random(10),
        ]);
        factory(App\User::class, 50)->create();
    }
}
