<?php

use Illuminate\Database\Seeder;
use App\Profile;
use App\Page;

class ProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Profile::create([ 'name' => 'Administrador' ]);
        $funci = Profile::create([ 'name' => 'Funcionario' ]);

        $pages = Page::all();
        foreach ($pages as $page) {
            $admin->pages()->attach($page->id);
        }
        $admin->save();

        $pages = Page::all();
        foreach ($pages as $page) {
            if (in_array($page->id, [1, 2, 3, 4]))
                $funci->pages()->attach($page->id);
        }
        $funci->save();
    }
}
