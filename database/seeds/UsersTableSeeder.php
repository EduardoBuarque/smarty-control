<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();

        $user->name = 'Alécio Santana da Silva';
        $user->email = 'aleciosantana@gmail.com';
        $user->password = bcrypt('alecio');
        $user->account_status = 1;
        $user->profile_id = 1;
        $user->remember_token = str_random(10);

        $user->save();

        factory(User::class, 50)->create();
    }
}
